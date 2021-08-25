const rewire = require("rewire")
const indes = rewire("./indes")
const logger_ = indes.__get__("logger_")
// @ponicode
describe("logger_", () => {
    test("0", () => {
        let callFunction = () => {
            logger_({ getState: {}, dispatch: "2017-09-29T23:01:00.000Z" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            logger_({ getState: {}, dispatch: "2017-09-29T19:01:00.000" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            logger_({ getState: {}, dispatch: "Mon Aug 03 12:45:00" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            logger_({ getState: {}, dispatch: "01:04:03" })
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            logger_({ getState: undefined, dispatch: undefined })
        }
    
        expect(callFunction).not.toThrow()
    })
})
