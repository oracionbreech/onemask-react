import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Stack,
  Typography,
} from "@mui/material";
import { get } from "lodash";
import React from "react";
import { useMetadata } from "../hooks/metadata";
import Attributes from "./Attributes";

const NFT: React.FC<{ id?: number }> = ({ id }) => {
  const { nft, loading } = useMetadata(Number(id));

  const NFTContent = (
    <Card>
      <CardMedia
        sx={{
          minHeight: 233,
        }}
        component='img'
        image={get(nft, "image", "#")}
        alt={get(nft, "name", "#")}
      />

      <CardContent>
        <Stack direction='row' justifyContent='space-between'>
          <Typography
            textAlign='start'
            gutterBottom
            variant='h5'
            fontWeight='bold'
            component='div'
            letterSpacing={2.5}
          >
            APE #{get(nft, "id", "#")}
          </Typography>
          <Typography
            textAlign='start'
            gutterBottom
            variant='h5'
            fontWeight='bold'
            component='div'
          >
            Banana
          </Typography>
        </Stack>
        <Attributes />
      </CardContent>
    </Card>
  );

  const Loading = (
    <Skeleton variant='rectangular' animation='pulse' height={200} />
  );

  return nft && !loading ? NFTContent : Loading;
};

export default NFT;
