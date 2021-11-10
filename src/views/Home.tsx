import React, { lazy, Suspense, useState } from "react";

import { Container, Grid } from "@mui/material";
import Pagination from "../components/Pagination";
import { Box } from "@mui/system";

const NFT = lazy(() => import("../components/NFT"));

const Home: React.FC = () => {
  const [page, setpage] = useState(1);

  return (
    <Container>
      <Box mt={2} />
      <Grid mt={3} container spacing={2}>
        <Grid item md={12} lg={12} xs={12} xl={6} sm={12}>
          <Pagination setpage={setpage} />
        </Grid>
      </Grid>
      <Suspense fallback={"loading"}>
        <Grid mt={3} container spacing={2}>
          {Array.from(Array(50).keys()).map((nft, index) => (
            <Grid item md={3} lg={3} xs={12} xl={3} sm={4}>
              <NFT key={nft} id={(page - 1) * 50 + index} />
            </Grid>
          ))}
        </Grid>
      </Suspense>
    </Container>
  );
};

export default Home;
