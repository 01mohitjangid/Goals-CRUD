const mongoose = require('mongoose')
const dotenv= require(  'dotenv' )
dotenv.config()
console.log(process.env.MONGO_URI)
const connectDB = async () => {
    try{
        const conn= await mongoose.connect('mongodb+srv://admin:admin123@cluster0.4d3gmjf.mongodb.net/store?retryWrites=true&w=majority')
        console.log('mongoDB Connected: ${conn.connection.host}'.cyan.underline);
    }
    catch (error){
        console.log('error');
        console.log(error.message);
        process.exit(1)
    }
}

module.exports = connectDB