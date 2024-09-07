export const errorHandler = (statusCode, errMsg) => {
    const error = new Error()
    error.statusCode = statusCode
    error.message = errMsg
    return error
}