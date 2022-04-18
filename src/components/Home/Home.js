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
const SearchHeaderContainer = styled.div` 
   display: flex;
   flex-direction: row;
   align-items: center;
   justify-content: center;
   width: 100%;
   height: 100px;
   margin:  20px;
   background: 1px solid red;
`; 



const SearchInput = styled.input`
  //border: none; 
  outline: none;
  font-size: 16px;
  padding: 10px;
  border-color: ${props => props.theme.tagLineColor};
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
    box-shadow: 0 3px 10px 0 #aaa;
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
const IngredientsText = styled.span` 
    font-size: 18px;
    font-weight: solid 1px green;
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
const Home = (props) => {
    const options = {
        method: 'GET',
        url: 'https://themealdb.p.rapidapi.com/filter.php',
        params: {i: 'chicken_breast'},
        headers: {
          'X-RapidAPI-Host': 'themealdb.p.rapidapi.com',
          'X-RapidAPI-Key': '103e17ebccmsh51f48f74a44c122p160ea2jsn815206475909'
        }
      };
   /* const [data, setData] = useState([{

    }]);
   const loadData =  async () => {
        try{
            const response = await axios.get("http://localhost:5000/recipes");
            setData(response.data);
            console.log("response.data",response.data);

        }catch(error){
            console.error(error);
        }
    }
    useEffect( () => {
       //loadData();
       
   });*/
  /* const url1 = "http://localhost:5000/recipes";
   const url2= "https://api.edamam.com/search?q=biryani&app_id=8d6bbf98&app_key=64628ce2ea888f35946b61b626653a8e";
   useEffect(() => {
    axios.get(url1
    ).then(res => {
        console.log("res data recipes",res.data);
        setData(res.data.reverse());
        console.log("data state",data);
    });
    
},[]);
    console.log("data is",data);*/
    console.log("props.data in home ",props.data);
    const handleSearchQuery = props.handleSearchQuery;
    const handleSearchChange = props.handleSearchChange;
    const handleDisplayIngredient = () => {
        console.log("ingredient");
    }
    const X = "http://www.edamam.com/ontologies/edamam.owl#recipe_9ca0499f2ac7f1e4cae63bdf4671c1b3";
    var Z = X.slice(X.indexOf("recipe_") + 7);
    console.log("z is =", Z);
   // ${row.recipe.uri.slice(row.recipe.uri.indexOf("recipe_")+7)}
   //b79327d05b8e5b838ad6cfd9576b30b6;
   const classes = useStyles();
     return(
        <Container>
          
         
            <SearchHeaderContainer>
                  {/*  <img src="./search-icon2.png" alt="" />
                    <SearchInput placeholder="search recipe" />*/}
                   <Paper component="form" >
  
                        <InputBase
                            className={classes.input}
                            placeholder="Search  Recipe"
                            inputProps={{ 'aria-label': 'search google maps' }}
                            onChange={(e) => handleSearchChange(e)}
                            onClick={(e) => handleSearchQuery(e)}
                        />
                        <IconButton type="submit" className={classes.iconButton} aria-label="search"  
                          onClick={(e) => handleSearchQuery(e)}>
                            <SearchIcon />
                        </IconButton>
                    </Paper>
            </SearchHeaderContainer>
            <RecipeListContainer>
                {props.data?.map((row, index)=> (
                <RecipeContainer  key={index}>
                       
                         <CoverImage src={`${row.recipe.image}`} alt="image x" />
                            <RecipeName>{row.recipe.label}</RecipeName>
                           
                             <Link to={`/${row.recipe.uri.slice(row.recipe.uri.indexOf("recipe_")+7)}`} onClick={handleDisplayIngredient}>  <IngredientsText >Ingredients</IngredientsText></Link>
                            <SeeMoreText>See Complete Recipe</SeeMoreText>
                    
                    </RecipeContainer>
                ))
            }
            </RecipeListContainer>
         
        </Container>
    )
}

export default Home;