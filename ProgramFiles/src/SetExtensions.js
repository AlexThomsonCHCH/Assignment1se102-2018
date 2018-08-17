// This Page was added in SE101 Assignment 2 for the final part of an assignment. This is External resources, and more can be found from the links below.
// TODO: Nothing as of Page Commented
// Page Commented by DEV: Alex T 16/08/2018
// FROM https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
Set.union = function (setB) {
  var union = new Set(this)
  for (var elem of setB) {
    union.add(elem)
  }
  return union
}

Set.intersection = function (setB) {
  var intersection = new Set()
  for (var elem of setB) {
    if (this.has(elem)) {
      intersection.add(elem)
    }
  }
  return intersection
}

Set.difference = function (setB) {
  var difference = new Set(this)
  for (var elem of setB) {
    difference.delete(elem)
  }
  return difference
}
