import { FileDownload,LibraryBooks } from "@mui/icons-material"
import {  Box,  IconButton,  Typography,  useTheme,  useMediaQuery  } from "@mui/material"
import { useNavigate } from "react-router-dom"
import FlexBetween from "../../components/Flexbetween"
import FlexBetweenLeft from "../../components/FlexbetweenLeft"


const ResWidget = ({name,url,subCode,department,createdAt})=>{
    const theme = useTheme();
    const navigate = useNavigate();

    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
    const orange = theme.palette.orange;
    const dark = theme.palette.dark;
    const lightBlue = theme.palette.lightBlue;
    const white = theme.palette.white;
    const black = theme.palette.black;
    const blackLessOpacity = theme.palette.blackLessOpacity
    const whiteLessOpacity = theme.palette.whiteLessOpacity

    const handleClick = () => {
        window.location.replace(url);
      };
    return (
        <FlexBetween sx={{
            "background-color":whiteLessOpacity,
            "border-radius":"3px",
            m:"0 0 2% 0",
            minWidth:"70%",
            justifyContent:"space-between",
            "& svg":{
                "transition":"0.1s"
            },
            ":hover" :{
                "background-color":blackLessOpacity,
                
            },
            ":hover h1" :{
                "color":orange,
                
            },
            ":hover svg[data-testid*=\"LibraryBooksIcon\"] ":{
                color:orange,
                fontSize:"3.7rem",
            }
            
            
            
        }}>
            <Box>
                <IconButton  >
                    <LibraryBooks sx={{
                        color:white,
                        fontSize:"3.5rem",
                        flexBasis:"auto",
                        
                    }} />
                </IconButton>
            </Box>
            <FlexBetweenLeft flexDirection={"column"} sx={{
                        color:white,
                        flexBasis:"80%",
                        "& h1 ":{
                            m:"0px"
                        }
                    }}>
                <h1 >{name}</h1>
                <FlexBetweenLeft sx={{
                    justifyContent:"flex-start",
                    "& h6 ":{
                        p:"1% 3% ",
                        m:"1%",
                        borderRadius:"2px",
                        fontSize:".5rem",
                        backgroundColor:dark,
                        
                    }
                }}>
                    <h6>{subCode}</h6>
                    <h6>{department}</h6>
                    <h6>{createdAt.substring(0,10)}</h6>
                </FlexBetweenLeft>
            </FlexBetweenLeft>
            <Box>
                <IconButton onClick={handleClick} >
                            < FileDownload sx={{
                                color:white,
                                fontSize:"3rem",
                                flexBasis:"auto"
                            }} />
                </IconButton>
                
            </Box>
        </FlexBetween>
    )
}

export default ResWidget