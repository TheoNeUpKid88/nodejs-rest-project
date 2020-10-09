import app from './src/app';
import { environment } from './src/util/environment';

/**
 * set server port
 */
app.set('port', environment.PORT);
console.log("app.get('port') ", app.get('port'));
console.log("app.get('port') !== process.env.PORT", environment.PORT);
app.listen(app.get('port'), (error = Error) =>{
    if (error) {
      return console.error(error.prototype.message);
    }
    return console.log(`server is listening on ${environment.PORT}`);
});

export default app;