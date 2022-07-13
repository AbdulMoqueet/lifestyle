import { Box, Container, Grid, Typography, Stack } from "@mui/material"
import Image from "next/image"

const Hero = () => {
    return (
        <Box>
            <Container>

                <Grid container mt={6}>


                    <Grid item xs={12} md={6} display="flex" alignItems="center">

                        <Stack gap="30px" p="10px">
                            <Typography variant="h3" fontWeight={600}>
                                30 best lifestyle blogs  to follow in 2022
                            </Typography>


                            <Typography color="gray">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est, cumque laudantium nobis assumenda, dignissimos, amet ullam doloribus quia obcaecati libero possimus eos ea mollitia quas quaerat necessitatibus pariatur illum ab!</Typography>

                            <Stack direction="row" gap="10px" alignItems="center">
                                <img style={{borderRadius: "50%"}} src="/author.jpg" alt="" width="40px" />

                                <Typography fontWeight={700}>Kate Adie</Typography>

                                <li style={{color: "gray", marginLeft: "10px"}}>6 mins to read</li>
                            </Stack>

                        </Stack>



                    </Grid>


                    <Grid item xs={12} md={6}>
                        <img src='/hero__1.jpg' alt='' width="100%" />
                    </Grid>



                </Grid>

            </Container>
        </Box>
    )
}

export default Hero