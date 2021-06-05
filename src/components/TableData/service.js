import mockData from "../../../public/mock.json";
import getURL from "../../../config.json"
const getData = async () => {
    const URL = getURL.endpoints.get;
    let answer;
    console.log('Refresh...');
  answer =  fetch(URL)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      
      return res;
    })
    .catch((error) => {
      console.log("ERROR: fetch request failed!");
    });
    console.log(answer,'AAA');
  return answer;
};

export default getData;
