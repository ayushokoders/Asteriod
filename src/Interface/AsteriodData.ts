import React from "react"

export interface AsteriodData {
    id : string,
    name : string,
    absolute_magnitude_h : number,
    estimated_diameter :  Dia,
    is_potentially_hazardous_asteroid : boolean,
    close_approach_data : Approach[]
}

interface Dia {
    kilometers : Dis
}

interface Dis {
    estimated_diameter_min : number,
    estimated_diameter_max : number
}

export interface Approach {
    close_approach_date_full : string,
    epoch_date_close_approach : number,
    miss_distance : MisDis,
}

interface MisDis {
    kilometers : string,
}