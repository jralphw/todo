import "@fontsource/public-sans";
import * as React from "react";
import { CssVarsProvider } from "@mui/joy/styles";
import "./mystyles.css";
import {
  Sheet,
  Typography,
  Button,
  CircularProgress,
  Chip,
  Link,
  Card,
  LinearProgress,
} from "@mui/joy";
import {
  KeyboardArrowRight,
  CheckCircleOutlineRounded,
  AddRounded,
} from "@mui/icons-material";

function MainPage() {
  let currentProg = Math.random();
  currentProg = currentProg * 100;
  return (
    <CssVarsProvider>
      <main>
        <Sheet
          sx={{
            //width: 300,
            mx: 2, // margin left & right
            my: 3, // margin top & botom
            py: 1, // padding top & bottom
            px: 1, // padding left & right
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
              <b>Summary</b>
            </Typography>
          </div>
          <Button
            variant="soft"
            size="lg"
            endDecorator={<KeyboardArrowRight />}
            startDecorator={
              <CircularProgress determinate value={currentProg} color="primary" />
            }
            color="primary"
          >
            Current task
          </Button>
          <Button
            variant="soft"
            size="lg"
            endDecorator={<KeyboardArrowRight />}
            startDecorator={<CheckCircleOutlineRounded />}
            color="success"
          >
            Completed task
          </Button>
        </Sheet>
        <Sheet
          sx={{
            //width: 300,
            mx: 2, // margin left & right
            my: 3, // margin top & botom
            py: 1, // padding top & bottom
            px: 1, // padding left & right
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
              <b>Tasks</b>
            </Typography>
          </div>
          <Button
            variant="outlined"
            size="lg"
            endDecorator={<KeyboardArrowRight />}
            startDecorator={<AddRounded />}
            color="primary"
          >
            Add Task
          </Button>
          <Card
            variant="outlined"
            sx={{
              //width: 320,
              gap: 2,
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <div>
              <Typography
                level="h2"
                fontSize="lg"
                id="card-description"
                mb={0.5}
              >
                Groceries Shopping
              </Typography>
              <Typography
                fontSize="sm"
                aria-describedby="card-description"
                mb={1}
              >
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary" }}
                >
                  Loresm Ipsum sit dolor amet
                </Link>
              </Typography>
              <div>
                <LinearProgress determinate value={currentProg} />
                <Chip variant="soft" color="info" size="sm">
                  1 Item left
                </Chip>
              </div>
            </div>
          </Card>
          <Card
            variant="soft"
            color="danger"
            sx={{
              //width: 320,
              gap: 2,
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <div>
              <Typography
                level="h2"
                fontSize="lg"
                id="card-description"
                mb={0.5}
              >
                Duolingo lesson
              </Typography>
              <Typography
                fontSize="sm"
                aria-describedby="card-description"
                mb={1}
              >
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary" }}
                >
                  Loresm Ipsum sit dolor amet
                </Link>
              </Typography>
              <div>
                <Chip variant="soft" color="danger" size="sm">
                  30 minutes late !
                </Chip>
              </div>
            </div>
          </Card>
          <Card
            variant="soft"
            color="warning"
            sx={{
              //width: 320,
              gap: 2,
              "&:hover": {
                boxShadow: "md",
                borderColor: "neutral.outlinedHoverBorder",
              },
            }}
          >
            <div>
              <Typography
                level="h2"
                fontSize="lg"
                id="card-description"
                mb={0.5}
              >
                Collect Petitions
              </Typography>
              <Typography
                fontSize="sm"
                aria-describedby="card-description"
                mb={1}
              >
                <Link
                  overlay
                  underline="none"
                  href="#interactive-card"
                  sx={{ color: "text.tertiary" }}
                >
                  Loresm Ipsum sit dolor amet
                </Link>
              </Typography>
              <div>
              <LinearProgress determinate value={94} />
              <Chip variant="soft" color="success" size="sm">
                  Only 6 left!
                </Chip>
                <Chip variant="soft" color="warning" size="sm">
                  Due tomorrow
                </Chip>
              </div>
            </div>
          </Card>
        </Sheet>
      </main>
    </CssVarsProvider>
  );
}

export default MainPage;
