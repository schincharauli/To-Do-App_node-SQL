import { createTable } from "./config/sql.js";
import express from express;

app.express = express();

async function init(){
    try {
        await createTable();
        serverStart()
    } catch (error) {
        console.log(error);
        
    }
    function serverStart(){
        app.listen(3000)
    }

}

init()