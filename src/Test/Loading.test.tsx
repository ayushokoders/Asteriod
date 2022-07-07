import { render } from "@testing-library/react";
import Loading from "../Components/Loading";

describe('Loading Component', () => {
    test("Component Renders",()=>{
        render(<Loading/>)
    })
})