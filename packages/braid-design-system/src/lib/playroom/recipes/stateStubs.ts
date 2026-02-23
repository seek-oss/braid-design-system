import { makeStoreConsumer } from '../playroomState';

const { setDefaultState, getState, setState, toggleState, resetState } =
  makeStoreConsumer(new Map(), new Map(), () => {});

export { setDefaultState, getState, setState, toggleState, resetState };
