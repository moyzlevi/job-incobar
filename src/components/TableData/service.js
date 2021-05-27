const fetch = require("node-fetch");
import mockData from '../../../public/mock.json'

const getData = () => {
  // var array = [];
  //   fetch('../../../public/mock.json', {
  //   headers: { "Content-Type": "application/json", "Accept": "application/json" },
  // })
  //   .then((res) => {
  //     console.log(res);
  //     return res.json();
  //   }).then((json)=>{
  //     array =  JSON.stringify(json).operations;
  //     console.log("salvei:"+array);
  //   });
    
    return mockData;
   
};

export default getData;
