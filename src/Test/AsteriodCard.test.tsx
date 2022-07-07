import { fireEvent, render, screen } from "@testing-library/react";
import AsteriodCard from "../Components/AsteriodCard";
import {MockData} from '../Mock/MockData'

describe('AsteriodCard Component', () => {

    test("Component renders - dangeroud Asteriod",()=>{
        const ele = render(<AsteriodCard key={1} {...MockData[0]} ind={1}/>)
        expect(ele).toBeTruthy();
    });

    test("Component renders - nondangeroud Asteriod",()=>{
        const ele = render(<AsteriodCard key={1} {...MockData[1]} ind={1}/>)
        expect(ele).toBeTruthy();
    });

    test("Modal Opens",()=>{
        render(<AsteriodCard key={1} {...MockData[0]} ind={1}/>);
        const modalOpener = screen.getByTestId('modal-opener');
        fireEvent.click(modalOpener);
    })

    test("Modal Closes",()=>{
        render(<AsteriodCard key={1} {...MockData[0]} ind={1}/>);
        const modalOpener = screen.getByTestId('modal-opener');
        fireEvent.click(modalOpener);

        const modalCloser = screen.getByTestId('modal-closer');
        fireEvent.click(modalCloser);
    })
})