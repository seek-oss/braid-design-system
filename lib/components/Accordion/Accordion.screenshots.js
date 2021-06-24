import _jsx from '@babel/runtime/helpers/jsx';
import _slicedToArray from '@babel/runtime/helpers/slicedToArray';

let _Placeholder,
  _Placeholder2,
  _Placeholder3,
  _Placeholder4,
  _Placeholder5,
  _Placeholder6,
  _Placeholder7,
  _Placeholder8,
  _Placeholder9,
  _Placeholder10,
  _Placeholder11,
  _Placeholder12,
  _Placeholder13,
  _Placeholder14,
  _Placeholder15,
  _Placeholder16,
  _Placeholder17,
  _Placeholder18,
  _Placeholder19,
  _Placeholder20,
  _Placeholder21,
  _Placeholder22,
  _Placeholder23,
  _Placeholder24,
  _Placeholder25,
  _Placeholder26,
  _Placeholder27,
  _Text,
  _Text2;

import React, { useState } from 'react';
import { AccordionItem, Accordion, Text } from '../../components';
import { Placeholder } from '../../playroom/components';
export var screenshots = {
  screenshotWidths: [320],
  examples: [
    {
      label: 'Default Accordion',
      Example: function Example(_ref) {
        const id = _ref.id;

        const _useState = useState(false),
          _useState2 = _slicedToArray(_useState, 2),
          expanded1 = _useState2[0],
          setExpanded1 = _useState2[1];

        const _useState3 = useState(true),
          _useState4 = _slicedToArray(_useState3, 2),
          expanded2 = _useState4[0],
          setExpanded2 = _useState4[1];

        const _useState5 = useState(false),
          _useState6 = _slicedToArray(_useState5, 2),
          expanded3 = _useState6[0],
          setExpanded3 = _useState6[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {},
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder ||
              (_Placeholder = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder2 ||
              (_Placeholder2 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder3 ||
              (_Placeholder3 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Default Accordion without dividers',
      Example: function Example(_ref2) {
        const id = _ref2.id;

        const _useState7 = useState(false),
          _useState8 = _slicedToArray(_useState7, 2),
          expanded1 = _useState8[0],
          setExpanded1 = _useState8[1];

        const _useState9 = useState(true),
          _useState10 = _slicedToArray(_useState9, 2),
          expanded2 = _useState10[0],
          setExpanded2 = _useState10[1];

        const _useState11 = useState(false),
          _useState12 = _slicedToArray(_useState11, 2),
          expanded3 = _useState12[0],
          setExpanded3 = _useState12[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {
            dividers: false,
          },
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder4 ||
              (_Placeholder4 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder5 ||
              (_Placeholder5 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder6 ||
              (_Placeholder6 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Default Accordion with custom space',
      Example: function Example(_ref3) {
        const id = _ref3.id;

        const _useState13 = useState(false),
          _useState14 = _slicedToArray(_useState13, 2),
          expanded1 = _useState14[0],
          setExpanded1 = _useState14[1];

        const _useState15 = useState(true),
          _useState16 = _slicedToArray(_useState15, 2),
          expanded2 = _useState16[0],
          setExpanded2 = _useState16[1];

        const _useState17 = useState(false),
          _useState18 = _slicedToArray(_useState17, 2),
          expanded3 = _useState18[0],
          setExpanded3 = _useState18[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {
            space: 'xlarge',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder7 ||
              (_Placeholder7 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder8 ||
              (_Placeholder8 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder9 ||
              (_Placeholder9 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Standard secondary Accordion',
      Example: function Example(_ref4) {
        const id = _ref4.id;

        const _useState19 = useState(false),
          _useState20 = _slicedToArray(_useState19, 2),
          expanded1 = _useState20[0],
          setExpanded1 = _useState20[1];

        const _useState21 = useState(true),
          _useState22 = _slicedToArray(_useState21, 2),
          expanded2 = _useState22[0],
          setExpanded2 = _useState22[1];

        const _useState23 = useState(false),
          _useState24 = _slicedToArray(_useState23, 2),
          expanded3 = _useState24[0],
          setExpanded3 = _useState24[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {
            size: 'standard',
            tone: 'secondary',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder10 ||
              (_Placeholder10 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder11 ||
              (_Placeholder11 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder12 ||
              (_Placeholder12 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Standard secondary Accordion without dividers',
      Example: function Example(_ref5) {
        const id = _ref5.id;

        const _useState25 = useState(false),
          _useState26 = _slicedToArray(_useState25, 2),
          expanded1 = _useState26[0],
          setExpanded1 = _useState26[1];

        const _useState27 = useState(true),
          _useState28 = _slicedToArray(_useState27, 2),
          expanded2 = _useState28[0],
          setExpanded2 = _useState28[1];

        const _useState29 = useState(false),
          _useState30 = _slicedToArray(_useState29, 2),
          expanded3 = _useState30[0],
          setExpanded3 = _useState30[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {
            size: 'standard',
            tone: 'secondary',
            dividers: false,
          },
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder13 ||
              (_Placeholder13 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder14 ||
              (_Placeholder14 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder15 ||
              (_Placeholder15 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Small secondary Accordion',
      Example: function Example(_ref6) {
        const id = _ref6.id;

        const _useState31 = useState(false),
          _useState32 = _slicedToArray(_useState31, 2),
          expanded1 = _useState32[0],
          setExpanded1 = _useState32[1];

        const _useState33 = useState(true),
          _useState34 = _slicedToArray(_useState33, 2),
          expanded2 = _useState34[0],
          setExpanded2 = _useState34[1];

        const _useState35 = useState(false),
          _useState36 = _slicedToArray(_useState35, 2),
          expanded3 = _useState36[0],
          setExpanded3 = _useState36[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {
            size: 'small',
            tone: 'secondary',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder16 ||
              (_Placeholder16 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder17 ||
              (_Placeholder17 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder18 ||
              (_Placeholder18 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Small secondary Accordion without dividers',
      Example: function Example(_ref7) {
        const id = _ref7.id;

        const _useState37 = useState(false),
          _useState38 = _slicedToArray(_useState37, 2),
          expanded1 = _useState38[0],
          setExpanded1 = _useState38[1];

        const _useState39 = useState(true),
          _useState40 = _slicedToArray(_useState39, 2),
          expanded2 = _useState40[0],
          setExpanded2 = _useState40[1];

        const _useState41 = useState(false),
          _useState42 = _slicedToArray(_useState41, 2),
          expanded3 = _useState42[0],
          setExpanded3 = _useState42[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {
            size: 'small',
            tone: 'secondary',
            dividers: false,
          },
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder19 ||
              (_Placeholder19 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder20 ||
              (_Placeholder20 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder21 ||
              (_Placeholder21 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Xsmall secondary Accordion',
      Example: function Example(_ref8) {
        const id = _ref8.id;

        const _useState43 = useState(false),
          _useState44 = _slicedToArray(_useState43, 2),
          expanded1 = _useState44[0],
          setExpanded1 = _useState44[1];

        const _useState45 = useState(true),
          _useState46 = _slicedToArray(_useState45, 2),
          expanded2 = _useState46[0],
          setExpanded2 = _useState46[1];

        const _useState47 = useState(false),
          _useState48 = _slicedToArray(_useState47, 2),
          expanded3 = _useState48[0],
          setExpanded3 = _useState48[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {
            size: 'xsmall',
            tone: 'secondary',
          },
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder22 ||
              (_Placeholder22 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder23 ||
              (_Placeholder23 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder24 ||
              (_Placeholder24 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Xsmall secondary Accordion without dividers',
      Example: function Example(_ref9) {
        const id = _ref9.id;

        const _useState49 = useState(false),
          _useState50 = _slicedToArray(_useState49, 2),
          expanded1 = _useState50[0],
          setExpanded1 = _useState50[1];

        const _useState51 = useState(true),
          _useState52 = _slicedToArray(_useState51, 2),
          expanded2 = _useState52[0],
          setExpanded2 = _useState52[1];

        const _useState53 = useState(false),
          _useState54 = _slicedToArray(_useState53, 2),
          expanded3 = _useState54[0],
          setExpanded3 = _useState54[1];

        return /* #__PURE__*/ _jsx(
          Accordion,
          {
            size: 'xsmall',
            tone: 'secondary',
            dividers: false,
          },
          void 0,
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 1',
              id: ''.concat(id, '_1'),
              expanded: expanded1,
              onToggle: setExpanded1,
            },
            void 0,
            _Placeholder25 ||
              (_Placeholder25 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 2',
              id: ''.concat(id, '_2'),
              expanded: expanded2,
              onToggle: setExpanded2,
            },
            void 0,
            _Placeholder26 ||
              (_Placeholder26 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
          /* #__PURE__*/ _jsx(
            AccordionItem,
            {
              label: 'Accordion item 3',
              id: ''.concat(id, '_3'),
              expanded: expanded3,
              onToggle: setExpanded3,
            },
            void 0,
            _Placeholder27 ||
              (_Placeholder27 = /* #__PURE__*/ _jsx(Placeholder, {
                height: 80,
              })),
          ),
        );
      },
    },
    {
      label: 'Default AccordionItem',
      Example: function Example(_ref10) {
        const id = _ref10.id;
        return /* #__PURE__*/ _jsx(
          AccordionItem,
          {
            label: 'Label',
            id,
          },
          void 0,
          _Text || (_Text = /* #__PURE__*/ _jsx(Text, {}, void 0, 'Content')),
        );
      },
    },
    {
      label: 'AccordionItem with size and tone',
      Example: function Example(_ref11) {
        const id = _ref11.id;
        return /* #__PURE__*/ _jsx(
          AccordionItem,
          {
            label: 'Label',
            id,
            size: 'small',
            tone: 'secondary',
          },
          void 0,
          _Text2 ||
            (_Text2 = /* #__PURE__*/ _jsx(
              Text,
              {
                size: 'small',
              },
              void 0,
              'Content',
            )),
        );
      },
    },
  ],
};
