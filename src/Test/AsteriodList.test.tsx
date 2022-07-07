import { render } from "@testing-library/react";
import AsteriodList from "../Components/AsteriodList";
import {MockData} from '../Mock/MockData'

describe('AsteriodList Component', () => { 
    test("Component Renders",()=>{
        const ele = render(<AsteriodList data={MockData}/>)
        expect(ele).toBeTruthy();
    })
})