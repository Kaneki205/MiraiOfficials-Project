const request = require("request");
const fs = require("fs")
const axios = require("axios")
module.exports.config = {
  name: "ôm",
  version: "1.0.0",
  hasPermssion: 0,
  credits: "Lê Định Mod",
  description: "ôm người Bạn Muốn",
  commandCategory: "Tình yêu",
  usages: "@tag",
  cooldowns: 5,
  dependencies: {"request": "","fs": "","axios": ""}
};

module.exports.run = async({api,event,args,client,Users,Threads,__GLOBAL,Currencies}) => {
        const request = require('request')
                const fs = require('fs')
                  var mention = Object.keys(event.mentions)[0];
let tag = event.mentions[mention].replace("@", "");
        var link = [
          "https://i.imgur.com/HvJmLSI.gif",
             ];
   var callback = () => api.sendMessage({body: `${tag} à 💌, 𝐈 𝐥𝐨𝐯𝐞 𝐘𝐨𝐮 💗` , 
  attachment: fs.createReadStream(__dirname + "/cache/omngu.gif")}, event.threadID, () => fs.unlinkSync(__dirname + "/cache/omngu.gif"));
      return request(encodeURI(link[Math.floor(Math.random() * link.length)])).pipe(fs.createWriteStream(__dirname+"/cache/omngu.gif")).on("close",() => callback());
   };
