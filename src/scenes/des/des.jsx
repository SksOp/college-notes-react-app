import FlexBetween from "../../components/Flexbetween";
import FlexBetweenLeft from "../../components/FlexbetweenLeft";
import { Box,IconButton,  Typography,  useTheme,  useMediaQuery, } from "@mui/material";
import notes from "./notes.png"
import pen from "./pen.png"
import studs from "../3studs.png"

const Des = ()=>{
return(

   <div className="des-cont" >
    <img src={notes}  className="hidden" width="100%"/>
    <img src={notes}  className="notes" width="100%"/>
    <img src={pen} width="50%" className="pen"/>
    <img src={studs}width="50%" className="studs" />
   </div>
)
}

export default Des;