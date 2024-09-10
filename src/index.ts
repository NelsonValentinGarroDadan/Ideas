import app from "./server/server";
import dbCon from "./server/config/dbConfig";
const port:number = Number(process.env.PORT) || 3000;
dbCon()
    .then(()=>{
        console.log("DB connect")
        app.listen(port, ()=>{
            console.log("Server listen in port ",port)
        })

    })
    .catch((err)=>{
        console.log(err.message);
    })
export const API_URL = process.env.API_URL || 'http://localhost:3000/ideas/api';
