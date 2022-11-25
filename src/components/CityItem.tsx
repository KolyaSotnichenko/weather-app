import React, { useEffect, useState } from 'react'

import { removeCity } from '../features/city/citySlice'
import { useDispatch } from 'react-redux'

import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Button from '@mui/material/Button'
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline'
import RefreshIcon from '@mui/icons-material/Refresh'
import Box from '@mui/material/Box'
import { Dialog, DialogTitle } from '@mui/material'

export interface IModal {
  item: any
  open: boolean
  onClose: (value: string) => void
  data: {}
}

const MoreInfo = (props: IModal): React.ReactElement => {
  const { onClose, open, item, data } = props

  const handleClose = (): void => {
    onClose('')
  }

  console.log(data)

  return (
    <Dialog onClose={handleClose} open={open}>
      <DialogTitle>
        {item.title}
      </DialogTitle>
    </Dialog>
  )
}

const CityItem = ({ item }: any): React.ReactElement => {
  const [apiData, setApiData] = useState<any>({})
  const [refreshData, setRefreshData] = useState<boolean>(false)
  const [open, setOpen] = useState<boolean>(false)

  // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${item.title}&appid=5b987029ae7a250586e64dec655db196`

  const dispatch = useDispatch()

  const handleRemove = (e: any): void => {
    dispatch(removeCity({
      id: item.id,
      title: item.title
    }))
  }

  const handleClickOpen = (): void => {
    setOpen(true)
  }

  const handleClose = (value: string): void => {
    setOpen(false)
  }

  useEffect(() => {
    void fetch(apiUrl)
      .then(async res => await res.json())
      .then(data => setApiData(data))
  }, [refreshData])

  console.log(apiData)

  return (
    <>
      <Card sx={{ display: 'flex', width: 245, position: 'relative' }}>
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Box sx={{ position: 'absolute', right: 0, top: 15 }}>
            <Button onClick={handleRemove} size="small"><RemoveCircleOutlineIcon /></Button>
          </Box>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              {item.title}
            </Typography>
            {apiData.main != null
              ? <Typography variant="body2" color="text.secondary">
                {apiData.main.temp}°F
              </Typography>
              : null}
            {apiData.weather != null
              ? <Typography variant="body2" color="text.secondary">
                {apiData.weather[0].main}
              </Typography>
              : null}
          </CardContent>
          <CardActions>
            <Button onClick={handleClickOpen} size="small">More</Button>
            <Button onClick={() => setRefreshData(!refreshData)} size="small"><RefreshIcon /></Button>
          </CardActions>
        </Box>
        {apiData.weather != null
          ? <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <img
              // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
              src={`http://openweathermap.org/img/w/${apiData.weather[0].icon}.png`}
              alt="Weather status icon"
            />
          </Box>
          : null}
      </Card>
      <MoreInfo data={apiData} item={item} open={open} onClose={handleClose} />
    </>
  )
}

export default CityItem
