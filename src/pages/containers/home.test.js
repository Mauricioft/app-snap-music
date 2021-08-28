import rewire from "rewire"
import React from "react"
import ReactDOM from "react-dom"
import App from "./App"

const home = rewire("./home")
const mapStateToProps = home.__get__("mapStateToProps")
it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

// @ponicode
describe("mapStateToProps", () => {
    test("0", () => {
        let callFunction = () => {
            mapStateToProps({ artists: { items: 10 } }, "reply_click()")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            mapStateToProps({ artists: { items: 1 } }, "reply_click()")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            mapStateToProps({ artists: { items: 1000 } }, "reply_click()")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            mapStateToProps(undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
