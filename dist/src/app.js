"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const parser = __importStar(require("./routes/parse"));
const logManger_1 = require("./util/logManger");
const app = express_1.default();
const shouldCompress = (req, res) => {
    if (req.headers['x-no-compression']) {
        // don't compress responses if this request header is present
        return false;
    }
    // fallback to standard compression
    return compression_1.default.filter(req, res);
};
/**
 * parse application/json
 */
app.use(body_parser_1.default.json({
    limit: '5mb',
}));
/**
 * parse application/x-www-form-urlencoded
 */
app.use(body_parser_1.default.urlencoded({
    extended: false,
}));
/**
 * remove harmful headers
 */
app.use(helmet_1.default.frameguard({ action: 'SAMEORIGIN' }));
/**
 * Check for Compression Header
 */
app.use(compression_1.default({
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
logManger_1.logging
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
app.get('/', (req, res) => {
    res.send('<h2> Nodejs Typescript REST API</h2>');
});
parser.Routes(app);
exports.default = app;
//# sourceMappingURL=app.js.map