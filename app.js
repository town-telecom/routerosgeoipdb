const data = require ('./data.js');
const fs = require('fs');
const axios = require('axios');
const getAddrList = (base_url, country_code, country_name) => {

  axios.get(`${base_url}${country_code}`)
    .then(res => {
      // console.log(res.data);
      let writestream = fs.createWriteStream(`./address_lists/${country_name}${data.file_extension}`);
      writestream.write(res.data);
      writestream.end();
      console.log(`Address List for ${country_name} created`);
    })
    .catch(err => {
      console.log(err);
    })

};


for (let i = 0; i < Object.keys(data.countries).length; i++) {

  let country_code = Object.keys(data.countries)[i];
  let country_name = Object.values(data.countries)[i];
  getAddrList(data.url, country_code, country_name);

};