import "@fontsource/public-sans";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import "./Root.css";
import { Tabs, Tab, TabList, ListItemDecorator, tabClasses } from "@mui/joy";
import { HomeRounded, MenuBookRounded, SettingsRounded } from "@mui/icons-material";
import { Outlet, useNavigate } from "react-router-dom";


function Root() {
  
  return (
    <CssVarsProvider>
      <Outlet />
      <NavBar />
    </CssVarsProvider>
  );
}

function NavBar() {
  const [index, setIndex] = React.useState(1);
  const navigate = useNavigate();
  return (
    <div className="navbar">
    <Tabs
      size="md"
      aria-label="Bottom Navigation"
      value={index}
      onChange={(event, value) => {
        setIndex(value as number);
        if (value === 0) {
          navigate("/history");
        }
        else if (value === 1) {
          navigate("/");
        }
        else if (value === 2) {
          navigate("/settings");
        }
        else {
          console.log("error");
        }
      }}
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
            <SettingsRounded />
          </ListItemDecorator>
          Settings
        </Tab>
      </TabList>
    </Tabs>
  </div>);
}
export default Root;
/*
<div className="content-main">
        { index === 1 ? <MainPage></MainPage> : (index === 0 ? <HistoryPage></HistoryPage>: <SettingsPage></SettingsPage>) }
      </div>
*/