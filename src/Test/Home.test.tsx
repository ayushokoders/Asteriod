import { render } from "@testing-library/react";
import Home from "../Components/Home";

describe("Home Component",()=>{
    test("Component Renders with loading as true",()=>{
        const ele = render(<Home loading={true} setLoading={jest.fn()} />);
        expect(ele).toBeTruthy();
    })
    test("Component Renders with loading as false",()=>{
        const ele = render(<Home loading={false} setLoading={jest.fn()} />);
        expect(ele).toBeTruthy();
    })
})