import { Box, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const RecentCard = ({ image }) => {
    return (

        <Grid item xs={12} md={6}>

            <img style={{
                borderTopLeftRadius: "20px",
                borderTopRightRadius: "20px",
            }} width="100%" src={image} alt="" />
            <Box sx={{ background: "#fff", padding: "30px" }}>


                <li style={{ marginTop: "10px", color: "gray" }}>13 July</li>

                <Typography py={3} variant='h5'>After a few days, They traveled to other side of the world</Typography>

                <Stack direction="row" gap="10px" alignItems="center">
                    <img style={{ borderRadius: "50%" }} src="/author.jpg" alt="" width="40px" />

                    <Typography fontWeight={700}>Kate Adie</Typography>

                    <li style={{ color: "gray", marginLeft: "10px" }}>12 mins to read</li>
                </Stack>

            </Box>


        </Grid>

    )
}

export default RecentCard