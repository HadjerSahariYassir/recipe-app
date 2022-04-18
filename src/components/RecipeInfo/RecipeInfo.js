import React, {useState, useEffect } from "react";
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import "./RecipeInfo.scss";
import { useParams } from "react-router-dom";
import axios from "axios";
import styled from "styled-components";
//import Typography from ""
const GlobalContainer = styled.div` 
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1rem;
  width:100%;
  height: 100vh;
  background-color: ${props => props.theme.pageBackground};
`;

const RecipeLabel = styled.h1` 
    color: ${props => props.theme.titleColor};
   // padding: 1rem 3rem;

`;

const IngredientItem = styled.span`
    color: ${props => props.theme.theme==="light" ? 'white' : 'black'};
    background-color: ${props => props.theme.theme==="light" ? 'black' : 'white'};
    margin: 0.2rem 0.2rem;
    padding: 0.5rem;
`;

const RecipeContainer = styled.div` 
   /*display: flex;
    flex-direction: row;*/
    position: relative;
    width: 80%;
    height: 90vh;
  //  margin: 10px;
  //  padding: 50px;
  //  border: 1px solid red;
    flex-flow: row wrap;
`;

const RecipeImage = styled.img` 
    width: 250px;
    height: 250px;
    position: absolute;
    right: 0;
    top: 0;
`;

const SomeRecipeInfos = styled.div`
    display: flex;
    align-items: row;
   // justify-content: space-between;
    flex-direction: row;
    padding: 1rem 1rem;
    margin: 1rem;
   // border: 1px solid green; 
    width: 60%; 
    height: auto;
    flex-flow: row wrap;

`;

const RecipeInfoElemnt = styled.div` 
   flex-basis: calc(33.3333% - 10px);
    display: flex;
    flex-direction: column;
`;

const InfoNumber = styled.p`
    font-size: 30px;
    font-weight: 400;
    color: ${props => props.theme.tagLineColor};
`;

const InfoTitle = styled.p`
    font-size: 14px;
    color: ${props => props.theme.tagLineColor};

`;
const ListIngredients = styled.div` 
    display: flex;
    flex-direction: row;
    flex-flow: row wrap;
    width: 300px;
    height: auto;
`;


const RecipeInfo = (props) => {
    const { uri } = useParams();
    console.log("url",uri);
        const [recipe, setRecipe] = useState({
        
    });

    const url = "https://api.edamam.com/api/recipes/v2/";
    const url3= "https://api.edamam.com/api/recipes/v2/9f7601d8128273e4612af5accde1ddac?app_id=8d6bbf98&app_key=64628ce2ea888f35946b61b626653a8e&type=public"
    const loadData =  async () => {
        try{
            const recipeUrl = url+ uri+ "?app_id=8d6bbf98&app_key=64628ce2ea888f35946b61b626653a8e&type=public";
            console.log("recipe url",recipeUrl);
            const response = await axios.get(recipeUrl);
            setRecipe(response.data.recipe);
        }catch(error){
            console.error(error);
        }
    }
    useEffect (() => { 
      
        loadData();
       // console.log("recipe",recipe);
        //axios.get(url+ `/${label}`).then( res => { setRecipe(res.data); console.log("res",res)});
        console.log(props.data);
       },[]); 
       console.log("recipe is",recipe);
    return(
      
          <GlobalContainer>
           <RecipeContainer>
               <RecipeLabel>{recipe.label}</RecipeLabel>
               <RecipeImage  src={recipe.image} alt={recipe.label} />
               <SomeRecipeInfos>
                   <RecipeInfoElemnt>
                       <InfoNumber>{recipe?.ingredients?.length}</InfoNumber>
                       <InfoTitle>Ingredients</InfoTitle>
                   </RecipeInfoElemnt>
                   <RecipeInfoElemnt>
                       <InfoNumber>{Math.round(recipe.calories)}</InfoNumber>
                       <InfoTitle>Calories</InfoTitle>
                    </RecipeInfoElemnt>
                   <RecipeInfoElemnt>
                       <InfoNumber>{recipe.totalTime}</InfoNumber>
                       <InfoTitle>Ingredients</InfoTitle>
                    </RecipeInfoElemnt>
               </SomeRecipeInfos>
              <h3>Ingredients</h3>
              <ListIngredients>
              {recipe?.ingredients?.map((item,index) => (
                  <IngredientItem key={index}>{item?.food}</IngredientItem>
              ))}
              </ListIngredients>
            </RecipeContainer>
            </GlobalContainer>
         
    )
}

export default RecipeInfo;