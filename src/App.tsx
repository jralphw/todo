import "@fontsource/public-sans";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import "./App.css";
import { Tabs, Tab, TabList, ListItemDecorator, tabClasses } from "@mui/joy";
import { HomeRounded, MenuBookRounded, SettingsRounded } from "@mui/icons-material";
import MainPage from "./pages/home";
import SettingsPage from "./pages/settings";
import HistoryPage from "./pages/history";

function App() {
  const [index, setIndex] = React.useState(1);
  return (
    <CssVarsProvider>
      <div className="content-main">
        { index === 1 ? <MainPage></MainPage> : (index === 0 ? <HistoryPage></HistoryPage>: <SettingsPage></SettingsPage>) }
      </div>
       <div className="navbar">
        <Tabs
          size="md"
          aria-label="Bottom Navigation"
          value={index}
          // @ts-ignore
          onChange={(event, value) => setIndex(value)}
          sx={(theme) => ({
            borderRadius: "md",
            width: "100%",
            mx: "5px",
            marginBottom: "5px",
            boxShadow: theme.shadow.sm,
            "--Tabs-gap": "5px",
            [`& .${tabClasses.root}`]: {
              boxShadow: "none",
              borderRadius: "lg",
              whiteSpace: "nowrap",
              transition: "0.3s",
              fontWeight: "lg",
              flex: 1,
              [`&:not(.${tabClasses.selected}):not(:hover)`]: {
                opacity: 0.72,
              },
            },
          })}
        >
          <TabList variant="soft" sx={{ "--List-decorator-size": "28px" }}>
            <Tab
              orientation="vertical"
              {...(index === 0 && { variant: "solid", color: "primary" })}
            >
              <ListItemDecorator>
                <MenuBookRounded />
              </ListItemDecorator>
              History
            </Tab>
            <Tab
              orientation="vertical"
              {...(index === 1 && { variant: "solid", color: "primary" })}
            >
              <ListItemDecorator>
                <HomeRounded />
              </ListItemDecorator>
              Home
            </Tab>
            <Tab
              orientation="vertical"
              {...(index === 2 && { variant: "solid", color: "primary" })}
            >
              <ListItemDecorator>
                <SettingsRounded/>
              </ListItemDecorator>
              Settings
            </Tab>
          </TabList>
        </Tabs>
      </div>
    </CssVarsProvider>
  );
}

export default App;
