import './App.css';
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { useMemo } from "react";
import {CssBaseline,ThemeProvider} from "@mui/material"
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme.js";
import LandingPage from './scenes/landingpage/landingpage';
import 'bootstrap/dist/css/bootstrap.min.css';
import background from "./scenes/web.png";
import SearchPage from "./scenes/seacrchPage/SearchPage"

function App() {
  const theme = useMemo(()=>createTheme(themeSettings()),[])

  return (
    <div className='app' style = {{backgroundImage:`url(${background})`,minHeight:"100vh","background-repeat": "no-repeat, repeat","background-color":" #cccccc","background-size": "cover" }}>
      <BrowserRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline/>
        <Routes>
          <Route path ="/" element={<LandingPage/>}/>
          <Route path ="/search" element={<SearchPage />}/>
        </Routes>
      </ThemeProvider>
      </BrowserRouter>

    </div>
  );
}

export default App;
