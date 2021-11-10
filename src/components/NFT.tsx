import {
  Card,
  CardContent,
  CardMedia,
  Skeleton,
  Typography,
} from "@mui/material";
import { get } from "lodash";
import React from "react";
import { useMetadata } from "../hooks/metadata";

const NFT: React.FC<{ id?: number }> = ({ id }) => {
  const { nft, loading } = useMetadata(Number(id));

  const NFTContent = (
    <Card>
      <CardMedia
        component='img'
        height='240'
        image={get(nft, "image", "#")}
        alt={get(nft, "name", "#")}
      />
      <CardContent>
        <Typography gutterBottom variant='h5' component='div'>
          APE # {get(nft, "id", "#")}
        </Typography>
        <Typography variant='body2' color='text.secondary'>
          Lizards are a widespread group of squamate reptiles, with over 6,000
          species, ranging across all continents except Antarctica
        </Typography>
      </CardContent>
    </Card>
  );

  const Loading = <Skeleton variant='rectangular' height={200} />;

  return nft && !loading ? NFTContent : Loading;
};

export default NFT;
