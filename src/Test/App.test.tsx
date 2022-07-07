import { render } from "@testing-library/react";
import App from "../App";

describe('App Components', () => {
    test('component renders',()=>{
        const ele = render(<App/>);
        expect(ele).toBeTruthy();
    })
})