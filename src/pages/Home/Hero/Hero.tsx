import { Container, styled, Typography } from "@mui/material";
import Grid from "@mui/material/Grid2";
import Avatar from "../../../assets/images/FotoPerfil.png";
import DownloadIcon from '@mui/icons-material/Download';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import StyledButton from "../../../components/StyledButton/StyledButton";

const Hero = () => {

  const StyledHero = styled("div")(({ theme }) => ({
    height: "100vh",
    display: "flex",
    alignItems: "center",
    [theme.breakpoints.down("md")]: {
      margin: "0 20px",
    }
  }))

  const StyledImg = styled("img")(({ theme }) => ({
    width: "50%",
    display: "block",
    margin: "0 auto",
    [theme.breakpoints.down("md")]: {
      display: "none",
    }
  }))
  
  return (
    <>
      <StyledHero>
        <Container maxWidth="lg">
          <Grid container>
            <Grid size={{ xs: 12, md: 7 }}>
              <Typography align="center">Hey, I'm</Typography>
              <Typography variant="h2" align="center" pb={2}>Karina Sasaki</Typography>
              <Typography align="center">A Software Developer</Typography>
              <Grid container display="flex" justifyContent="center" spacing={3} pt={3}>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <StyledButton>
                    <DownloadIcon/>
                    <Typography>
                      Download CV
                    </Typography>
                  </StyledButton>
                </Grid>
                <Grid size={{ xs: 12, md: 4 }} display="flex" justifyContent="center">
                  <StyledButton>
                    <EmailOutlinedIcon/>
                    <Typography>
                      Contact me
                    </Typography>
                  </StyledButton>
                </Grid>
              </Grid>
            </Grid>
            <Grid size={{ xs: 12, md: 5 }}>
              <StyledImg src={Avatar}/>
            </Grid>
          </Grid>
        </Container>
      </StyledHero>
    </>
  )
}

export default Hero