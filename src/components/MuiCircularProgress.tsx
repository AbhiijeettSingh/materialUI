import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

export default function CircularIndeterminateAndDeterminate() {
  return (
    <Box sx={{ display: 'flex' }}>
      <CircularProgress />
      <CircularProgress variant="determinate" value={25} />
      <CircularProgress color='secondary' variant="determinate" value={50} />
      <CircularProgress variant="determinate" value={75} />
      <CircularProgress variant="determinate" value={100} />
    </Box>
  );
}