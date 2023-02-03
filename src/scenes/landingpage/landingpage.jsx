import "../stylescenes.css"
import Navbar from "../navbar/navbar";
import FlexBetween from "../../components/Flexbetween";
import FlexBetweenLeft from "../../components/FlexbetweenLeft";
import { useNavigate } from "react-router-dom";
import { Box,IconButton,  Typography,  useTheme,  useMediaQuery, } from "@mui/material";
import { useState } from "react";
import Des from "../des/des"
import studs from "../3studs.png"
import SearchBar from "../searchBar/searchbar";

const LandingPage = ()=>{
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
    return(
        <div>
            
                <Navbar page="Landing"/>
                <FlexBetween sx={{
                    "justify-content":"space-between",
                    p:"2rem 10%",
                    
                    flexDirection:isNonMobileScreens?"row":"column-reverse"
                }}>
                    <FlexBetweenLeft flexDirection="column">
                        <Typography 
                        fontStyle="bold"
                        fontWeight={isNonMobileScreens?"800":"800"}
                        fontSize={isNonMobileScreens?"9rem":"5rem"}
                        color={white}
                        maxWidth="1000px"
                        sx={{
                            "line-height": "100%",
                            
                        }}
                        >
                            COLLEGE<br/>
                            NOTES
                        </Typography>
                        <Typography 
                        fontStyle="bold"
                        fontWeight={isNonMobileScreens?"400":"400"}
                        fontSize={isNonMobileScreens?"2rem":"1rem"}
                        color={white}
                        >
                           EASILY FIND AND SHARE NOTES 
                            
                        </Typography>
                        <Typography 
                        fontStyle="bold"
                        fontWeight={isNonMobileScreens?"200":"200"}
                        fontSize={isNonMobileScreens?"2rem":"1rem"}
                        color={white}
                        >
                          WITH YOUR PEERS
                            
                        </Typography>
                        <Box>
                        <SearchBar embdDetail=""/>
                        </Box>
                    </FlexBetweenLeft>
                    <Box  >
                        {/*isNonMobileScreens?(<Des/>):(
                            <Box  m="0 0 1rem 3rem">
                            <img width="70%" src={studs}/>
                            </Box>
                        )*/}
                        <Des/>
                        
                    </Box>
                </FlexBetween>

        </div>
    )
}
export default LandingPage;