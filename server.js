const express = require("express")
const app = express();
const PORT = process.env.PORT || 5000;
const dbConnect = require("./database/connect")


/* Klasický get. Má dva argumenty. Routy (nyní domonská stránka /) a callback.
Request říká, že nám uživatel něco posílá, třeba JSON. Response je, co vrátíme uživateli.*/
app.get("/", (req, res) => {
   res.send('Hlavní strana serveru.')
})

/*Start serveru*/
app.listen(PORT, (err) => {
   console.log(`Server stále běží na ${PORT}!`)
})