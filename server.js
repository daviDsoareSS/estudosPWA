const express = require("express");
const app = express();

app.get("/", (request, response)=>{
    response.send(',<span style="color: green;">Meu primeiro deploy!</span>');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, ()=>{
    console.log("Listening on port" + PORT);
})