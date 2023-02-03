import {  Box,  IconButton,  Typography,  useTheme,  useMediaQuery } from "@mui/material";
import { Menu,Close } from "@mui/icons-material"
import logo from "../../collegeNotes.png";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/Flexbetween.jsx";
import { fontSize } from "@mui/system";





const Navbar = ({page})=>{

    const [isMobileMenuToggled,setIsMobileMenuToggled ] = useState(false);
    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    
    const navigate = useNavigate();

    const theme = useTheme();
    const orange = theme.palette.orange;
    const dark = theme.palette.dark;
    const lightBlue = theme.palette.lightBlue;
    const white = theme.palette.white;
    const black = theme.palette.black;
    const blackLessOpacity = theme.palette.blackLessOpacity
    const whiteLessOpacity = theme.palette.whiteLessOpacity


    
 //   <button class="navbar-toggler" type="button">
//    <span class="navbar-toggler-icon"></span>
//    </button> 

    return(
        <>
            <FlexBetween 
                padding=" 1rem 0 "
                sx={{
                    "background-color":blackLessOpacity,
                    
                    
                    "color":"white",
                    "justify-content":"space-between"
                    
                }}>
                <FlexBetween 
                 padding=" 0rem 2% "
                >
                    <img className="handpointer" src={logo} height="40 px"  onClick={()=>navigate("/")}/>
                    <Typography className="handpointer" onClick={()=>navigate("/college-notes-react-app/")}
                    padding="0.5rem"
                    fontSize="1.3rem"
                    sx={{
                        "letter-spacing":"5px", 
                    }}
                    >
                        College Notes
                    </Typography>
                </FlexBetween>
                {/*Desktop navbar left comps */}
                {isNonMobileScreens?(
                    <FlexBetween>
                        <Typography onClick={()=>navigate("/college-notes-react-app/")} className={`NavItemPC `} sx={{
                            "font-weight":`${page==="Landing"?"600":"100"}`,
                            m:"0 1rem"
    
                            
                        }} >
                            Home
                        </Typography>
                        
                        <Typography onClick={()=>navigate("/college-notes-react-app/search")} className="NavItemPC"
                        sx={{
                            "font-weight":`${page==="Search"?"500":"100"}`,
                            m:"0 1rem"


                        }}
                        >
                            Search Now
                        </Typography>
                        
                        <Typography onClick={()=>navigate("/college-notes-react-app/contribute")} className="NavItemPC"
                        sx={{
                            "font-weight":`${page==="Contribute"?"500":"100"}`,
                            m:"0 1rem"
                        }}
                        >
                            Contribute Notes
                        </Typography>
                    </FlexBetween>
                ):(
                    <IconButton onClick={()=>setIsMobileMenuToggled(!isMobileMenuToggled)}
                    >
                        <Menu sx={{
                            "color":white,
                            fontSize:"2rem",
                        }} />
                    </IconButton>
                )}
                {/*mob navbar menu */}
                {!isNonMobileScreens && isMobileMenuToggled && (
                    <Box
                    position="fixed"
                    right="0"
                    bottom="00"
                    height="100%"
                    zIndex="10"
                    maxWidth="500px"
                    minWidth="300px"
                    backgroundColor={blackLessOpacity}
                >
                    {/* close icon */}
                    <Box
                    display="flex"
                    justifyContent="flex-end"
                    p="1rem"
                    >
                        <IconButton sx={{
                            "color":white,
                            fontSize:"5rem",
                        }}
                         onClick={()=>setIsMobileMenuToggled(!isMobileMenuToggled)}>
                            <Close/>
                        </IconButton>
                    </Box>
                    {/* menu items */}
                    <FlexBetween  flexDirection="column" >
                        <Typography onClick={()=>navigate("/college-notes-react-app/")} className={`mobNavItem `} sx={{
                            "font-weight":`${page==="Landing"?"600":"300"}`,
                            m:"10% 1rem",
                            fontSize:"1.5rem"
                            
                        }} >
                            Home
                        </Typography>
                        <div className="br" ></div>
                        <Typography onClick={()=>navigate("/college-notes-react-app/search")} className="mobNavItem"
                        sx={{
                            "font-weight":`${page==="Search"?"500":"300"}`,
                            m:"10% 1rem",
                            fontSize:"1.5rem"

                        }}
                        >
                            Search Now
                        </Typography>
                        <div className="br" ></div>
                        <Typography onClick={()=>navigate("/college-notes-react-app/contribute")} className="mobNavItem"
                        sx={{
                            "font-weight":`${page==="Contribute"?"500":"300"}`,
                            m:"10% 1rem",
                            fontSize:"1.5rem"
                        }}
                        >
                            Contribute Notes
                        </Typography>
                    </FlexBetween>
                </Box>
                )}
                
            </FlexBetween>
        
        </>
           
    )
}
export default Navbar;