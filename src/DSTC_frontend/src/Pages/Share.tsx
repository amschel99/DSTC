import React, { useState } from "react";
import {
  Container,
  TextField,
  Button,
  Typography,
  Card,
  CardContent,
  Box,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#bb86fc",
    },
    background: {
      default: "#121212",
      paper: "#1e1e1e",
    },
    text: {
      primary: "#ffffff",
    },
  },
  typography: {
    fontFamily: "Roboto, sans-serif",
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            "& fieldset": {
              borderColor: "#bb86fc",
            },
            "&:hover fieldset": {
              borderColor: "#bb86fc",
            },
            "&.Mui-focused fieldset": {
              borderColor: "#bb86fc",
            },
          },
          "& .MuiInputLabel-root": {
            color: "#bb86fc",
          },
          "& .MuiInputLabel-root.Mui-focused": {
            color: "#bb86fc",
          },
        },
      },
    },
  },
});

const PublishStoryComponent: React.FC = () => {
  const [title, setTitle] = useState("");
  const [story, setStory] = useState("");

  const handlePublish = () => {
    // Implement publish functionality here, such as sending data to an API
    console.log("Title:", title);
    console.log("Story:", story);
  };

  return (
    <ThemeProvider theme={darkTheme}>
      <Container maxWidth="sm" sx={{ mt: 4 }}>
        <Card variant="outlined" sx={{ p: 3 }}>
          <CardContent>
            <Typography variant="h5" gutterBottom>
              Share Your Dust Story
            </Typography>
            <Box mt={2} mb={2}>
              <TextField
                fullWidth
                variant="outlined"
                label="Title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                sx={{ mb: 2 }}
              />
              <TextField
                fullWidth
                variant="outlined"
                label="Your Story"
                multiline
                rows={6}
                value={story}
                onChange={(e) => setStory(e.target.value)}
              />
            </Box>
            <Button
              variant="contained"
              color="primary"
              fullWidth
              onClick={handlePublish}
            >
              Publish
            </Button>
          </CardContent>
        </Card>
      </Container>
    </ThemeProvider>
  );
};

export default PublishStoryComponent;
