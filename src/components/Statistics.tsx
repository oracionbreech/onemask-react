import { Grid, LinearProgress } from "@mui/material";
import React from "react";

const Statistics: React.FC<{
  maxRange?: number;
  range?: number;
}> = ({ maxRange = 0, range = 0 }) => {
  return (
    <Grid container spacing={1} width='400px'>
      {Array.from(Array(maxRange).keys()).map((_, index) => {
        const getValue = index + 1 <= range ? 100 : 0;

        return (
          <Grid item md={12 / maxRange}>
            <LinearProgress
              variant='determinate'
              value={getValue}
              color='error'
              style={{
                borderRadius: "1rem",
              }}
            />
          </Grid>
        );
      })}
    </Grid>
  );
};

export default Statistics;
