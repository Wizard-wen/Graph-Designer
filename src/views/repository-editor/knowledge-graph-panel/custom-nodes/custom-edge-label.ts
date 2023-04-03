import { Graph } from '@antv/x6';

Graph.registerEdge(
  'custom-edge-label',
  {
    inherit: 'edge',
    defaultLabel: {
      markup: [
        {
          tagName: 'rect',
          selector: 'body',
        },
        {
          tagName: 'text',
          selector: 'label',
        },
      ],
      attrs: {
        label: {
          fill: '#000',
          fontSize: 14,
          textAnchor: 'middle',
          textVerticalAnchor: 'middle',
          pointerEvents: 'none',
        },
        body: {
          ref: 'label',
          fill: '#ffd591',
          stroke: '#ffa940',
          strokeWidth: 2,
          rx: 4,
          ry: 4,
          refWidth: '140%',
          refHeight: '140%',
          refX: '-20%',
          refY: '-20%',
        },
      },
      position: {
        distance: 0.5,
        // options: {
        //   absoluteDistance: true,
        //   reverseDistance: true,
        // },
        options: {
          keepGradient: true
        }
      },
    },
  },
  true,
);
