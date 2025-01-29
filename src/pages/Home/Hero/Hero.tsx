import { Button, Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "../../../assets/images/FotoPerfil.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';

const Hero = () => {

  const StyledHero = styled("div")(() => ({
    height: "100vh"
  }))

  const StyledImg = styled("img")(() => ({
    width: "100%"
  }))
  
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ xs: 12, md: 8 }}>
              <Typography align="center">Hey, I'm</Typography>
              <Typography variant="h2" align="center">Karina Sasaki</Typography>
              <Typography align="center">A Software Developer</Typography>
              <Grid container display="flex" justifyContent="center">
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <Button>
                    <DownloadIcon/>
                    Download CV
                  </Button>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <Button>
                    <EmailOutlinedIcon/>
                    Contact me
                  </Button>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 4 }}>
              <StyledImg src={Avatar}/>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero