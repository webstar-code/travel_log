const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose  = require('mongoose');

require('dotenv').config();

const logroute = require('./routes/logs');
const authroute = require('./routes/auth');
const postroute = require('./routes/posts');

const middlewares = require('./middlewares/middleware');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

// app.use(cors());
app.use(express.json());

mongoose.connect(process.env.DATABASE_URL, 
{useNewUrlParser: true,  useUnifiedTopology: true  }, 
() => {
    console.log("CONNECTED TO DB");
})

app.get('/', (req,res) => {
  res.json({
  message: "hello World",
    });
});

app.use('/',logroute);
app.use('/',authroute);
app.use('/',postroute);

// Handling 404 errors
app.use(middlewares.notFound);

// Handling errors in any routes
app.use(middlewares.errorHandlers);

const port = process.env.Port || 1337;

app.listen(port,() => {
    console.log(`Listening on https://localhost:${port}`);
});