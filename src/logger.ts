import { format, createLogger, transports } from 'winston';
const { timestamp, combine, printf, errors, json } = format;

const logFormat = printf(({ level, message, timestamp, stack }) => {
  return `${timestamp} ${level}: ${stack || message}`;
});

export const logger = createLogger({
  defaultMeta: { service: 'user-service' },
  transports: [
    new transports.File({
      level: 'debug',
      filename: 'combined.log',
      // format: combine(timestamp(), errors({ stack: true }), json()), // json logging
      format: combine(timestamp(), errors({ stack: true }), logFormat), // unstructured logging
    }),
    new transports.Console({
      level: 'info',
      format: combine(
        format.colorize(),
        timestamp({ format: 'YYYY-MM-DD HH:mm:ss' }),
        errors({ stack: true }),
        logFormat
      ),
    }),
  ],
});
