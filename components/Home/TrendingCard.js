import { Box, Grid, Typography } from '@mui/material'
import React from 'react'

const TrendingCard = ({image}) => {
    return (

        <Grid item xs={12} md={4}>

            <img style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
            }} width="100%" src={image} alt="" />
            <Box sx={{ background: "#fff", padding: "30px" }}>


                <li style={{ marginTop: "10px", color: "gray" }}>13 July</li>

                <Typography py={3} variant='h5'>After a few days, They traveled to other side of the world</Typography>

            </Box>


        </Grid>

    )
}

export default TrendingCard