import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";

interface BlogPost {
  id: number;
  title: string;
  content: string;
}

const blogPosts: BlogPost[] = [
  {
    id: 1,
    title: "First Blog Post",
    content: "This is the content of the first blog post.",
  },
  {
    id: 2,
    title: "Second Blog Post",
    content: "This is the content of the second blog post.",
  },
  {
    id: 3,
    title: "Third Blog Post",
    content: "This is the content of the third blog post.",
  },
  {
    id: 4,
    title: "Fourth Blog Post",
    content: "This is the content of the fourth blog post.",
  },
  {
    id: 5,
    title: "Fifth Blog Post",
    content: "This is the content of the fifth blog post.",
  },
];

const BlogCardsComponent: React.FC = () => {
  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Grid container spacing={4}>
        {blogPosts.map((post) => (
          <Grid item xs={12} sm={6} md={4} key={post.id}>
            <Card sx={{ background: "#1e1e1e" }}>
              <CardContent>
                <Typography variant="h5" gutterBottom sx={{ color: "#bb86fc" }}>
                  {post.title}
                </Typography>
                <Typography variant="body2" sx={{ color: "#ffffff" }}>
                  {post.content}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogCardsComponent;
