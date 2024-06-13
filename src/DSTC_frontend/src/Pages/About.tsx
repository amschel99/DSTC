import React from "react";
import {
  Container,
  Typography,
  Card,
  CardContent,
  Grid,
  Button,
  Box,
  ThemeProvider,
  createTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import Carousel from "react-material-ui-carousel";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import StarIcon from '@mui/icons-material/Star';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import { PieChart, Pie, Cell, Legend, Tooltip, ResponsiveContainer } from 'recharts';

// Custom theme for the futuristic look
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
    fontFamily: 'Orbitron, sans-serif', // Sci-fi styled font
    h4: {
      fontWeight: 700,
      color: '#00bcd4', // Neon Cyan
   
    },
    h5: {
      fontWeight: 500,
      color: '#ff4081', // Neon Pink
    
    },
    body1: {
      fontWeight: 300,
      color: '#e0e0e0',
    },
    subtitle1: {
      fontFamily: 'Audiowide, cursive', // Another sci-fi font
    },
  },
});

const DSTCComponent: React.FC = () => {
  const navigate = useNavigate();

  const carouselItems = [
    {
      title: "Tip other creators and get tipped!",
      description: "When you publish a story, other creators can tip you and you can also tip others by sending Dust coins",
      icon: <StarIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: "Content promotion",
      description: "Make your story more visible to others!",
      icon: <CheckCircleIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} />,
    },
    {
      title: "Special Badges and Recognition",
      description: "Get recognition from the community!",
      icon: <EmojiEventsIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
  ];

  const renderTokenUtility = () => (
    <Box mt={3}>
      <Typography variant="h5" gutterBottom style={{textAlign:"center"}}>
        DSTC Token Utility
      </Typography>
      <Carousel
        indicators={true}
        autoPlay={false}
        navButtonsAlwaysVisible={true}
      >
        {carouselItems.map((item, i) => (
          <Card key={i} sx={{ background: theme.palette.background.paper, p: 2, textAlign: "center", boxShadow: 'none' }}>
            <CardContent>
              {item.icon}
              <Typography variant="h6" gutterBottom>
                {item.title}
              </Typography>
              <Typography variant="body1" gutterBottom>
                {item.description}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Carousel>
    </Box>
  );

  const whitePaperSections = [
    {
      title: "Dusting off unfair life moments",
      content: "Seeing Dust is a metaphor for an unfair moment in life when you did something embarassing or got rejected by the person you thought was the love of your life. This is a universal human experience and everyone has had 'Dust moments'"
    },
    {
      title: "Turn Dust into content",
      content: "Have that cringy poem you wrote for your crush who rejected you? Share with the community. Share any embarassing moments you've had in the past or present or that you anticipate to have 😂"
    },
    {
      title: "The Dust platform",
      content: "On this platform, users can publish their stories, interact with content by liking, commenting, and sharing, and earn Dust Coins. "
    },
    {
      title: "Who Will Use the Token",
      content: "Dust Coin will be used by content creators, readers, and anyone who enjoys engaging with funny and relatable content. The token incentivizes participation and fosters a supportive and entertaining community. Influencers, comedians, and storytellers will find Dust Coin particularly appealing as it offers a unique way to monetize their content and connect with their audience. Furthermore, brands and advertisers can leverage Dust Coin to engage with a highly interactive and engaged user base, creating innovative marketing campaigns that resonate with the community."
    },
  ];

  const tokenomicsData = [
    { name: 'Community Rewards', value: 40, color: theme.palette.primary.main },
    { name: 'Development Fund', value: 20, color: theme.palette.secondary.main },
    { name: 'Marketing', value: 15, color: '#00e676' }, // Neon Green
    { name: 'Team', value: 10, color: '#ff9100' }, // Neon Orange
    { name: 'Reserve', value: 15, color: '#d500f9' }, // Neon Purple
  ];

  const renderWhitePaper = () => (
    <Box mt={5}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
     About Dust coin
      </Typography>
      {whitePaperSections.map((section, i) => (
        <Card key={i} sx={{ background: theme.palette.background.paper, mb: 3, p: 2, boxShadow: 'none' }}>
          <CardContent>
            <Typography variant="h5" gutterBottom color="secondary">
              {section.title}
            </Typography>
            <Typography variant="body1">
              {section.content}
            </Typography>
          </CardContent>
        </Card>
      ))}
    </Box>
  );

  const renderTokenomics = () => (
    <Box  mt={5}>
      <Typography variant="h4" gutterBottom align="center" color="primary">
        Tokenomics
      </Typography>
      <Card sx={{ background: theme.palette.background.paper, mb: 3, p: 2, boxShadow: 'none' }}>
        <CardContent>
          <Typography variant="h5" gutterBottom color="secondary">
            Total Supply: 50 Million
          </Typography>
         <ResponsiveContainer width="100%" height={400} >
            <PieChart>
              <Pie
                data={tokenomicsData}
                cx="50%"
                cy="50%"
                labelLine={false}
                outerRadius={150}
                fill="#8884d8"
                dataKey="value"
              >
                {tokenomicsData.map((entry, index) => (
                  <Cell key={`cell-${index}`} fill={entry.color} />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </CardContent>
      </Card>
    </Box>
  );

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 4 }}>
        <Card sx={{ p: 4, background: theme.palette.background.paper, borderRadius: 2, boxShadow: 'none' }}>
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
                border: '4px solid',
                borderColor: 'primary.main',
              }}
            />
            <Typography variant="h4" gutterBottom align="center">
              Welcome to DSTC - Dust Coin
            </Typography>
            <Typography variant="subtitle1" gutterBottom align="center" color="textSecondary">
Intersecting humour,storytelling and technology 
            </Typography>
            <Box mt={2} mb={2} textAlign="center">
              <Typography variant="h6" gutterBottom>
             Let's all laugh about our past embarrasing moments
              </Typography>
           
            </Box>
          
            {renderTokenUtility()}
            {renderWhitePaper()}
            {renderTokenomics()}
            <Grid container spacing={2} mt={3} justifyContent="center">
              <Grid item xs={12} sm={6}>
                <Button
                  variant="contained"
                  color="secondary"
                  fullWidth
                  sx={{ py: 1.5 }}
                  onClick={() => navigate("Share")}
                >
                  Share Your Dust Story
                </Button>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default DSTCComponent;
