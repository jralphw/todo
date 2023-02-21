import './App.css';
import { Typography, Box, IconButton, Button } from '@mui/joy';
import "@fontsource/material-icons-rounded";

function App() {
  return (
    <Box className='title-bar' sx={{
      bgcolor: 'background.body',
      mx: 2,
      mt: 3,
      borderColor: 'background.body',
      display: 'flex',
    }}>
      <Typography level="h3" sx={{ ml: 1 }}>
        <b>To Do</b>
      </Typography>
      <Button
        variant="soft"
        size="sm"
        color="primary"
        sx={{ ml: 'auto' }}
      >
        History
      </Button>
      <Button variant="plain" color="neutral" size="sm" sx={{ ml: 0, mr: 1 }}>
        <span className='material-icons-rounded'>settings</span>
      </Button>
    </Box>
  );
}

export default App;
