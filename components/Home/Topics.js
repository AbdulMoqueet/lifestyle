import { Box, Container, Grid } from '@mui/material'
import React from 'react'
import TopicCard from './TopicCard'

const Topics = ({data}) => {
  return (
    <Box my="80px">
      <Container >

        <Grid container>

          {
            data.map(item => <TopicCard key={item} image={item} />)
          }

        </Grid>

      </Container>
    </Box>
  )
}

export default Topics