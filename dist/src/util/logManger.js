"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.logging = exports.LogManager = void 0;
const events_1 = require("events");
const log_1 = require("./log");
class LogManager extends events_1.EventEmitter {
    constructor() {
        super(...arguments);
        this.options = {
            minLevels: {
                '': 'info',
            },
        };
        // Prevent the console logger from being added twice
        this.consoleLoggerRegistered = false;
    }
    configure(options) {
        this.options = Object.assign({}, this.options, options);
        return this;
    }
    getLogger(module) {
        let minLevel = 'none';
        let match = '';
        for (const key in this.options.minLevels) {
            if (module.startsWith(key) && key.length >= match.length) {
                minLevel = this.options.minLevels[key];
                match = key;
            }
        }
        return new log_1.Logger(this, module, minLevel);
    }
    onLogEntry(listener) {
        this.on('log', listener);
        return this;
    }
    registerConsoleLogger() {
        if (this.consoleLoggerRegistered)
            return this;
        this.onLogEntry((logEntry) => {
            const msg = `${logEntry.location} [${logEntry.module}] ${logEntry.message}`;
            switch (logEntry.level) {
                case 'trace':
                    console.trace(msg);
                    break;
                case 'debug':
                    console.debug(msg);
                    break;
                case 'info':
                    console.info(msg);
                    break;
                case 'warn':
                    console.warn(msg);
                    break;
                case 'error':
                    console.error(msg);
                    break;
                default:
                    console.log(`{${logEntry.level}} ${msg}`);
            }
        });
        this.consoleLoggerRegistered = true;
        return this;
    }
}
exports.LogManager = LogManager;
exports.logging = new LogManager();
//# sourceMappingURL=logManger.js.map