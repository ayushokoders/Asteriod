import { Button, Modal, Stack, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import {AsteriodData} from '../Interface/AsteriodData'
import { Approach } from '../Interface/AsteriodData';
import Loading from './Loading';
import * as _ from "lodash";

interface Props extends AsteriodData {
    ind : number,
}

function AsteriodCard({id,name,absolute_magnitude_h,estimated_diameter,is_potentially_hazardous_asteroid,close_approach_data,ind} : Props) {

    const[loading,setLoading] = useState<boolean>(true);
    const[index,setIndex] = useState<number>(0);
    const[open,setOpen] = useState<boolean>(false);

    useEffect(()=>{
        const time = new Date().valueOf();
        const timeData : Approach = {
            epoch_date_close_approach : time,
            close_approach_date_full : "",
            miss_distance : {
                kilometers : ""
            }
        }

        close_approach_data.push(timeData);

        const sortedCloseApproach = _.sortBy(close_approach_data, function(o){return o.epoch_date_close_approach});

        const index = _.findIndex(sortedCloseApproach,function(o){return o.epoch_date_close_approach==time})
        
        setIndex(index);

        setLoading(false);
    },[])

  return (
    <Stack id={`main-asteriod-${ind}`}>
        <Stack data-testid="modal-opener" gap={2} width={500} color="white" onClick={()=>setOpen(true)} p={6} bgcolor={ is_potentially_hazardous_asteroid ? "rgba(240,0,0,.7)" : "rgba(0,240,0,.7)" }>
            <Typography variant="body1" id={`main-asteriod-id-${ind}`}>{id}</Typography>
            <Typography variant="h4" id={`main-asteriod-name-${ind}`}>{name}</Typography>
            <Typography variant="body1" id={`main-asteriod-magnitude-${ind}`}> Magnitude : {absolute_magnitude_h}</Typography>
        </Stack>

        <Modal id="details-asteroid-id" open={open}>
            <Stack justifyContent="center"p={4} width={800} gap={2} border={0} sx={{backdropFilter:"blur(4px) brightness(80%)", color:"white",position:"absolute", top:"50%", left:"50%", transform:"translate(-50%,-50%)"}}>
                {
                    loading ? <Loading/> : 
                        <>
                            <Typography variant="body1">{id}</Typography>
                            <Typography variant="h3" id="details-asteroid-name" mb={5}>{name}</Typography>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="body1" id="details-asteroid-magnitude">Magnitude : {absolute_magnitude_h}</Typography>
                                <Typography variant="body1" id="details-asteroid-dangerous">Asteriod is {is_potentially_hazardous_asteroid ? "not safe" : "safe"}</Typography>
                            </Stack>
                            <Typography variant="h4" textAlign="center">Diameter</Typography>
                            <Stack direction="row" justifyContent="space-between">
                                <Typography variant="h5" id="details-asteroid-diameter-max">Max: {estimated_diameter.kilometers.estimated_diameter_max}</Typography>
                                <Typography variant="h5" id="details-asteroid-diameter-min">Min: {estimated_diameter.kilometers.estimated_diameter_min}</Typography>
                            </Stack>
                            <Typography variant="h4" textAlign="center">Last Close Call</Typography>
                            <Stack mb={3} direction="row" justifyContent="space-between">
                                <Typography variant="h5" id="details-asteroid-last-time">Time: {close_approach_data[index-2].close_approach_date_full}</Typography>
                                <Typography variant="h5" id="details-asteroid-last-distance">Distance: {close_approach_data[index-2].miss_distance.kilometers}</Typography>
                            </Stack>
                            <Typography variant="h4" textAlign="center">Next Close Call</Typography>
                            <Stack mb={3} direction="row" justifyContent="space-between">
                                <Typography variant="h5" id="details-asteroid-next-time">Time: {close_approach_data[index-1].close_approach_date_full}</Typography>
                                <Typography variant="h5" id="details-asteroid-next-distance">Distance: {close_approach_data[index-1].miss_distance.kilometers}</Typography>
                            </Stack>
                            <Button data-testid="modal-closer" id="details-back-button" onClick={()=>setOpen(false)} variant="contained">Back</Button>
                        </>
                }
            </Stack>
        </Modal>
    </Stack>
  )
}

export default AsteriodCard