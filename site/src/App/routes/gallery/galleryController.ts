interface Config {
  minZoom?: number;
  maxZoom?: number;
  wheelSpeed?: number;
  pinchSpeed?: number;
  initialX?: number;
  initialY?: number;
  initialScale?: number;
}

interface State {
  x: number;
  y: number;
  scale: number;
}

const defaultConfig = {
  minZoom: 1,
  maxZoom: 20,
  wheelSpeed: 1.75,
  pinchSpeed: 1,
  initialX: 0,
  initialY: 0,
  initialScale: 1,
};

export default (domElement: HTMLElement, config: Config = defaultConfig) => {
  const resolvedConfig = {
    ...defaultConfig,
    ...config,
  };

  const state: State = {
    x: resolvedConfig.initialX,
    y: resolvedConfig.initialY,
    scale: resolvedConfig.initialScale,
  };

  let mouseX = 0;
  let mouseY = 0;
  let touchInProgress = false;
  let pinchZoomLength = 0;

  const moveTo = ({
    x,
    y,
    scale = state.scale,
  }: {
    x: number;
    y: number;
    scale?: number;
  }) => {
    state.x = x;
    state.y = y;
    state.scale = scale;

    domElement.style.transform = `matrix(${scale}, 0, 0, ${scale}, ${x}, ${y})`;
  };

  moveTo(state);

  const moveByRatio = (targetX: number, targetY: number, ratio: number) => {
    let targetScale = ratio;

    const ratioedScale = state.scale * ratio;

    if (ratioedScale < resolvedConfig.minZoom) {
      if (state.scale === resolvedConfig.minZoom) {
        return;
      }

      targetScale = resolvedConfig.minZoom / state.scale;
    }

    if (ratioedScale > resolvedConfig.maxZoom) {
      if (state.scale === resolvedConfig.maxZoom) {
        return;
      }

      targetScale = resolvedConfig.maxZoom / state.scale;
    }

    moveTo({
      x: targetX - targetScale * (targetX - state.x),
      y: targetY - targetScale * (targetY - state.y),
      scale: state.scale * targetScale,
    });
  };

  const zoomTo = ({
    x,
    y,
    scale = state.scale,
  }: {
    x: number;
    y: number;
    scale?: number;
  }) => {
    moveByRatio(x, y, scale);
  };

  const onWheel = function (e: WheelEvent) {
    e.preventDefault();
    e.stopPropagation();

    const delta = e.deltaMode > 0 ? e.deltaY * 100 : e.deltaY;
    const sign = Math.sign(delta);
    const deltaAdjustedSpeed = Math.min(
      0.25,
      Math.abs((resolvedConfig.wheelSpeed * delta) / 128),
    );
    const scaleMultiplier = 1 - sign * deltaAdjustedSpeed;

    if (scaleMultiplier !== 1) {
      moveByRatio(e.clientX, e.clientY, scaleMultiplier);
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    if (touchInProgress) {
      return;
    }

    const dx = e.clientX - mouseX;
    const dy = e.clientY - mouseY;

    mouseX = e.clientX;
    mouseY = e.clientY;

    moveTo({ x: state.x + dx, y: state.y + dy });
  };

  const onMouseUp = () => {
    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
  };

  const onMouseDown = (e: MouseEvent) => {
    if (
      // @ts-expect-error
      /^(a|button|select)$/i.test(e.target.tagName) ||
      // @ts-expect-error
      e.target.getAttribute('role') === 'button'
    ) {
      return;
    }

    if (touchInProgress) {
      e.stopPropagation();
      return;
    }

    // for IE, left click == 1
    // for Firefox, left click == 0
    const isLeftButton =
      (e.button === 1 && window.event !== null) || e.button === 0;
    if (!isLeftButton) {
      return;
    }

    mouseX = e.clientX;
    mouseY = e.clientY;

    document.addEventListener('mousemove', onMouseMove, { passive: false });
    document.addEventListener('mouseup', onMouseUp, { passive: false });
  };

  const getPinchZoomLength = (
    finger1: TouchEvent['touches'][number],
    finger2: TouchEvent['touches'][number],
  ) => {
    const dx = finger1.clientX - finger2.clientX;
    const dy = finger1.clientY - finger2.clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const onTouchMove = (e: TouchEvent) => {
    e.stopPropagation();

    if (e.touches.length === 1) {
      const touch = e.touches[0];
      const dx = touch.clientX - mouseX;
      const dy = touch.clientY - mouseY;

      mouseX = touch.clientX;
      mouseY = touch.clientY;

      moveTo({ x: state.x + dx, y: state.y + dy });
    } else if (e.touches.length === 2) {
      e.preventDefault();

      const t1 = e.touches[0];
      const t2 = e.touches[1];
      const currentPinchLength = getPinchZoomLength(t1, t2);
      const scaleMultiplier =
        1 +
        (currentPinchLength / pinchZoomLength - 1) * resolvedConfig.pinchSpeed;

      mouseX = (t1.clientX + t2.clientX) / 2;
      mouseY = (t1.clientY + t2.clientY) / 2;

      moveByRatio(mouseX, mouseY, scaleMultiplier);

      pinchZoomLength = currentPinchLength;
    }
  };

  const onTouchEnd = (e: TouchEvent) => {
    if (e.touches.length > 0) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    } else {
      document.removeEventListener('touchmove', onTouchMove);
      document.removeEventListener('touchend', onTouchEnd);
      document.removeEventListener('touchcancel', onTouchEnd);
      touchInProgress = false;
    }
  };

  const onTouchStart = (e: TouchEvent) => {
    if (e.touches.length === 1) {
      mouseX = e.touches[0].clientX;
      mouseY = e.touches[0].clientY;
    } else if (e.touches.length === 2) {
      e.preventDefault();
      pinchZoomLength = getPinchZoomLength(e.touches[0], e.touches[1]);
    }

    if (touchInProgress) {
      return;
    }

    touchInProgress = true;
    document.addEventListener('touchmove', onTouchMove);
    document.addEventListener('touchend', onTouchEnd);
    document.addEventListener('touchcancel', onTouchEnd);
  };

  if (domElement && domElement.parentElement) {
    domElement.parentElement.addEventListener('wheel', onWheel, {
      passive: false,
    });
    domElement.parentElement.addEventListener('touchstart', onTouchStart, {
      passive: false,
    });
    domElement.parentElement.addEventListener('mousedown', onMouseDown, {
      passive: false,
    });
  }

  const stopBounce = (e: UIEvent) => {
    e.preventDefault();
    e.stopPropagation();
  };
  window.addEventListener('wheel', stopBounce, { passive: false });
  window.addEventListener('touchmove', stopBounce, { passive: false });

  const dispose = () => {
    if (domElement && domElement.parentElement) {
      domElement.parentElement.removeEventListener('wheel', onWheel);
      domElement.parentElement.removeEventListener('touchstart', onTouchStart);
      domElement.parentElement.removeEventListener('mousedown', onMouseDown);
    }

    document.removeEventListener('mousemove', onMouseMove);
    document.removeEventListener('mouseup', onMouseUp);
    document.removeEventListener('touchmove', onTouchMove);
    document.removeEventListener('touchend', onTouchEnd);
    document.removeEventListener('touchcancel', onTouchEnd);

    window.removeEventListener('wheel', stopBounce);
    window.removeEventListener('touchmove', stopBounce);
  };

  return {
    moveTo,
    zoomTo,
    dispose,
  };
};
