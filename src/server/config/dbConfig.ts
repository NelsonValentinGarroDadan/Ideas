import mongoose from 'mongoose';
const urlDB = "mongodb+srv://nelsonvgarrodadan:zg5efej0vPIXA0xV@workplase.0pzcr.mongodb.net/Ideas?retryWrites=true&w=majority&appName=WorkPlase"
const dbCon = async ()=>{
    mongoose.connect(urlDB)
};
export = dbCon;