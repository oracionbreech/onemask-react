import { Grid, Typography } from "@mui/material";
import React from "react";
import Statistics from "./Statistics";

const Attributes: React.FC<{ attributes?: [] }> = () => {
  const attributes = [
    {
      name: "APE",
      value: 2,
      maxRange: 3,
    },
    {
      name: "HEAD",
      value: 2,
      maxRange: 3,
    },
    {
      name: "EYES",
      value: 2,
      maxRange: 2,
    },
    {
      name: "MOUTH",
      value: 2,
      maxRange: 2,
    },
    {
      name: "BODY",
      value: 2,
      maxRange: 4,
    },
  ];

  return (
    <>
      {attributes.map((attribute) => {
        return (
          <Grid key={attribute.name} container spacing={2} alignItems='center'>
            <Grid item md={3} lg={3} xs={3} xl={3} sm={3}>
              <Typography
                textAlign='start'
                gutterBottom
                variant='caption'
                fontWeight='bold'
                component='div'
                sx={{
                  textTransform: "uppercase",
                }}
              >
                {attribute.name}
              </Typography>
            </Grid>
            <Grid item md={9} lg={9} xs={9} xl={9} sm={9} mb={1}>
              <Statistics
                maxRange={attribute.maxRange}
                range={attribute.value}
              />
            </Grid>
          </Grid>
        );
      })}
    </>
  );
};

export default Attributes;
