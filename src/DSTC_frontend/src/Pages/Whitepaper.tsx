
import {
  Container,
  Typography,
  Card,
  CardContent,
  Box,

} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';


const theme = createTheme({
  palette: {
    primary: {
      main: '#00bcd4',
    },
    secondary: {
      main: '#ff4081',
    },
    background: {
      default: '#f5f5f5',
      paper: '#ffffff',
    },
    text: {
      primary: '#212121',
      secondary: '#757575',
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

const tokenomicsData = [
  { name: 'Community Rewards', value: 50, color: '#00bcd4' },
  { name: 'Development Fund', value: 20, color: '#ff4081' },
  { name: 'Marketing', value: 15, color: '#00e676' },
  { name: 'Team', value: 10, color: '#ff9100' },
  { name: 'Reserve', value: 5, color: '#d500f9' },
];

const renderTokenomics = () => (
  <ResponsiveContainer width="100%" height={400}>
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
);

const WhitePaper = () => {


  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 4 }} >
        <Card sx={{ p: 4, background: theme.palette.background.paper, borderRadius: 2 }}>
          <CardContent>
            <Typography variant="h4" gutterBottom align="center" color="primary">
              Dust Coin Whitepaper
            </Typography>
            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Executive Summary ("Dusty Beginnings")
              </Typography>
              <Typography variant="body1" gutterBottom>
                Dust Coin (DSTC) is a memetoken that brings humor and shared experiences of embarrassment and rejection to the blockchain. By leveraging blockchain technology, Dust Coin aims to create a global, empathetic community through the innovative use of digital storytelling. Our mission is to turn personal mishaps into collective joy, making the blockchain as relatable and engaging as our shared human experiences.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Background ("Origin Story")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>The Rise of Memecoins</strong><br />
                Memecoins have captivated the crypto community, inspired by the success of projects like Dogecoin and Shiba Inu. Initially seen as jokes, these coins have gained dedicated followings, demonstrating that humor and community are powerful forces in the cryptocurrency world. Memecoins attract a broader audience, engaging those who might not be interested in traditional finance-focused cryptocurrencies.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>The Power of Shared Embarrassment</strong><br />
                In a digital age, embarrassing moments and rejection stories have found a home online, especially on social media platforms. People share their experiences to connect, laugh, and find solidarity in their struggles. Dust Coin leverages this trend, creating a platform where users can share their stories, known as Dust Coins, and earn tokens through interaction.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Combining Memecoins and Storytelling</strong><br />
                Dust Coin combines the playful nature of memecoins with the universal appeal of storytelling. By embedding these relatable experiences into our cryptocurrency, we create a project that is both accessible and engaging. Shared stories evoke empathy, laughter, and connections, making the blockchain more human and enjoyable.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Vision & Mission ("Dusty Dreams")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Vision</strong><br />
                To make blockchain as relatable and engaging as our shared human experiences. At Dust Coin, our vision is to create a blockchain ecosystem that fosters empathy, laughter, and community. Just as shared stories bring people together, we envision a platform that turns personal setbacks into collective growth and joy.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Mission</strong><br />
                To transform embarrassing and rejection stories into a source of humor and connection, fostering a global community. Our mission is to:
                <ul>
                  <li>Connect: Bring people together through shared experiences.</li>
                  <li>Entertain: Provide a platform for humorous and relatable content.</li>
                  <li>Empower: Reward users for sharing their stories and engaging with the community.</li>
                </ul>
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                The Dust Coin Concept ("Dusty Tales")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>A Global Storytelling Platform</strong><br />
                Dust Coin is more than just a token; it's a platform where users can share their funny and embarrassing stories, earning tokens through interaction. Our mascot, the Dusty Cat, embodies the spirit of resilience and humor, reminding us that every embarrassing moment is a chance to laugh and connect.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Celebrating Human Experiences</strong><br />
                Dust Coin celebrates the intersection of storytelling, humor, and technology. By integrating these elements, we create a platform that is innovative and deeply rooted in the shared human experience. Whether you're a seasoned crypto investor or someone new to blockchain, Dust Coin offers something for everyone.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Why Blockchain? ("Our Digital Home")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Blockchain Benefits</strong><br />
                The decentralized nature of blockchain provides a secure, transparent, and immutable platform for Dust Coin. This ensures that user-generated content is safely stored and accessible, fostering trust and engagement within the community.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Robust and Resilient</strong><br />
                Blockchain technology ensures that Dust Coin remains resilient and accessible to users worldwide. The decentralized structure of blockchain aligns perfectly with our mission to create a global community that is inclusive and vibrant.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Tokenomics ("Dust Distribution")
              </Typography>
              {renderTokenomics()}
              <Typography variant="body1" gutterBottom>
                <strong>Total Supply: 4 Million DSTC</strong><br />
                Dust Coin's total supply of 4 million tokens ensures ample availability for a growing community while maintaining scarcity to drive value.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Distribution Breakdown</strong>
                <ul>
                  <li>Community Rewards: 50% - To incentivize participation and engagement within the community.</li>
                  <li>Development Fund: 20% - To support ongoing platform development and innovation.</li>
                  <li>Marketing: 15% - To build awareness and attract new users.</li>
                  <li>Team: 10% - To ensure the team's continued commitment and alignment with the project's success.</li>
                  <li>Reserve: 5% - To provide a buffer for future opportunities and challenges.</li>
                </ul>
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Features ("Dusty Delights")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Story Sharing</strong><br />
                Users can publish their embarrassing stories, known as Dust Coins, on our platform and earn tokens through likes, comments, and shares.
              </Typography>
                     <Typography variant="body1" gutterBottom>
                <strong>Story Sharing</strong><br />
                Users can publish their embarrassing stories, known as Dust Coins, on our platform and earn tokens through likes, comments, and shares.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Interactive Content</strong><br />
                The platform encourages interaction with content, allowing users to engage with stories, participate in community activities, and earn Dust Coins.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Leaderboard</strong><br />
                A leaderboard showcases the top contributors, fostering a healthy competition and rewarding the most engaging storytellers in the community.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Gamification</strong><br />
                By incorporating gamification elements, such as badges and achievements, Dust Coin makes the user experience more engaging and fun.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Governance ("Community Driven")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Decentralized Decision Making</strong><br />
                Dust Coin adopts a decentralized governance model where community members can vote on key decisions, ensuring that the platform evolves according to the collective vision.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Community Proposals</strong><br />
                Users can submit proposals for new features, changes, or improvements. These proposals are voted on by the community, ensuring that everyone's voice is heard.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Roadmap ("Dusty Path Ahead")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Q3 2024: Platform Launch</strong><br />
                Launch of the Dust Coin platform, allowing users to create accounts, share stories, and earn Dust Coins.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Q4 2024: Community Engagement</strong><br />
                Introduction of community engagement features, including leaderboards, badges, and interactive content.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Q1 2025: Mobile App Release</strong><br />
                Release of the Dust Coin mobile app to provide a seamless experience for users on the go.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Q2 2025: Governance Implementation</strong><br />
                Rollout of decentralized governance features, enabling community-driven decision-making.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Q3 2025: Expanded Features</strong><br />
                Introduction of advanced features, such as in-app games, additional rewards, and partnership integrations.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Team ("Dust Makers")
              </Typography>
              <Typography variant="body1" gutterBottom>
                Our team consists of dedicated professionals with expertise in blockchain technology, community management, and digital storytelling. While we maintain anonymity, our credentials in tech and creative fields ensure the successful development and growth of Dust Coin.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Founder</strong> - Visionary leader and driving force behind Dust Coin.<br />
                <strong>CTO</strong> - Technical expert responsible for developing and maintaining the platform.<br />
                <strong>Community Lead</strong> - Ensures a vibrant and engaged community, fostering communication and collaboration.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Partnerships ("Dusty Allies")
              </Typography>
              <Typography variant="body1" gutterBottom>
                We aim to partner with influencers, content creators, and digital platforms to expand our reach and enhance the user experience. These partnerships will help bring more engaging and diverse content to the Dust Coin community.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Risks ("Dusty Caution")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Market Volatility</strong><br />
                Crypto markets are highly volatile, and Dust Coin is no exception. Prices may fluctuate significantly.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Regulatory Challenges</strong><br />
                Changes in regulations could impact our operations and the overall crypto landscape.
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>High-Risk Investment</strong><br />
                Investing in Dust Coin involves risks, and it is recommended to invest only what you can afford to lose.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Community & Social Impact ("Dusty Heart")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Engagement Platforms</strong><br />
                <ul>
                  <li><strong>Telegram</strong> - Join discussions, share ideas, and participate in events.</li>
                  <li><strong>Twitter</strong> - Stay updated with the latest news and announcements.</li>
                  <li><strong>Website</strong> - Share your stories and keep up with important timelines.</li>
                </ul>
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Charity Initiatives</strong><br />
                A portion of Dust Coin's proceeds will support charitable initiatives, reflecting our commitment to giving back to the community.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Why Dust Coin? ("Dusty Joy")
              </Typography>
              <Typography variant="body1" gutterBottom>
                Dust Coin offers a unique blend of humor, community, and blockchain technology. In a world often dominated by serious finance, we add a touch of lightheartedness. Join our global community and be part of a project that turns personal setbacks into collective joy.
              </Typography>
            </Box>

            <Box mt={3} mb={2}>
              <Typography variant="h5" gutterBottom>
                Appendices ("Dusty Extras")
              </Typography>
              <Typography variant="body1" gutterBottom>
                <strong>Technical Details</strong> - Comprehensive information on how Dust Coin integrates with blockchain technology, providing a seamless user experience.<br />
                <strong>Team Backgrounds</strong> - Insights into our team's expertise in tech and creative fields, ensuring the successful development of Dust Coin.<br />
                <strong>Storytelling Trends</strong> - In-depth research into digital storytelling trends and insights, providing context and inspiration for Dust Coin's development.
              </Typography>
            </Box>
          </CardContent>
        </Card>
        <Box display="flex" justifyContent="center" mt={4}>
        
        </Box>
      </Container>
    </ThemeProvider>
  );
};

export default WhitePaper;

