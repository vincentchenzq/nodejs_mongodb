const log4js = require('log4js');
// log4js.configure({
//     appenders: { cheese: { type: 'file', filename: '../logs/app.log' } },
//     categories: { default: { appenders: ['cheese'], level: 'error' } }
// });

log4js.configure({
    appenders: {
        out: { type: 'console' },
        task: { type: 'dateFile', filename: 'logs/task',"pattern":"-dd.log", alwaysIncludePattern:true },
        result: { type: 'dateFile', filename: 'logs/result',"pattern":"-dd.log", alwaysIncludePattern:true},
        error: { type: 'dateFile', filename: 'logs/error', "pattern":"-dd.log",alwaysIncludePattern:true},
        default: { type: 'dateFile', filename: 'logs/default', "pattern":"-dd.log",alwaysIncludePattern:true},
        rate: { type: 'dateFile', filename: 'logs/rate', "pattern":"-dd.log",alwaysIncludePattern:true}
    },
    categories: {
        default: {appenders: ['out', 'default'], level: 'info'},
        task: {appenders: ['task'], level: 'info'},
        result: {appenders: ['result'], level: 'info'},
        error: {appenders: ['error'], level: 'error'},
        rate: {appenders: ['rate'], level: 'info'}
    }
});


const logger = log4js.getLogger();

// logger.trace('Entering cheese testing');
// logger.debug('Got cheese.');
// logger.info('Cheese is Gouda.');
// logger.warn('Cheese is quite smelly.');
// logger.error('Cheese is too ripe!');
// logger.fatal('Cheese was breeding ground for listeria.');


module.exports = logger;