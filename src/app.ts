
import helmet from 'helmet';
import express from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import * as parser from './routes/parse';
import { logging } from './util/logManger';

const app = express();
const shouldCompress = (req: any, res: any) => {
    if (req.headers['x-no-compression']) {
        // don't compress responses if this request header is present
        return false;
    }

    // fallback to standard compression
    return compression.filter(req, res);
};


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

/**
 * remove harmful headers
 */
app.use(helmet.frameguard({ action: 'SAMEORIGIN' }));

/**
 * Check for Compression Header
 */
app.use(compression({
    // filter decides if the response should be compressed or not,
    // based on the `shouldCompress` function above
    filter: shouldCompress,
    // threshold is the byte threshold for the response body size
    // before compression is considered, the default is 1kb
    threshold: 0,
}));

/**
 * Logger middleware
 */
logging
.configure({
minLevels: {
    '': 'info',
    core: 'warn',
    },
})
.registerConsoleLogger();

/**
 * routes
 */
app.get('/', (req, res) =>{
    res.send('<h2> Nodejs Typescript REST API</h2>');
});

parser.Routes(app);

export default app;
