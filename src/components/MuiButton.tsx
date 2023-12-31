import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import IconButton from '@mui/material/IconButton';
import AlarmIcon from '@mui/icons-material/Alarm';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
export default function MuiButton() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="text">Text Button</Button>
      <Button variant="contained" disableElevation>
        Contained Button
      </Button>
      <Button variant="outlined">Outlined Button</Button>
      <Button variant="contained" href="https://google.com" disableElevation>
        Link
      </Button>
      <Button variant="contained" href="https://google.com" disabled>
        Link
      </Button>
      <Button variant="contained" href="https://google.com" color="primary">
        Primary
      </Button>
      <Button variant="contained" href="https://google.com" color="secondary">
        Secondary
      </Button>
      <Button variant="contained" href="https://google.com" color="success">
        success
      </Button>
      <Button variant="outlined" href="https://google.com" color="error">
        error
      </Button>
      <Button variant="outlined" startIcon={<DeleteIcon />}>
        Delete
      </Button>
      <Button variant="contained" endIcon={<SendIcon />}>
        Send
      </Button>
      <IconButton aria-label="delete">
        <DeleteIcon />
      </IconButton>
      <IconButton aria-label="delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" aria-label="add an alarm">
        <AlarmIcon />
      </IconButton>
      <IconButton color="primary" aria-label="add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
    </Stack>
  );
}
