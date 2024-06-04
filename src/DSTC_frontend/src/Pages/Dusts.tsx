import React from "react";
import {
  Container,
  Card,
  CardContent,
  Typography,
  Grid,
  Box,
} from "@mui/material";
import { DSTC_backend, createActor } from "../../../declarations/DSTC_backend";
import {  HttpAgent } from "@dfinity/agent";
import { Link } from "react-router-dom";

const BlogCardsComponent: React.FC = () => {
  const [dusts, setDusts] = React.useState<any>([]);
  let actor = DSTC_backend;
  const agent:any = new HttpAgent();
  //here you can use an env variable for actor canister ID
  actor = createActor("kc5xa-pqaaa-aaaap-qhk3a-cai", {
    agent,
  });

  async function fetchDusts() {
    let dusts = await actor.get_dusts();
    return dusts;
  }
  React.useEffect(() => {
    async function fetchData() {
      const fetchedDusts = await fetchDusts();
      setDusts(fetchedDusts);
    }

    fetchData();
  }, []);
  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Grid container spacing={4}>
        {dusts.map(([_, post]:any,id: number) => (
          <Grid item xs={12} sm={6} md={4} key={id}>
            {dusts.length < 1 && (
              <h5 style={{ textAlign: "center" }}>No dusts posted yet</h5>
            )}
            <Card sx={{ background: "#1e1e1e" }}>
              <Box
                component={Link}
                to={`/Dusts/${id}`}
                style={{ textDecoration: "none" }}
              >
                <CardContent>
                  <Typography
                    variant="h5"
                    gutterBottom
                    sx={{ color: "#bb86fc" }}
                  >
                    {post.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: "#ffffff" }}>
                    {post.content?.slice(0, 100) + "..."}
                  </Typography>
                </CardContent>
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BlogCardsComponent;