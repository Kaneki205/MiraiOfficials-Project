const fs = require("fs-extra");
module.exports.config = {
    name: "hi",
    version: "1.0.2",
    hasPermssion: 0,
    credits: "Kanichi mod time by TrúcCute",
    description: "noprefix",
    commandCategory: "bổ não",
    usages: "",
    cooldowns: 0,
    denpendencies: {
        "fs-extra": "",
        "request": "",
        "moment-timezone": ""
    }
};
module.exports.onLoad = () => {
  const request = require("request");
  const dirMaterial = __dirname + `/noprefix/`;
  if (!fs.existsSync(dirMaterial + "noprefix")) fs.mkdirSync(dirMaterial, { recursive: true });
  if (!fs.existsSync(dirMaterial + "hi.gif")) request("https://i.imgur.com/fr6s1TW.gif").pipe(fs.createWriteStream(dirMaterial + "hi.gif"));
  }

module.exports.handleEvent = async ({ event, api,Users }) => {
  const moment = require("moment-timezone");
  const hours = moment.tz('Asia/Ho_Chi_Minh').format('HH');
  const session = (hours <= 10 ? "sáng" : hours > 10 && hours <= 12 ? "trưa" : hours > 12 && hours <= 18 ? "chiều" : "tối")
  let name = await Users.getNameUser(event.senderID)
  var msg = {body: `chào buổi ${session}, chúc ${name} 1 ngày vui vẻ`, attachment: fs.createReadStream(__dirname + `/noprefix/hi.gif`)}
  if (event.body.toLowerCase() == "hi"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hii"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hí"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hì"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "híí"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "hello"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "chào"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
  if (event.body.toLowerCase() == "chao"){
        return api.sendMessage(msg,event.threadID,event.messageID);}
        };
module.exports.run = async ({ event, api }) => {
return api.sendMessage("𝐃𝐮̀𝐧𝐠 𝐬𝐚𝐢 𝐜𝐚́𝐜𝐡 𝐫𝐨̂̀𝐢 𝐥𝐞̂𝐮 𝐥𝐞̂𝐮",event.threadID)
    }
