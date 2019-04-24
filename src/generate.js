import dagre from 'dagre';

function generateNode(label) {
  const width = Math.floor(Math.random() * 400);
  const height = Math.floor(Math.random() * 400);
  return { "label": label, "width": width, "height": height };
}

function generateNodes(numNodes) {
  return [...Array(numNodes).keys()].map(i => generateNode(i));
}

function generateEdges(numNodes) {
  const edgeProb = 0.3;
  let edges = [];
  for (let i = 0; i < numNodes; i++) {
    for (let j = 0; j < i; j++) {
      if (Math.random() < edgeProb) {
        edges.push({"v": j, "w": i});
      }
    }
  }
  return edges;
}

export default function generateGraph(numNodes) {
  const nodes = generateNodes(numNodes);
  const edges = generateEdges(numNodes);

  let g = new dagre.graphlib.Graph();
  g.setGraph({});
  g.setDefaultEdgeLabel(function() { return {}; });
  nodes.map(n => g.setNode(n.label, n));
  edges.map(e => g.setEdge(e.v, e.w));
  dagre.layout(g);

  return g;
}
