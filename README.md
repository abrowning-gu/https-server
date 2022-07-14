# 3813ICT HTTP server setup.

## install

1. Generate a SSL certificate in the elf terminal.  
     - openssl genrsa -out key.pem    
     - openssl req -new -key key.pem -out csr.pem    
     - openssl x509 -req -days 9999 -in csr.pem -signkey key.pem -out cert.pem   
     - rm csr.pem    
     The key.pem and cert.pem files that are generated from these commands will reside in same folder as the server.js file.  
2. Load dependencies  
     - npm install  - to load the required node module dependencies.

3. Run
    - node server.js  
    - Open a browser and goto - https://<your snumber>.elft.ict.griffith.edu.ay:3001    

    You should see a page that says "Successful connection"  