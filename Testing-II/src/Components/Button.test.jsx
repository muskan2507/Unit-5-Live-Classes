import { fireEvent, render, screen } from "@testing-library/react"
import App from "../App"
import Button from "./Button"
import renderer from "react-test-renderer"

describe("Button Tests",function(){
    it("should have button in dom",function(){
        render(<Button>Click me</Button>)
        let button=screen.getByText("Click me")
        expect(button).toBeInTheDocument();
    })
    it("should render based on testid",function(){
        render(<Button>Click me</Button>)
        let button=screen.getByTestId("cButton")
        expect(button).toBeInTheDocument();
    })
    it("should render on empty button",function(){
        render(<Button></Button>)
        let button=screen.getByTestId("cButton")
        expect(button).toBeEmptyDOMElement();
    })
    it("should change theme",function(){
        render(<App></App>)
        let h3=screen.getByText("Theme is light")
        expect(h3).toHaveTextContent("light");
        let themeButton=screen.getByText("Change theme")
        fireEvent.click(themeButton)
        expect(h3).toHaveTextContent("dark")
    })
    it("should call given function",function(){
        const mockfn=jest.fn();
        render(<Button onClick={mockfn}>Click me</Button>)
        const btn=screen.getByText("Click me")
        fireEvent.click(btn)
        expect(mockfn).toBeCalled()
    })
    it("should match snapshot",function(){
        const tree=renderer.create(<Button>Add Counter</Button>).toTree()
        expect(tree).toMatchSnapshot()
    })
})