import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@mui/material";

const tokenomicsDetails = [
  { title: "Total Supply", content: "1,000,000,000 DSTC" },
  { title: "Circulating Supply", content: "500,000,000 DSTC" },
  { title: "Market Cap", content: "$500,000,000" },
  { title: "Initial Price", content: "$0.10 per DSTC" },
  {
    title: "Allocation",
    content: "50% Mining, 30% Team, 10% Marketing, 10% Reserves",
  },
];

const Tokenomics: React.FC = () => {
  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Card sx={{ background: "#1e1e1e", p: 3 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: "#bb86fc" }}>
            DSTC Tokenomics
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            sx={{ color: "#ffffff", mb: 2 }}
          >
            Here are the details of the DSTC tokenomics:
          </Typography>
          <List>
            {tokenomicsDetails.map((item, index) => (
              <ListItem key={index} sx={{ borderBottom: "1px solid #bb86fc" }}>
                <ListItemText
                  primary={
                    <Typography variant="h6" sx={{ color: "#bb86fc" }}>
                      {item.title}
                    </Typography>
                  }
                  secondary={
                    <Typography variant="body2" sx={{ color: "#ffffff" }}>
                      {item.content}
                    </Typography>
                  }
                />
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Tokenomics;
