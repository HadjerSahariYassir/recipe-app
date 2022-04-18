import React, { useEffect, useState } from "react";
import styled from "styled-components";
import axios from "axios";

import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link } from "react-router-dom";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Button , IconButton, Input, InputAdornment } from "@material-ui/core";
//import {SearchIcon} from '@material-ui/icons';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';


const useStyles = makeStyles((theme) => ({
    root: {
      padding: '2px 4px',
      display: 'flex',
      alignItems: 'center',
      width: 400,
    },
    input: {
      marginLeft: theme.spacing(1),
      flex: 1,
    },
    iconButton: {
      padding: 10,
    },
    divider: {
      height: 28,
      margin: 4,
    },
  }));
 

const Container = styled.div`
    background-color: ${props => props.theme.pageBackground};
    //width: auto;
    //height: 100vh;
`;

const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;


const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
`;

//search
const CategoriesTitle = styled.div` 
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100px;
   margin:  20px;
   background: 1px solid red;
   font-size: 26px;
   color: ${props => props.theme.tagLineColor};
`; 





const RecipeListContainer = styled.div` 
    display: flex;
    flex-direction: row; 
    flex-wrap: wrap;
    justify-content: space-evenly;
    padding: 30px;
    gap: 20px;
`;

const RecipeContainer = styled.div` 
    display: flex;
    flex-direction: column;
    width: 300px;
    padding: 10px;
    //box-shadow: 0 3px 10px 0 #aaa;
`;

const CoverImage = styled.img`
    height: 200px;
`
const RecipeName = styled.span` 
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.tagLineColor};
    margin: 10px 0px;
`;
const CategoryText = styled.span` 
    font-size: 18px;
    font-weight: solid 1px green;
    display: flex;
    justify-content: center;
    color: ${props => props.theme.tagLineColor};
    margin: 10px 0px;
    cursor: pointer;
   
`;
const SeeMoreText = styled.span` 
    font-size: 18px;
    font-weight: bold;
    color: ${props => props.theme.tagLineColor};
    margin: 10px 0px;
    cursor: pointer;
`;
const Categories = (props) => {
    console.log("props.data=",props.data);
    
   const classes = useStyles();
     return(
        <Container>
          
         
            <CategoriesTitle>
                 Categories
            </CategoriesTitle>
            <RecipeListContainer>
                {props.data?.map((row, index)=> (
                <RecipeContainer  key={index}>
                       
                         <CoverImage src={`${row.image}`} alt="image x" />
        
                             <Link to={`/categories/${row.category}`} style={{textDecoration: "none"}} >  <CategoryText >{row.category}</CategoryText></Link>
                        
                    
                    </RecipeContainer>
                ))
            }
            </RecipeListContainer>
         
        </Container>
    )
}

export default Categories;