import app from "./server/server";
const port:number = 3000;
app.listen(port, ()=>{
    console.log("Server listen in port ",port)
})
