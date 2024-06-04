import React from "react";
import {
  Container,

  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";


const DSTCComponent: React.FC = () => {


  // ... (existing code)

  // Dark-themed footer
  const renderFooter = () => (
    <Box mt={4} p={2} bgcolor="#121212" color="#ffffff">
 
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
                    window.location.href="https://x.com/DustcoinDST"
              // Add your Twitter link here
            }}
          >
            Twitter
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
                window.location.href="https://t.me/dustcoinicp"
              // Add your Telegram link here
            }}
          >
            Telegram
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              // Add your TikTok link here
            }}
          >
          Openchat
          </Button>
        </Grid>
      </Grid>
    </Box>
  );

  return (
    <Container sx={{ mt: 4, width: "100vw" }}>
      <Card sx={{ p: 2, background: "#121212", color: "#ffffff" }}>
        <CardContent>
          {/* ... (existing content) */}
          {renderFooter()} {/* Render the footer */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default DSTCComponent;
