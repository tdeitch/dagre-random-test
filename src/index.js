import dagre from 'dagre';
import generateGraph from './generate';


function display() {
  const g = generateGraph(20);
  let output = "";

  g.nodes().forEach(function(v) {
     output += "Node " + v + ": " + JSON.stringify(g.node(v)) + "\n";
  });
  g.edges().forEach(function(e) {
    output += "Edge " + e.v + " -> " + e.w + ": " + JSON.stringify(g.edge(e)) + "\n";
  });

  document.getElementById("graph").innerText = output;
}

display();