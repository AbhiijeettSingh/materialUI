// import MuiTypography  from "./components/MuiTypography"
// import MuiButton from "./components/MuiButton"
// import SimpleBackdrop from "./components/MuiBackdrop"
// import BasicAccordion from "./components/MuiAccordian"
// import { ControlledAccordions } from "./components/MuiAccordian"
// import BasicAlerts from "./components/MuiAllert"
// import ResponsiveAppBar from "./components/MuiAppBar"
// import { BottomAppBar } from "./components/MuiAppBar"
// import BasicTextFields from "./components/MuiTextfield";
// import { SelectTextFields } from "./components/MuiTextfield";
// import InputAdornments from "./components/MuiInputAddornments";
// import SimpleBottomNavigation from "./components/MuiBottomNavigation";
// import CircularIndeterminate from "./components/MuiCircularProgress";
import SimpleDialogDemo from './components/MuiDialog';
import Container from '@mui/material/Container';
// import { Box } from '@mui/material';


function App() {
  return (
    <>
      {/* <ResponsiveAppBar/> */}
      {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
      {/* <SimpleBackdrop/> */}
      {/* <BasicAccordion/>
      <ControlledAccordions/>
      <BasicAlerts/>
      <BottomAppBar/> */}
      {/* <BasicTextFields />
      <SelectTextFields /> */}
      {/* <InputAdornments/> */}
      {/* <SimpleBottomNavigation/> */}
      
      <Container maxWidth="lg">
        {/* <Box sx={{ bgcolor: '#cfe8fc', height: '100vh' }} /> */}
        <SimpleDialogDemo/>
      </Container>
    </>
  );
}

export default App;
