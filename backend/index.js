const express = require('express')
const cors = require('cors')
//putting the webbserver 
const app = express();

// our port for the website nad listening to it
const port = 3000;

//allowing all websites
app.use(cors({
    origin: '*'
}))

app.use(express.static('public'))
app.listen(port, () => {
    console.log('Server is listening on port on' + port);
})