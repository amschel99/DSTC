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
      title: "Exclusive Content",
      description: "Access special stories and insights",
      icon: <StarIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
    {
      title: "Vote on Stories",
      description: "Have a say in what gets featured",
      icon: <CheckCircleIcon sx={{ fontSize: 50, color: theme.palette.secondary.main }} />,
    },
    {
      title: "Earn NFT Rewards",
      description: "Get exclusive NFTs for your participation",
      icon: <EmojiEventsIcon sx={{ fontSize: 50, color: theme.palette.primary.main }} />,
    },
  ];

  const renderTokenUtility = () => (
    <Box mt={3}>
      <Typography variant="h5" gutterBottom>
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
      title: "The Story Behind Dust Coin",
      content: "Dust Coin originates from the comic term 'seeing dust,' which means getting embarrassed or rejected, particularly in romantic pursuits. Our platform allows users to share their funny and embarrassing stories, known as Dust Coins, and earn tokens through publication and interaction. Dust Coin leverages blockchain technology to create a transparent and decentralized platform where users can publish their experiences and engage with a supportive community. By turning these relatable moments into a token economy, we aim to transform personal setbacks into shared laughter and collective growth."
    },
    {
      title: "The Community",
      content: "Dust Coin is more than just a token; it's a vibrant community of people who find humor and solidarity in shared experiences of embarrassment and rejection. Users connect through storytelling, laughing at shared mishaps, and supporting each other. Our platform fosters a sense of belonging and camaraderie, encouraging users to share their stories without fear of judgment. By participating in the Dust Coin ecosystem, members contribute to a culture of empathy and resilience, where every 'dusty' moment is a step towards building a stronger, more united community."
    },
    {
      title: "Activities and Uses",
      content: "Users can publish their stories, interact with content by liking, commenting, and sharing, and earn Dust Coins. The token can be used for voting on featured stories, accessing exclusive content, and earning unique NFTs. Additionally, Dust Coin holders can participate in community-driven events, challenges, and contests that celebrate creativity and humor. As the platform grows, we plan to introduce new features and partnerships that enhance the utility and value of Dust Coins, making them an integral part of the digital storytelling landscape."
    },
    {
      title: "Who Will Use the Token",
      content: "Dust Coin will be used by content creators, readers, and anyone who enjoys engaging with funny and relatable content. The token incentivizes participation and fosters a supportive and entertaining community. Influencers, comedians, and storytellers will find Dust Coin particularly appealing as it offers a unique way to monetize their content and connect with their audience. Furthermore, brands and advertisers can leverage Dust Coin to engage with a highly interactive and engaged user base, creating innovative marketing campaigns that resonate with the community."
    },
  ];

  const tokenomicsData = [
    { name: 'Community Rewards', value: 50, color: theme.palette.primary.main },
    { name: 'Development Fund', value: 20, color: theme.palette.secondary.main },
    { name: 'Marketing', value: 15, color: '#00e676' }, // Neon Green
    { name: 'Team', value: 10, color: '#ff9100' }, // Neon Orange
    { name: 'Reserve', value: 5, color: '#d500f9' }, // Neon Purple
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
            Total Supply: 4 Million
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
              A memetoken popularized by the famous Dust memes
            </Typography>
            <Box mt={2} mb={2} textAlign="center">
              <Typography variant="h6" gutterBottom>
                "In life, dust is always constant" - A wise man
              </Typography>
              <Typography variant="h6" gutterBottom>
                "Simps always see dust" - Another wise man
              </Typography>
            </Box>
            <Typography variant="body1" gutterBottom align="center">
              Seeing dust means getting disappointed by someone, mostly someone
              you love or have a crush on but doesn't love you back. Do not be a
              simp. Else you'll see dust.
            </Typography>
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
