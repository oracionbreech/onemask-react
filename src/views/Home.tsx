import React from "react";

import { Container } from "@mui/material";
import Pagination from "../components/Pagination";
import { Box } from "@mui/system";
import NFT from "../components/NFT";

const Home: React.FC = () => {
  return (
    <Container>
      <Box mt={2} />
      <Pagination />
      <NFT />
    </Container>
  );
};

export default Home;
