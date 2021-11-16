/*Mongoose je knihovna, která pomáhá s jednoduchým připojením */
const mongoose = require('mongoose')
const dotenv = require('dotenv')

dotenv.config() //Volání konfigurace ze souboru .env
mongoose.connect(process.env.DB_CONNECT).then(() => {
   console.log('připojeno')
}).catch((err) => console.log('no connection'))