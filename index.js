const express = require('express');

const server = express();

server.use(express.json());

server.get('/', (reg, res)=>{
    const songs = [{
        id: 1, name: "Final Countdown"
    }]
    res.status(200).json(songs);
})

const port = 5000;
server.listen(port, () => {
    console.log(`\n*** Server Running on ${port} ***\n`);
  });