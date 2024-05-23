import React from "react";
import { Container, Typography, Card, CardContent, Box } from "@mui/material";
import { DSTC_backend, createActor } from "../../../declarations/DSTC_backend";
import { useParams } from "react-router-dom";
import { HttpAgent } from "@dfinity/agent";

const ArticleComponent: React.FC = () => {
  const { dustId } = useParams();
  const [dust, setDust] = React.useState<any>();
  let actor = DSTC_backend;
  const agent = new HttpAgent();
  //here you can use an env variable for actor canister ID
  actor = createActor("avqkn-guaaa-aaaaa-qaaea-cai", {
    agent,
  });

  async function fetchDust() {
    let dust = await actor.get_single_dust(
      parseInt(dustId as string) as unknown as bigint
    );

    return dust;
  }
  React.useEffect(() => {
    async function fetchData() {
      const fetchedDust: any = await fetchDust();
      setDust(fetchedDust?.Ok);
      console.log(`The dust is ${fetchedDust?.Ok?.title}`);
      console.log(`The dust is ${fetchedDust?.Err}`);
      console.log(`The dust is ${dust}`);
    }

    fetchData();
  }, []);
  return (
    <Container sx={{ mt: 4, width: "100vw", color: "#ffffff" }}>
      <Card sx={{ p: 3, background: "#1e1e1e" }}>
        <CardContent>
          <Typography variant="h4" gutterBottom sx={{ color: "#bb86fc" }}>
            {dust?.title}
          </Typography>
          <Box mt={2}>
            <Typography variant="body1" sx={{ color: "#ffffff" }}>
              {dust?.content.join(" ")}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Container>
  );
};

export default ArticleComponent;
