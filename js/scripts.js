(function () {
  "use strict";

  var table = document.querySelector("#myTable"),
    ths = table.querySelectorAll("thead th"),
    trs = table.querySelectorAll("tbody tr");

  //make array from array-like objects
  function makeArray(nodeList) {

    var arr = [];

    for (var i = 0; i < nodeList.length; i++) {

      arr.push(nodeList[i]);

    }

    return arr;

  }

  function sortBy(e) {

    var target = e.target,
      thsArr = makeArray(ths),
      trsArr = makeArray(trs),
      index = thsArr.indexOf(target);

    trsArr.sort(function (a, b) {

      var tdA = a.children[index].textContent,
        tdB = b.children[index].textContent;

      if (tdA < tdB) {
        return 1;
      } else if (tdA > tdB) {
        return -1;
      } else {
        return 0;
      }

    });

    console.log(trsArr);

  }

  for (var i = 0; i < ths.length; i++) {

    ths[i].onclick = sortBy;

  }

}());