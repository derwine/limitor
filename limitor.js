/**
 * Limitor by Derwin Emmanuel. 
 * Implements a class for Rate Limiter or Debouncer for function execution. 
 * Uses setInterval implementation to constantly reset the EPS timer. 
 * Can use this to have multiple ratelimiters for different operations.
 */

export default class Limitor {
    constructor(maxOperations, maxInterval, verbose=false) {
        this.maxOperations = maxOperations;
        this.maxInterval = maxInterval;
        this.verbose = verbose;
        this.firstRunTime;
        this.callcount;
        this.isEnforced = true;
        this.intervalRef;
    }

    init() {
        this.logToConsole("Rate limiter Running..!");
        this.isEnforced = true;
        this.intervalRef = setInterval(() => {
            this.callcount = 0;
            this.firstRunTime = Date.now();
            this.logToConsole("Callcounter reset");
        }, this.maxInterval);
    }

    disable() {
        this.isEnforced = false;
        clearInterval(this.intervalRef);
        this.logToConsole("Ratelimiter disabled.");
    }

    exec(func, context={}) {
        let this_call_sec = Date.now();
        if (this.isEnforced === false) {
            func.apply(func, context);
            return true;
        }
        // Enforce the rate limit.
        if ((this.callcount < this.maxOperations) && ((this_call_sec - this.firstRunTime) < this.maxInterval)) {
            this.callcount += 1;
            func.apply(func);
            return true;
        } else {
            // Bounce off over EPS calls.
            this.logToConsole("Hit rate limit for function execution. Try Later");
            return false;
        }
    }

    logToConsole(msg) {
        if (this.verbose){
            this.console_.log(msg);
        }
    }
}
