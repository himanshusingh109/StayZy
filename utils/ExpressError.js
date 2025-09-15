class ExpressError extends Error {
    constructor(statusCode, message) {
        super(message);  // Required for Error inheritance
        this.statusCode = statusCode;
        this.name = "ExpressError"; // Optional (helps in debugging)
    }
}

module.exports = ExpressError;