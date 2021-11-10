import { Grid, LinearProgress } from "@mui/material";
import React from "react";

const Statistics: React.FC = () => {
  return (
    <Grid container spacing={1} width='200px'>
      {[1, 2, 3].map(() => (
        <Grid item md={3}>
          <LinearProgress
            variant='determinate'
            color='secondary'
            value={100}
            style={{
              borderRadius: "1rem",
            }}
          />
        </Grid>
      ))}
    </Grid>
  );
};

export default Statistics;
