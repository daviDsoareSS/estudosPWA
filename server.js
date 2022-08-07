const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.send(',<style>body{background-color:#353b50}</style> <span style="text-align:center; font-size: 50px; color: #FFFFF;">Meu primeiro deploy!</span>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Listening on port" + PORT);
})