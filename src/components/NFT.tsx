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
import { currencyIcon } from "../assets/remoteImages";
import { useMetadata } from "../hooks/metadata";
import Attributes from "./Attributes";

const NFT: React.FC<{ id?: number }> = ({ id }) => {
  const { nft, loading } = useMetadata(Number(id));

  const topBid = (
    <Typography
      textAlign='start'
      gutterBottom
      variant='subtitle1'
      component='div'
    >
      Top Bid <img src={currencyIcon} alt='currency-icon' width={15} />{" "}
      {Math.floor(Math.random() * 24).toFixed(2)}
    </Typography>
  );

  const notListed = (
    <Typography
      textAlign='start'
      gutterBottom
      variant='subtitle1'
      component='div'
    >
      Not Listed
    </Typography>
  );

  const price = (
    <Typography
      textAlign='start'
      gutterBottom
      variant='subtitle1'
      component='div'
    >
      Price <img src={currencyIcon} alt='currency-icon' width={15} />{" "}
      {Math.floor(Math.random() * 1000).toFixed(2)}
    </Typography>
  );

  const NFTContent = (
    <Card
      sx={{
        minHeight: 560,
      }}
    >
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
          <img
            src={`/banana-${Math.floor(Math.random() * (5 - 1) + 1)}.png`}
            alt='banana'
          />
        </Stack>
        <Attributes />
        <Stack direction='row' justifyContent='space-between' mt={2}>
          {Number(id) % 2 === 0 ? price : notListed}
          <Stack direction='row' justifyContent='space-between'>
            <Typography gutterBottom variant='subtitle1' component='div'>
              Last <img src={currencyIcon} alt='currency-icon' width={15} />{" "}
              {Math.random().toFixed(2)}
            </Typography>
          </Stack>
        </Stack>
        <Stack direction='row' justifyContent='space-between'>
          {Number(id) % 2 === 0 && topBid}
        </Stack>
      </CardContent>
    </Card>
  );

  const Loading = (
    <Skeleton variant='rectangular' animation='pulse' height={200} />
  );

  return nft && !loading ? NFTContent : Loading;
};

export default NFT;
