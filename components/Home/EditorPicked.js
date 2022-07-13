import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import React from 'react'

const EditorPicked = () => {
    return (
        <Box my="80px">

            <Container>
                <Typography variant='h3'>Editor's Picked</Typography>


                <Grid container>

                    <Grid item xs={12} md={6} display="flex" flexDirection="column" justifyContent="center" gap="30px">

                            <Stack direction="row" alignItems="center" gap="20px">

                                <Box sx={{
                                    background: "#FFCDA3",
                                    color: "#333230",
                                    padding: "10px 25px",
                                    borderRadius: "10px"
                                }}>Lifestyle</Box>

                                <Typography color="gray">July 13 2022</Typography>

                            </Stack>

                            <Typography variant='h3' fontWeight={600}>The 28 Best Skincare products of 2022</Typography>

                            <Typography color="gray" lineHeight={1.8}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Id nobis ab pariatur quidem. Nesciunt voluptatem error quam hic iusto? Nisi quod consectetur autem aliquam? Necessitatibus molestiae atque praesentium reiciendis rerum nesciunt itaque quibusdam voluptatibus suscipit magni perferendis placeat, ex quos quasi quis recusandae aliquid illo fugiat repellat nisi at consectetur?</Typography>

                    </Grid>

                    <Grid item xs={12} md={6} textAlign="right">
                        <img style={{ borderRadius: "10px" }} src="/editor.jpg" alt="" />
                    </Grid>

                </Grid>


            </Container>

        </Box>
    )
}

export default EditorPicked