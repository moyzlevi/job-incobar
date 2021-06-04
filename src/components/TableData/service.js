import mockData from "../../../public/mock.json";
import getURL from "../../../config.json"
const getData = () => {
    const URL = getURL.endpoints.get;
    let answer;
    console.log('Refresh...');
  fetch(URL)
    .then((data) => {
      return data.json();
    })
    .then((res) => {
      console.log(res,123);
      answer = res;
    })
    .catch((error) => {
      console.log("ERROR: fetch request failed!");
    });
  return answer;
};

export default getData;
