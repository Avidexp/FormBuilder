const express = require('express');
const path = require('path');
const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
const axios = require('axios');
const isDev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 5000;
const bodyParser = require('body-parser');
const morgan = require('morgan');
const cors = require('cors');
// Multi-process to utilize all CPU cores.
if (!isDev && cluster.isMaster) {
  console.error(`Node cluster master ${process.pid} is running`);

  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', (worker, code, signal) => {
    console.error(`Node cluster worker ${worker.process.pid} exited: code ${code}, signal ${signal}`);
  });

} else {
  const app = express();
  app.use(morgan('combined'));
  app.use(cors());
  app.use(bodyParser.json({ type: '*/*' }));
  // Priority serve any static files.
  app.use(express.static(path.resolve(__dirname, '../react-ui/build')));

  app.post(`/api/v1/sendToESB`,function(req,res,next){
    console.log(req.body);
    axios.post('http://api.globaltranz.com/AirFreightUIService/1.0?apiKey=UYeObmoEKxE-bthnLBEZEhja', req.body)
    .then((response) => {
        console.log(response);
        console.log("===========================");
         console.log(response.data);
         res.send({body: response.data.body});
        })
      .catch(Error => {console.log(Error);return(Error);})


  }); 
  // Answer API requests.
  app.get('/api', function (req, res) {
    res.set('Content-Type', 'application/json');
    res.send('{"message":"Hello from the custom server!"}');
  });

  // All remaining requests return the React app, so it can handle routing.
  app.get('*', function(request, response) {
    response.sendFile(path.resolve(__dirname, '../react-ui/build', 'index.html'));
  });

  app.listen(PORT, function () {
    console.error(`Node ${isDev ? 'dev server' : 'cluster worker '+process.pid}: listening on port ${PORT}`);
  });
}
