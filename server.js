
let https;
try {
  https = require('node:https');
} catch (err) {
  console.log('https support is disabled!');
}
//node: prefix denotes the module is from core node.
const fs = require('node:fs');
const cors = require('cors');
const options = {
  //Generate keys first - see note below. 
  key: fs.readFileSync('key.pem'),
  cert: fs.readFileSync('cert.pem')
};
const express = require('express')
const app = express();
app.use (express.json());
app.use (express.urlencoded({extended:false}));
app.use(cors());

const httpsserver = https.createServer(options,app);
const PORT = 3001;

require('./listen.js')(httpsserver,PORT);

//defalt route - homepage
app.get('/',function(req,res){
    res.send("<h1>Successful connection</h1>");
});

/* ---------------------------
Note
generate a SSL certificate in the elf terminal.
openssl genrsa -out key.pem
openssl req -new -key key.pem -out csr.pem
openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem
rm csr.pem
------------------------------- */ 
