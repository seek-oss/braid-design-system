import _asyncToGenerator from "@babel/runtime/helpers/asyncToGenerator";
import _regeneratorRuntime from "@babel/runtime/regenerator";
import globby from 'globby';
import path from 'path';
import fs from 'fs-extra';
var svgComponentPaths = globby.sync('Icon*/*Svg.tsx', {
  cwd: __dirname,
  absolute: true
});
svgComponentPaths.forEach(function (svgComponentPath) {
  var componentName = path.basename(svgComponentPath, '.tsx'); // eslint-disable-next-line jest/valid-title

  describe(componentName, function () {
    it('should match snapshot', /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/_regeneratorRuntime.mark(function _callee() {
      var source;
      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return fs.readFile(svgComponentPath, 'utf-8');

            case 2:
              source = _context.sent;
              expect(source).toMatchSnapshot();

            case 4:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    })));
  });
});