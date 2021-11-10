import React from "react";

import { Container, Stack, styled, Typography } from "@mui/material";
import usePagination from "@mui/material/usePagination/usePagination";

const Pagination = styled(Stack)`
  border: 1px solid #ebbabd;
  border-radius: 1.5rem;
`;

const getPaginationText = (
  type:
    | "page"
    | "first"
    | "last"
    | "next"
    | "previous"
    | "start-ellipsis"
    | "end-ellipsis",
  page: number
) => {
  switch (type) {
    case "end-ellipsis":
      return "...";
    case "previous":
      return "Previous";
    case "next":
      return "Next";
    case "first":
      return "First";
    case "start-ellipsis":
      return "...";
    default:
      return page;
  }
};

const Home: React.FC = () => {
  const { items } = usePagination({
    count: 100,
    siblingCount: 0,
    defaultPage: 1,
    boundaryCount: 2,
  });
  return (
    <Container>
      <Pagination direction='row' justifyContent='space-evenly'>
        {items.map(({ page, type, onClick, selected, disabled }) => {
          console.log(disabled);

          return (
            <Stack
              padding='0.5rem'
              width='100%'
              direction='row'
              justifyContent='center'
              borderRight={type !== "next" ? "1px solid #ebbabd" : ""}
              onClick={(e) => {
                if (!disabled) onClick(e);
              }}
              sx={{
                cursor: "pointer",
                background: selected ? "#ebbabd" : "transparent",
              }}
            >
              <Typography ml={0} textAlign='center'>
                {getPaginationText(type, page)}
              </Typography>
            </Stack>
          );
        })}
      </Pagination>
    </Container>
  );
};

export default Home;
