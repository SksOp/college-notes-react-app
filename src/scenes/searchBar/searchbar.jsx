import { Search } from "@mui/icons-material"
import { useState } from "react"
import { serverUrl } from "../../server";
import{
    Box,
    Button,
    TextField,
    useMediaQuery,
    Typography,
    useTheme
} from "@mui/material"
import {Formik} from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/Flexbetween";
import { unsetResult,setResult } from "../../state";
import { useDispatch } from "react-redux";






const SearchBar = ({embdDetail}) =>{

    const searchSchema = yup.object().shape({
        keyword: yup.string(),
    })
    
    const initialvalue = {
        keyword:embdDetail
    }
    
    const navigate = useNavigate();
    const theme = useTheme();
    const dispatch = useDispatch();
   
    const orange = theme.palette.orange;
    const dark = theme.palette.dark;
    const white = theme.palette.white;
    const whiteLessOpacity = theme.palette.whiteLessOpacity
    const lightBlue = theme.palette.lightBlue;
    
    
    const search =async (values, onSubmitProps)=>{
        
        const keyword=values.keyword;
        dispatch(unsetResult());
        
        const getResult = async()=>{
        
            const searchResponse = await fetch (serverUrl.server+"college-notes-react-app/search/"+keyword,{
                    method:"GET",
                })
            const result = await searchResponse.json();
            console.log(result);
            if(result){
                dispatch(setResult({response:result}));
            }
        }
        const setingResult = await getResult();
        navigate("/search",{state:{keyword:keyword}})
        
    }
    

    return(<>
        <Formik
        onSubmit={search}
        initialValues={initialvalue}
        validationSchema={searchSchema}
        
        >
            {({
                values,
                errors,
                touched,
                handleBlur,
                handleChange,
                handleSubmit,
                setFieldValue,
                resetForm,
            })=>( 
                <form onSubmit={handleSubmit} >
                    <TextField
                    
                        
                        sx={{
                            width:"70%",
                            m:"1rem 10px 0 0",
                            input: { color: white },
                            
                            "backgroundColor":whiteLessOpacity,
                            
                        }}
                        label="Search by Sub-Code/Name "
                        onBlur={handleBlur}
                        onChange={handleChange}
                        value={values.keyword}
                        name="keyword"
                        error={Boolean(touched.keyword) && Boolean(errors.keyword)}
                        helperText={touched.keyword && errors.keyword}
                        
                    />
                    <Button 
                            
                            type="submit"  
                            sx={{
                                width:"25%",
                                m: "1rem 0",
                                p:"1rem 2rem",
                                backgroundColor:orange,
                                color: white,
                                "&:hover":{color:white}
                            }} 
                        > 
                        <Search/>
                            Search
                    </Button>
                </form>

            )}
        </Formik>
        </>
    )
}

export default SearchBar;