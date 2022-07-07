import { Box, Stack, Typography } from '@mui/material'
import _ from 'lodash';
import React, { useEffect, useState } from 'react'
import {AsteriodData} from '../Interface/AsteriodData';
import Asteriod_API from '../Service/Asteriod_API';
import AsteriodList from './AsteriodList'
import Loading from './Loading'

function Home({loading,setLoading} : {loading:boolean,setLoading:React.Dispatch<React.SetStateAction<boolean>>}) {


    const [data,setData] = useState<AsteriodData[]>([]);

    useEffect(()=>{
        Asteriod_API(setData,setLoading);
    },[])

  return (
    <Stack direction="row" height="100vh" justifyContent="space-around" alignItems="center">
      <Typography variant="h1" color="white" fontWeight={800}>STUDY ASTERIOD</Typography>
      <Stack width={700} justifyContent="center" alignItems="center">
            {
                loading ? <Loading/> : <AsteriodList data={data}/>
            }
      </Stack>
    </Stack>
  )
}

export default Home