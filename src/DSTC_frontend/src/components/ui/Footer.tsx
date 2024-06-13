import React from "react";
import {
  Container,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
} from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import TelegramIcon from '@mui/icons-material/Telegram';
import ChatIcon from '@mui/icons-material/Chat';

const DSTCComponent: React.FC = () => {

  // Dark-themed footer
  const renderFooter = () => (
    <Box mt={4} p={2} bgcolor="#121212" color="#ffffff">
      <Grid container justifyContent="center" spacing={2}>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              window.location.href="https://twitter.com/DustcoinDST";
            }}
            startIcon={<TwitterIcon />}
          >
            Twitter
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              window.location.href="https://t.me/dustcoinicp";
            }}
            startIcon={<TelegramIcon />}
          >
            Telegram
          </Button>
        </Grid>
        <Grid item>
          <Button
            variant="outlined"
            color="primary"
            onClick={() => {
              window.location.href="https://oc.app/group/awyow-cyaaa-aaaar-bgjmq-cai/?ref=gza3g-eiaaa-aaaar-bfbja-cai"; // Replace with your TikTok link
            }}
            startIcon={<ChatIcon />}
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
          {/* Existing content */}
          {renderFooter()} {/* Render the footer */}
        </CardContent>
      </Card>
    </Container>
  );
};

export default DSTCComponent;
