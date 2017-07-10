const express = require('express'),
      path = require('path'),
      bodyParser = require('body-parser'),
      mongoose = require('mongoose');

const mongoDB = 'mongodb://localhost/gradebook';
mongoose.Promise = global.Promise;
mongoose.connect(mongoDB, { useMongoClient: true });

const db =  mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

db.once('open', () => {
  const app = express(),
        studentRouter = require('./routes/student.route'),
        port = process.env.PORT || 3000;

  app.use(express.static(path.join(__dirname, '../dist')));

  // comment this if you use static files in the same origin
  app.use(function (req, res, next) {
      res.setHeader('Access-Control-Allow-Origin', 'http://localhost:4200');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
      res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');
      res.setHeader('Access-Control-Allow-Credentials', true);
      next();
  });

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: false }));


  app.use('/api/student', studentRouter);

  app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });


  app.listen(port, () => {
    console.log(`Server running on localhost: ${port}`);
  });
});
