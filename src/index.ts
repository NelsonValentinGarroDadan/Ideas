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
