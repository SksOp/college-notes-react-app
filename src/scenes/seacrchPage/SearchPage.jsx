import Navbar from "../navbar/navbar";
import { useLocation } from "react-router-dom";
import SearchBar from "../searchBar/searchbar";
import { Box, Typography, useMediaQuery } from "@mui/material";
import {useTheme }from "@mui/material";
import FlexBetween from "../../components/Flexbetween";
import { serverUrl } from "../../server";
import { useSelector,useDispatch } from "react-redux";
import { setResult } from "../../state";
import { useEffect } from "react";
import ResWidget from "./ResWidget";

const SearchPage = ()=>{
    const {state} = useLocation();
    const {keyword} = state==null?"":state;
    const dispatch = useDispatch();
   

    const isNonMobileScreens = useMediaQuery("(min-width:1000px)");
   
    const theme = useTheme();
    const orange = theme.palette.orange;
    const dark = theme.palette.dark;
    const lightBlue = theme.palette.lightBlue;
    const white = theme.palette.white;
    const black = theme.palette.black;
    const blackLessOpacity = theme.palette.blackLessOpacity
    const whiteLessOpacity = theme.palette.whiteLessOpacity
    
    const currResult = useSelector((state)=>state.response);

    // const getResult = async()=>{
        
    //     const searchResponse = await fetch (serverUrl.server+"/search/"+keyword,{
    //             method:"GET",
    //         })
    //     const result = await searchResponse.json();
    //     console.log(result);
    //     if(result){
    //         dispatch(setResult({response:result}));
    //     }
    // }
    // useEffect(()=>{
    //     if(keyword){
    //         getResult();
    //     }
    // },[]) // eslint-disable-line react-hooks/exhaustive-deps

    
    // currResult.map((res)=>console.log(res.name))

    return(
        <>
        
        <Navbar page="Search"/>
        <Box p={isNonMobileScreens?"0 30% 0 33%":"0 10% 0 13%"}>
        <SearchBar embdDetail={keyword}/>
        
        </Box>
        <FlexBetween m={"0% 5%"} p={"5% 5%"} flexDirection={`column`} sx={{
            
            justifyContent:"flex-start",
            "background-color":whiteLessOpacity,
        }} >
            {currResult && currResult.map(({
                name,url,subCode,department,createdAt
            })=>(<ResWidget name={name} url={url} subCode={subCode} department={department} createdAt={createdAt}/>))
            } 
              
        </FlexBetween>
        <Box sx={{
            textAlign:"center",
            backgroundColor:orange,
            position:"fixed",
            bottom:0,
            width:"100%",
            color:black
        }}>
             
            <Typography>
                Happy Searching !!
            </Typography>
        </Box>
        </>
    )
}
export default SearchPage;
