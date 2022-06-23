import './App.css';
import { useEffect, useState } from 'react';
import { Button , Alert} from '@mui/material';
import { ThemeProvider , createTheme } from '@mui/material/styles'

function App() {

  const [alertState,setAlertState] = useState(false); // Remove This

  useEffect(()=>{
    setTimeout(()=>{
      setAlertState(false)
    },5000);
  },[alertState]); // Remove This

  const THEME = createTheme({
    typography: {
     "fontFamily": `monospace`,
     "fontSize": 16,
     "fontWeightLight": 500,
     "fontWeightRegular": 600,
     "fontWeightMedium": 700
    }
 });

  return (

    //Work here


    // Remove This
    <ThemeProvider theme={THEME}>
      <div style={{margin:'0 auto'}}>
        <h1 style={{color : '#003487'}}>Hello, Team Placement Valley 🤖 </h1>
        
        <Button variant='contained' style={{background : '#003487'}} onClick={()=>{setAlertState(!alertState)}}>Feel Lucky</Button>
        {alertState && <Alert severity="success" style={{position:'absolute',top:'80%',left:'50%',transform:'translateX(-50%)'}}>Hurray! Take some motivation 👺</Alert>}
        
      </div>
    </ThemeProvider>
    
    
    );
}

export default App;
