import express from 'express';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
const app = express();
const port = 3000;

dotenv.config({
    path: '../.env',
});
/**
 * set server port
 */
app.set('port', process.env.PORT);

/**
 * parse application/json
 */
app.use(bodyParser.json({
    limit: '5mb',
}));

/**
 * parse application/x-www-form-urlencoded
 */
app.use(bodyParser.urlencoded({
    extended: false,
}));

app.listen(app.get('port'), (error = Error) =>{
  if (error) {
    return console.error(error.prototype.message);
  }
  return console.log(`server is listening on ${port}`);
});