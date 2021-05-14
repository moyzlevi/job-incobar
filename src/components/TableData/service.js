const fetch = require("node-fetch");
const URL = "http://localhost:3000/mock.json";

const getData = () => {
  var array = [];
    fetch('../../../public/mock.json', {
    headers: { "Content-Type": "application/json", "Accept": "application/json" },
  })
    .then((res) => {
      console.log(res);
      array = res.json();
    });
    console.log("teste1:"+array[0]);
    return array;
};

export default getData;
