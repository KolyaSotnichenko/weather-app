import Box from '@mui/material/Box'
import TextField from '@mui/material/TextField'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addCity } from '../features/city/citySlice'

const Search = (): React.ReactElement => {
  const [text, setText] = useState<string>('')

  const dispatch = useDispatch()

  const handleSubmit = (e: any): void => {
    e.preventDefault()
    if (text.trim().length === 0) {
      return
    }

    dispatch(addCity({
      title: text
    }))
    setText('')
  }

  return (
    <Box
      component="form"
      onSubmit={handleSubmit}
      sx={{
        '& > :not(style)': { mt: 4, mb: 4, mr: 1, width: '25ch' },
        display: 'flex',
        justifyContent: 'center'
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="City" value={text} variant="outlined" onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => setText(e.target.value)} />
    </Box>
  )
}

export default Search
