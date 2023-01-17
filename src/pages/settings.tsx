import "@fontsource/public-sans";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import "./mystyles.css";
import { Sheet, Typography } from "@mui/joy";
//import { HomeRounded, MenuBookRounded } from "@mui/icons-material";

/*function ModeToggle() {
  const { mode, setMode } = useColorScheme();
  const [mounted, setMounted] = React.useState(false);

  // necessary for server-side rendering
  // because mode is undefined on the server
  React.useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) {
    return null;
  }
  return (
    <div
      className="lolz"
      onLoad={() => {
        setMode(mode);
      }}
    ></div>
  );
}*/

function SettingsPage() {
  return (
    <CssVarsProvider>
      <Sheet
        sx={{
          mx: 2, // margin left & right
            my: 3, // margin top & botom
            py: 1, // padding top & bottom
            px: 1, // padding left & right
            display: "flex",
            flexDirection: "column",
            gap: 2,
            borderRadius: "sm",
        }}
        variant="outlined"
      >
        <div>
          <Typography level="h5" component="h1">
            <b>Profile</b>
          </Typography>
        </div>
      </Sheet>
    </CssVarsProvider>
  );
}

export default SettingsPage;
