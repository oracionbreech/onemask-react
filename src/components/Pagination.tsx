import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import usePagination from "@mui/material/usePagination/usePagination";
import React from "react";

const PaginationContainer = styled(Stack)`
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

const Pagination: React.FC<{}> = () => {
  const { items } = usePagination({
    count: 100,
    siblingCount: 0,
    defaultPage: 1,
    boundaryCount: 2,
  });

  return (
    <PaginationContainer direction='row' justifyContent='space-evenly'>
      {items.map(({ page, type, onClick, selected, disabled }) => {
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
    </PaginationContainer>
  );
};
export default Pagination;
