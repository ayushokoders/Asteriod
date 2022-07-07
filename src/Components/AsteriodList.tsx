import { Stack } from '@mui/material'
import {AsteriodData} from '../Interface/AsteriodData'
import AsteriodCard from './AsteriodCard'

function AsteriodList({data}:{data : AsteriodData[]}) {
  return (
    <Stack height="90vh" sx={{overflowY:"scroll"}} gap={2}>
        {data.map((item,index) => ( <AsteriodCard key={index} ind={index} {...item}/>))}
    </Stack>
  )
}

export default AsteriodList