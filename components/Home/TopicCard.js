import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const TopicCard = ({image}) => {
  return (
    <Grid item xs={12} md={4}>

    <Stack direction="row" gap="20px" alignItems="center">

      <img style={{ borderRadius: "10px" }} src={image} alt="" width="120px" height="120px" />

      <Box> 
        <Typography fontWeight={500} fontSize="20px">30 best lifestyle blogs  to follow in 2022</Typography>

        <Stack mt="10px" direction="row" gap="10px">
          <Typography color="gray">July 13</Typography>
          <Typography color="gray">13k views</Typography>
        </Stack>

      </Box>


    </Stack>

  </Grid>
  )
}

export default TopicCard