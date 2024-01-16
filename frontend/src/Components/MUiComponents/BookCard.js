import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { CardActionArea, CardActions } from "@mui/material";
import Grid from "@mui/material/Grid";
import { IconAvatars, AddIcon } from "./Avtar";
import CustomizedDialogs from "./../MUiComponents/BookAdd";

export default function MultiActionAreaCard(props) {
  return (
    <Card>
      <CardActionArea>
        <CardContent>
          <Grid container>
            <Grid xs={2} item>
              <IconAvatars />
            </Grid>
            <Grid item xs={8}>
              <Typography gutterBottom variant="h5" component="div">
                {props.title}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna al
              </Typography>
            </Grid>
            <Grid xs={1} item>
              <CustomizedDialogs setNewAddition={props.setNewAddition} />
            </Grid>
          </Grid>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}
