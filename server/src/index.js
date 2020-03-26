const express = require('express');
const morgan = require('morgan');
const helmet = require('helmet');
const cors = require('cors');
const mongoose  = require('mongoose');

require('dotenv').config();

const logroute = require('./routes/logs');
const authroute = require('./routes/auth');


const middlewares = require('./middlewares/middleware');

const app = express();

app.use(morgan('common'));
app.use(helmet());
app.use(cors({
    origin: process.env.CORS_ORIGIN,
}));

app.use(express.json());

mongoose.connect(process.env.LOCAL_DB_URL, 
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


// Handling 404 errors
app.use(middlewares.notFound);

// Handling errors in any routes
app.use(middlewares.errorHandlers);

const port = process.env.Port || 1337;

app.listen(port,() => {
    console.log(`Listening on https://localhost:${port}`);
});