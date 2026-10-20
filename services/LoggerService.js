export function createLogger(prefix = 'Daemon-Core') {
  return {
    info(message) {
      console.log(`[${prefix}] INFO: ${message}`);
    },
    warn(message) {
      console.warn(`[${prefix}] WARN: ${message}`);
    },
    error(message) {
      console.error(`[${prefix}] ERROR: ${message}`);
    },
    debug(message) {
      if (typeof console !== 'undefined' && typeof console.debug === 'function') {
        console.debug(`[${prefix}] DEBUG: ${message}`);
      }
    }
  };
}

export const LoggerService = createLogger('Daemon-Core');

export default LoggerService;
