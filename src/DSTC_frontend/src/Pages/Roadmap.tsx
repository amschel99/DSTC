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
import { EventAvailable } from '@mui/icons-material';

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

const roadmapItems = [
  {
    title: "Platform Completion",
    date: "June 2024",
    description: "Finish the platform to add interactivity so that stories can be interactive.",
  },
  {
    title: "Tip and Get Tipped",
    date: "July 2024",
    description: "Add feature to tip and get tipped on the platform.",
  },
  {
    title: "Distribution Plan",
    date: "August 2024",
    description: "Award 5 Dusts for each story shared on our platform. Distribution handled by our backend canister.",
  },
  {
    title: "Presale Campaign",
    date: "September 2024",
    description: "Partner with influencers for a presale campaign to provide liquidity.",
  },
  {
    title: "Tradable on DEXes",
    date: "October 2024",
    description: "Dust will be tradable and swappable on decentralized exchanges.",
  },
  {
    title: "Platform Improvements",
    date: "Ongoing",
    description: "Continual improvements of the platform.",
  },
];

const Roadmap: React.FC = () => {
  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 4 }}>
        <Typography variant="h4" gutterBottom align="center" color="primary">
          Our Roadmap
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {roadmapItems.map((item, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ background: theme.palette.background.paper, borderRadius: 2, boxShadow: 3 }}>
                <CardContent>
                  <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
                    <EventAvailable sx={{ fontSize: 30, color: theme.palette.primary.main, mr: 1 }} />
                    <Typography variant="subtitle2" color="textSecondary">{item.date}</Typography>
                  </Box>
                  <Typography variant="h5" color="primary" gutterBottom>
                    {item.title}
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    {item.description}
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

export default Roadmap;
