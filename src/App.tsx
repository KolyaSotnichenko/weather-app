import React from 'react'
import Container from '@mui/material/Container/Container'
import Box from '@mui/material/Box'
import Search from './components/Search'
import CityList from './components/CityList'
import { store } from './app/store'
import { saveState } from './app/browser-storage'
import { debounce } from 'debounce'

store.subscribe(
  debounce(() => {
    void saveState(store.getState())
  }, 800)
)

const App = (): React.ReactElement => {
  return (
    <Container maxWidth="sm">
      <Box sx={{ flexGrow: 1 }}>
        <Box
          sx={{
            textAlign: 'center'
          }}
        >
          <Search />
        </Box>
        <CityList />
      </Box>
    </Container>
  )
}

export default App
