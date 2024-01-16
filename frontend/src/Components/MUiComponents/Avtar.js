import * as React from "react";
//import { Avatar } from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import { green, pink, deepOrange } from "@mui/material/colors";
import AssignmentIcon from "@mui/icons-material/Assignment";
import NoteAddIcon from "@mui/icons-material/NoteAdd";
export function LetterAvatars(props) {
  return (
    <Stack direction="row" spacing={2}>
      {/*  <Avatar>H</Avatar>
      <Avatar sx={{ bgcolor: deepOrange[500] }}>{props.Letter}</Avatar> */}
    </Stack>
  );
}
export function IconAvatars() {
  return <AssignmentIcon />;
}
export function AddIcon() {
  return <NoteAddIcon />;
}
