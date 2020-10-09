"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Logger = void 0;
class Logger {
    constructor(logManager, module, minLevel) {
        this.levels = {
            trace: 1,
            debug: 2,
            info: 3,
            warn: 4,
            error: 5,
        };
        this.logManager = logManager;
        this.module = module;
        this.minLevel = this.levelToInt(minLevel);
    }
    /**
     * Converts a string level (trace/debug/info/warn/error) into a number
     *
     * @param minLevel
     */
    levelToInt(minLevel) {
        if (minLevel.toLowerCase() in this.levels)
            return this.levels[minLevel.toLowerCase()];
        else
            return 99;
    }
    /**
     * Central logging method.
     * @param logLevel
     * @param message
     */
    log(logLevel, message) {
        const level = this.levelToInt(logLevel);
        if (level < this.minLevel)
            return;
        const logEntry = { level: logLevel, module: this.module, message };
        // Obtain the line/file through a thoroughly hacky method
        // This creates a new stack trace and pulls the caller from it.  If the caller
        // if .trace()
        const error = new Error('');
        if (error.stack) {
            const cla = error.stack.split('\n');
            let idx = 1;
            while (idx < cla.length && cla[idx].includes('at Logger.Object.'))
                idx++;
            if (idx < cla.length) {
                logEntry.location = cla[idx].slice(cla[idx].indexOf('at ') + 3, cla[idx].length);
            }
        }
        this.logManager.emit('log', logEntry);
    }
    trace(message) { this.log('trace', message); }
    debug(message) { this.log('debug', message); }
    info(message) { this.log('info', message); }
    warn(message) { this.log('warn', message); }
    error(message) { this.log('error', message); }
}
exports.Logger = Logger;
//# sourceMappingURL=log.js.map