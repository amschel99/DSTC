import React from 'react';
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Box,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import TransferWithinAStationIcon from '@mui/icons-material/TransferWithinAStation';
import CodeIcon from '@mui/icons-material/Code';
import StorageIcon from '@mui/icons-material/Storage';

// Custom theme for a sleek look
const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4', // Neon Cyan
    },
    secondary: {
      main: '#ff4081', // Neon Pink
    },
    background: {
      default: '#1a1a1a', // Dark Background
      paper: '#212121', // Darker Card Background
    },
    text: {
      primary: '#ffffff',
      secondary: '#e0e0e0',
    },
  },
  typography: {
    fontFamily: 'Roboto, sans-serif',
    h4: {
      fontWeight: 700,
    },
    h5: {
      fontWeight: 500,
    },
    body1: {
      fontWeight: 300,
    },
  },
});

const steps = [
  {
    title: "Token Storage",
    description: "Our backend canister securely holds tokens for the community on the Internet Computer.",
    icon: <StorageIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
  },
  {
    title: "Publishing a Dust Story",
    description: "When a user publishes a Dust story, a function is invoked.",
    icon: <CodeIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} />,
  },
  {
    title: "Token Transfer",
    description: "The function transfers 5 tokens to the publisher's account automatically.",
    icon: <TransferWithinAStationIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
  },
];

const HowItWorks: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          How It Works
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {steps.map((step, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ background: theme.palette.background.paper, borderRadius: 2, boxShadow: 3 }}>
                <CardContent sx={{ textAlign: 'center' }}>
                  <Box sx={{ mb: 2 }}>
                    {step.icon}
                  </Box>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {step.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {step.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </ThemeProvider>
  );
};

export default HowItWorks;
