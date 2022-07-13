import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import TrendingCard from './TrendingCard'

const TrendingTopics = ({data}) => {
  return (
    <Box my="100px">
        <Container>
           <Typography variant='h3'>Trending Topics</Typography> 

           <Grid container mt="40px" spacing={6}>

           {
           data.map((item, idx) => <TrendingCard key={idx} image={item} />)
          }

           </Grid>


        </Container>
    </Box>
  )
}

export default TrendingTopics