import React from "react";
import { AsteriodData } from "../Interface/AsteriodData";
import _ from 'lodash'
import axios from "axios";


export default async function Asteriod_API(setData : React.Dispatch<React.SetStateAction<AsteriodData[]>>, setLoading :React.Dispatch<React.SetStateAction<boolean>>){
    await axios.get('https://api.nasa.gov/neo/rest/v1/neo/browse?api_key=PjczlNgW4PFksCdHOGq5W6xQwQ5XngNJXk7uMzm0')
        .then((response) => {
            setData(_.sortBy(response.data.near_earth_objects,function(o){return o.absolute_magnitude_h})); setLoading(false)
        })
        .catch((error)=>{
            console.log(error)
        })
}