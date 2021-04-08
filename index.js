const express = require('express')
const cors = require('cors');
const routes = require('./routes')
const { response } = require('express');
    //   server      // anything
const server = express();

server.use(express.json())
server.use(cors())

server.use('/api/v1',routes)

const port= 4000


server.listen(port,()=>console.log(`server is running at port ${port}.......`))