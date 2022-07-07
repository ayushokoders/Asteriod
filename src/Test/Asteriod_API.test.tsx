import { cleanup } from "@testing-library/react";
import Asteriod_API from "../Service/Asteriod_API";
import { MockData } from "../Mock/MockData";
import MockAdapter from "axios-mock-adapter";
import axios from "axios";


const mock = new MockAdapter(axios)


describe('Asteriod API', () => {



    afterEach(()=>{
        cleanup()
    })

    test("Component works", async ()=>{
        await Asteriod_API(jest.fn(),jest.fn());
        mock.onGet().reply(200,{response : { data : MockData}})
    });
    
    test("Component works", async ()=>{
        await Asteriod_API(jest.fn(),jest.fn());
        mock.onGet().reply(404,{response : { data : "404"}})
    })
})