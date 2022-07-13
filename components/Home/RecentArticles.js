import { Box, Container, Grid, Typography } from '@mui/material'
import React from 'react'
import RecentCard from './RecentCard'

const RecentArticles = ({data}) => {
  return (
    <Box my="100px">
        <Container>
           <Typography variant='h3'>Recent Articles</Typography> 

           <Grid container mt="40px" spacing={6}>

           {
            data.map((item, idx) => <RecentCard key={idx} image={item} />)
          }

           </Grid>


        </Container>
    </Box>
  )
}

export default RecentArticles