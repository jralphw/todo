import "@fontsource/public-sans";
import * as React from "react";
import { CssVarsProvider, useColorScheme } from "@mui/joy/styles";
import "./mystyles.css";
import { Box, Card, FormControl, FormLabel, Sheet, Switch, Typography } from "@mui/joy";

/*function ModeToggle() {
  const { mode, setMode } = useColorScheme() as any;
  //const [mounted, setMounted] = React.useState(false);

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
}
*/

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
              <b>Settings</b>
            </Typography>
          </div>
          <Card
            variant="outlined"
            sx={{
              //width: 320,
              gap: 2,
              "&:hover": {
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}>
            <ModeSwitch />
          </Card>
        </Sheet>
      </CssVarsProvider>
  );
}

function ModeSwitch() {
  const [checked, setChecked] = React.useState(false);
  const { setMode } = useColorScheme();
  return (
    <FormControl
      orientation="horizontal"
      sx={{ width: 300, justifyContent: 'space-between' }}
    >
      <Box>
        <FormLabel>Dark mode</FormLabel>
      </Box>
      <Switch
        checked={checked}
        onChange={(event) => {
          setChecked(event.target.checked);
          setMode(checked === true? 'light' : 'dark')
        }}
        color={checked ? 'success' : 'neutral'}
        variant="outlined"
        endDecorator={checked ? 'On' : 'Off'}
        slotProps={{
          endDecorator: {
            sx: {
              minWidth: 24,
            },
          },
        }}
      />
    </FormControl>
  );
}

export default SettingsPage;
