var solve_graph = require('../determining_if_a_graph_has_a_solution.js');

describe("Simple graph with 1 arc", function() {
  var arcs = [
    { start: "a", end: "b" },
  ]
  it("Should reach b", function() {
    expect(solve_graph("a", "b", arcs)).toEqual(true);
  });
  it("Should never reach c", function() {
    expect(solve_graph("a", "c", arcs)).toEqual(false);
  });
  it("Should reach start state", function() {
    expect(solve_graph("a", "a", arcs)).toEqual(true);
  });
});

describe("Complex graph with loops and intermediary nodes", function() {
  var arcs = [
    { start: "a", end: "b"},
    { start: "b", end: "c"},
    { start: "c", end: "a"},
    { start: "c", end: "d"},
    { start: "e", end: "a"}
  ];
  xit("Should reach d", function() {
    expect(solve_graph("a", "d", arcs)).toEqual(true);
  });
  xit("Should never reach nodes with no arcs leading to it", function() {
    expect(solve_graph("a", "e", arcs)).toEqual(false);
  });
  xit("Should reach all nodes in a loop", function() {
    expect(solve_graph("a", "a", arcs)).toEqual(true);
    expect(solve_graph("a", "b", arcs)).toEqual(true);
    expect(solve_graph("a", "c", arcs)).toEqual(true);
  });
});