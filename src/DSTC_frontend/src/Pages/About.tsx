
import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const DSTCComponent: React.FC = () => {
  const navigate = useNavigate();

  // Utility section for DSTC
  const renderTokenUtility = () => (
    <Box mt={3}>
      <Typography variant="h5" gutterBottom>
        DSTC Token Utility
      </Typography>
      <Typography variant="body1" gutterBottom>
        Holders of DSTC enjoy special benefits:
      </Typography>
      <ul>
        <li>Vote on featured rejection stories</li>
        <li>Access exclusive content</li>
        <li>Earn NFT rewards</li>
        {/* Add more utility points here */}
      </ul>
    </Box>
  );

  return (
    <Container sx={{ mt: 4, width: "100vw" }}>
      <Card sx={{ p: 2, background: "#121212", color: "#ffffff" }}>
        <CardContent>
          <Box
            component="img"
            src="./logo.jpeg"
            alt="DSTC Coin"
            sx={{
              display: "block",
              margin: "0 auto",
              width: "150px",
              height: "150px",
              borderRadius: "50%",
              mb: 3,
            }}
          />
          <Typography variant="h4" gutterBottom>
            Welcome to DSTC - Dust Coin
          </Typography>
          <Typography variant="subtitle1" gutterBottom>
            A memetoken popularized by the famous Dust memes
          </Typography>
          <Box mt={2} mb={2}>
            <Typography variant="h6" gutterBottom>
              "In life, dust is always constant" - A wise man
            </Typography>
            <Typography variant="h6" gutterBottom>
              "Simps always see dust" - Another wise man
            </Typography>
          </Box>
          <Typography variant="body1" gutterBottom>
            Seeing dust means getting disappointed by someone, mostly someone
            you love or have a crush on but doesn't love you back. Do not be a
            simp. Else you'll see dust.
          </Typography>
          {renderTokenUtility()} {/* Render the token utility section */}
          <Grid container spacing={2} mt={3}>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={() => {
                navigate("Share");
              }}
            >
              Share Your Dust Story
            </Button>
          </Grid>
        </CardContent>
      </Card>
    </Container>
  );
};

export default DSTCComponent;
