"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = __importDefault(require("./src/app"));
const environment_1 = require("./src/util/environment");
/**
 * set server port
 */
app_1.default.set('port', environment_1.environment.PORT);
console.log("app.get('port') ", app_1.default.get('port'));
console.log("app.get('port') !== process.env.PORT", environment_1.environment.PORT);
app_1.default.listen(app_1.default.get('port'), (error = Error) => {
    if (error) {
        return console.error(error.prototype.message);
    }
    return console.log(`server is listening on ${environment_1.environment.PORT}`);
});
exports.default = app_1.default;
//# sourceMappingURL=index.js.map