const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.send(',<style> body{background-color:#353b50; margin: 0 auto;text-align:center; }</style> <span style=" font-size: 50px; color: white;">Meu primeiro deploy!</span>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Listening on port" + PORT);
})