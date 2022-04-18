import React, {useState, useEffect } from "react";
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import {GiHamburgerMenu} from "react-icons/gi";
import { ThemeProvider } from "styled-components";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import Home from "../../components/Home/Home";
import axios from "axios";
import { useParams } from "react-router-dom";
import { queryAllByRole } from "@testing-library/react";

const LightTheme = {
    pageBackground: "white",
    titleColor: "#dc658b",
    tagLineColor: "black"
  };
  
  const DarkTheme = {
    pageBackground: "#282c36",
    titleColor: "lightpink",
    tagLineColor: "lavender",
    
  
  }
  
  const themes = {
    light: LightTheme,
    dark: DarkTheme
  }

  
const Toggle = styled.button`
    cursor: pointer;
    height: 50px;
    width: 50px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const Page = styled.div`
  /*display: flex;
  justify-content: center;
  align-items: center;*/
  height: 100vh;
  width: 100%;
  background-color: ${props => props.theme.pageBackground};
  transition: all .5s ease;
`;

const Container = styled.div`
    /*display: flex;
    flex-direction: column;
    align-items: center;*/
    width: auto ;
    height: 100vh;
    overflow-x: hidden;
`;

/*const Title = styled.h1`
    color: ${props => props.theme.titleColor};
    transition: all .5s ease;
`;

const TagLine = styled.span`
    color: ${props => props.theme.tagLineColor};
    font-size: 18px;
    transition: all .5s ease;
`;*/

const Main = (props) => {
    const { q } = useParams();
    console.log("url",q);

    const [theme, setTheme] = useState("light");
    function changeTheme() {
        console.log("prps =",props);
        if (theme === "light") {
            setTheme("dark");
        } else {
            setTheme("light");
        }
    };
    const icon = theme === "light" ? <HiMoon size={40} /> : <CgSun size={40} />;
    const [toggle ,setToggle] = useState(false);
    const [data, setData] = useState([
     
    ]);
    const url1 = "http://localhost:5000/recipes";
    //8d6bbf98
    //64628ce2ea888f35946b61b626653a8e
    const url2= "https://api.edamam.com/search?q=biryani&app_id=8d6bbf98&app_key=64628ce2ea888f35946b61b626653a8e";
    const url5="http://www.edamam.com/ontologies/edamam.owl#recipe_9f7601d8128273e4612af5accde1ddac"
    const url4="https://api.edamam.com/search?r=http%3A%2F%2Fwww.edamam.com%2Fontologies%2Fedamam.owl%23recipe_9f7601d8128273e4612af5accde1ddac&app_id=8d6bbf98&app_key=64628ce2ea888f35946b61b626653a8e"
    const url3= "https://api.edamam.com/api/recipes/v2/9f7601d8128273e4612af5accde1ddac?app_id=8d6bbf98&app_key=64628ce2ea888f35946b61b626653a8e&type=public"
    const url6= "https://api.edamam.com/api/recipes/v2"
    ///search?q=biryani&app_id=8d6bbf98&app_key=64628ce2ea888f35946b61b626653a8e&type=public
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("chicken");

    const handleSearchChange = (e) => {
        console.log("e. value",e.target.value);
        setSearch(e.target.value);
    }

    const handleSearchQuery = (e) => {
        e.preventDefault();
        console.log("search=",search);
        setQuery(search);
    }

    const loadData =  async () => {
        try{
            const response = await axios.get(url6, {
                params: {
                    q: !q && !query ? "chicken" : q  ? q : query,
                    app_id: '8d6bbf98',
                    app_key: '64628ce2ea888f35946b61b626653a8e',
                    type: 'public'
                }
            });
            setData(response.data.hits);
          //  console.log("response.data",response.data);

        }catch(error){
            console.error(error);
        }
    }
    useEffect( () => {
       loadData();
   },[query]);
   
   /* useEffect(() => {
        axios.get(url1
        ).then(res => {
            console.log("res data recipes",res.data);
            setData(res.data);
            console.log("data state",data);
        });
    },[]);*/
  //   console.log("data is",data);
     console.log("q is ::::",q);
     console.log("query = to", query);
    return(
   
                
    
                <Home data={data} handleSearchChange={handleSearchChange} handleSearchQuery={handleSearchQuery}/>
       
     
    )
}

export default Main;