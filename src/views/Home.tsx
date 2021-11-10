import React from "react";

import { Container } from "@mui/material";
import Pagination from "../components/Pagination";
import { Box } from "@mui/system";
import Statistics from "../components/Statistics";

const Home: React.FC = () => {
  return (
    <Container>
      <Box mt={2} />
      <Pagination />
      <Statistics maxRange={4} range={3} />
    </Container>
  );
};

export default Home;
