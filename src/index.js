const axios = require("axios");
var cytoscape = require("cytoscape");

const jsonUrl =
  "https://raw.githubusercontent.com/cytoscape/cytoscape.js/master/documentation/demos/tokyo-railways/tokyo-railways.json";

axios
  .get(jsonUrl)
  .then(function (response) {
    // 取得成功時
    // console.log("取得成功", response);
    var data = response.data;

    const cy = cytoscape(data);

    //5916

    const idFrom = 7585 // 本郷三丁目

    const dijkstra = cy.elements().dijkstra(`#${idFrom}`);

    console.log({ dijkstra });

    const idTo = 7604 // 新宿

    const pathToJ = dijkstra.pathTo(cy.$(`#${idTo}`));
    const distToJ = dijkstra.distanceTo(cy.$(`#${idTo}`));

    console.log({ pathToJ, distToJ });
  })
  .catch(function (error) {
    // 取得失敗時
    // console.log("取得失敗", error);
  })
  .then(function () {
    // 取得成功・失敗の処理後に共通で実行
  });
