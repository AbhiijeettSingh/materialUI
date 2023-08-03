// import MuiTypography  from "./components/MuiTypography"
// import MuiButton from "./components/MuiButton"
// import SimpleBackdrop from "./components/MuiBackdrop"
import BasicAccordion from "./components/MuiAccordian"
import { ControlledAccordions } from "./components/MuiAccordian"
import BasicAlerts from "./components/MuiAllert"
import ResponsiveAppBar from "./components/MuiAppBar"
import { BottomAppBar } from "./components/MuiAppBar"
function App() {


  return (
    <>
    <ResponsiveAppBar/>
      {/* <MuiTypography/> */}
      {/* <MuiButton/> */}
      {/* <SimpleBackdrop/> */}
      <BasicAccordion/>
      <ControlledAccordions/>
      <BasicAlerts/>
      <BottomAppBar/>
      
    </>
  )
}

export default App
