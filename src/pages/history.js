import "@fontsource/public-sans";
import * as React from "react";
import {
  CssVarsProvider,
} from "@mui/joy/styles";
import "./mystyles.css";
import {
  Sheet,
  Typography,
} from "@mui/joy";
//import { HomeRounded, MenuBookRounded } from "@mui/icons-material";


function HistoryPage() {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          width: 300,
          mx: "auto", // margin left & right
          my: 4, // margin top & botom
          py: 3, // padding top & bottom
          px: 2, // padding left & right
          display: "flex",
          flexDirection: "column",
          gap: 2,
          borderRadius: "sm",
          boxShadow: "md",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h5" component="h1">
            <b>History</b>
          </Typography>
        </div>
      </Sheet>
    </CssVarsProvider>
  );
}

export default HistoryPage;
