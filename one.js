const axios = require("axios");
const listOfClassNames = [];
const chop = str => {
  return str.slice(0, str.indexOf(`"`));
};

axios.get("http://localhost:4000/").then(res => {
  const arr = res.data.split(`class="`);
  const filtered = arr.map(word => chop(word));
  console.log("filtered", filtered);
});
