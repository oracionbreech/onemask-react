import styled from "@emotion/styled";
import { Stack, Typography } from "@mui/material";
import usePagination from "@mui/material/usePagination/usePagination";
import React from "react";

const PaginationContainer = styled(Stack)`
  border: 1px solid #ebbabd;
  border-radius: 1.5rem;
  overflow: hidden;
`;

const PaginationItem = styled(Stack)`
  :hover {
    background-color: #ebbabda5;
  }
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

const Pagination: React.FC<{
  setpage: React.Dispatch<React.SetStateAction<number>>;
}> = ({ setpage }) => {
  const { items } = usePagination({
    count: 100,
    siblingCount: 0,
    defaultPage: 1,
    boundaryCount: 2,
    onChange: (e, page) => {
      setpage(page);
    },
  });

  return (
    <PaginationContainer direction='row' justifyContent='space-evenly'>
      {items.map(({ page, type, onClick, selected, disabled }) => {
        return (
          <PaginationItem
            padding='0.5rem'
            width='100%'
            direction='row'
            justifyContent='center'
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
          </PaginationItem>
        );
      })}
    </PaginationContainer>
  );
};
export default Pagination;
