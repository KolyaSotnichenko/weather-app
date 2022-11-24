import { Box, Typography } from '@mui/material'
import Grid from '@mui/system/Unstable_Grid'
import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '../app/store'
import CityItem from './CityItem'

const CityList = (): React.ReactElement => {
  const list = useSelector((state: RootState) => state.city)

  if (list.length === 0) {
    return (
      <Box sx={{ textAlign: 'center' }}>
        <Typography>LIST IS EMPTY</Typography>
      </Box>
    )
  }

  return (
    <Grid container spacing={2}>
      {list.map(city => {
        return (
          <Grid key={city.id}>
            <CityItem key={city.id} item={city} />
          </Grid>
        )
      })}
    </Grid>
  )
}

export default CityList
