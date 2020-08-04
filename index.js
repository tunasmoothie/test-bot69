const linebot = require('linebot');
const express = require('express');

const channel_ID = 1654622583;
const channel_secret = "7416baa8e75f16cf9375c674b6e3b041";
const channel_access_token = "R6wRq3IHExQojgh8/yRjnovGUJC1zdZlZaAGiaksxSFznh2qGrdSSxSDXlkU/7y1Wlj0WuDuxvdkbPnK5/1x32zUZy6//PwPAa2qo2gzMQmaOCWX5YqtpWPqasktjgTHLkRZUSV7SOI0sYalN07NlwdB04t89/1O/w1cDnyilFU=";

const bot = linebot({
    channelId: channel_ID,
    channelSecret: channel_secret,
    channelAccessToken: channel_access_token
})


//Prints event to console for debug purposes
bot.on('message', function(event){
    console.log(event);
});

const app = express();
const lineBotParser = bot.parser();
app.post('/', lineBotParser);

const server = app.listen(process.env.PORT || 8080, function(){
    const port = server.address().port;
    console.log("App now running on port ", port);
})