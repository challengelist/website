export class APIResponseError extends Error {
    /**
     * The status code that belongs to this error.
     */
    public code: number;

    constructor(code: number, message: string, cause?: string) {
        super(message);

        this.name = "APIResponseError";
        this.code = code;
        this.cause = cause;
    }
}