import { CircularProgress, Stack, Typography } from '@mui/material'
import React from 'react'

function Loading() {
  return (
    <>
        <Stack justifyContent="center" direction="row" alignItems="center" gap={4}>
            <CircularProgress color="primary"></CircularProgress>
            <Typography variant="h6" color="primary">Loading</Typography>
        </Stack>
    </>
  )
}

export default Loading