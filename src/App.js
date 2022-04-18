
import { useState, useMemo, useCallback } from "react";
import { Switch, Route, Link }  from "react-router-dom";
import Main from "./containers/Main/Main";
import { ThemeProvider } from "styled-components";
import RecipeInfo from './components/RecipeInfo/RecipeInfo';
import { motion } from "framer-motion";
import { HiMenuAlt4, HiX } from "react-icons/hi";
import {GiHamburgerMenu} from "react-icons/gi";
import styled from "styled-components";
import { CgSun } from "react-icons/cg";
import { HiMoon } from "react-icons/hi";
import Header from "./components/Header/Header";
import './App.scss';
import CategoriesContainer from "./containers/categories/CategoriesContainer";

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

const LightTheme = {
  pageBackground: "white",
  titleColor: "#dc658b",
  theme: "light",
  tagLineColor: "black",
};

const DarkTheme = {
  pageBackground: "#282c36",
  titleColor: "lightpink",
  theme: "dark",
  tagLineColor: "lavender",
  

}
const Toggle = styled.button`
    cursor: pointer;
    height: 30px;
    width: 30px;   
    border-radius: 50%;
    border: none;
    background-color: ${props => props.theme.titleColor};
    color: ${props => props.theme.pageBackground};
    &:focus {
        outline: none;
    }
    transition: all .5s ease;
`;

const TitleHeader = styled.div` 
  //display: inline;
  flex-basis: calc(50% - 10px);
  display: flex;
  align-items: center; 
  justify-content: center;


  p{
      font-family: 'Rochester', cursive;
      font-size: 20px; 
      font-weight: 600; 
     // color: rgb(245, 164, 14); 
      color:  #dc658b;
  }
  
`;

const themes = {
  light: LightTheme,
  dark: DarkTheme
};


const App = () =>  {
  //const [theme, setTheme] = useState("light");
  const [theme, setTheme] = useState("light");
  function changeTheme() {
      if (theme === "light") {
          setTheme("dark");
      } else {
          setTheme("light");
      }
  };
    const icon = theme === "light" ? <HiMoon size={20}  /> : <CgSun size={20} />;
    const [toggle ,setToggle] = useState(false);
    console.log("theme", themes[theme].pageBackground);

  const LinkITem = useCallback ((link) => {
    
    switch(link) {
      case 'Home' : return   <Link to={`/`} onClick={() => { setToggle(false);  window.location.reload(false);}} >{link}</Link>
      case 'Categories' : return   <Link to='/categories' onClick={() => setToggle(false)} >{link}</Link>
      case 'Add Recipe' : return   <Link to='/add-recipe' onClick={() => setToggle(false)} >{link}</Link>
      default:  return   <Link to='/' onClick={() => setToggle(false)} >{link}</Link>
    }
  },[]);
  
  return (
      
             <ThemeProvider theme={themes[theme]}> 
             <Page>
            <Container>
             <div className="app__header">
             <div className="app__header-menu">
                <GiHamburgerMenu sty onClick={() => setToggle(!toggle)}/>
                    {toggle &&
                        (
                            <motion.div
                              
                                whileInView={{ x: 0, y: 0 }}
                                style={{backgroundColor: themes[theme].pageBackground}}
                                transition={{ duration: 0.85, ease: 'easeOut' }}
                            >
                               <HiX onClick={() => setToggle(false)} />
                                <ul>
                                        {['Home', 'Categories', 'Add recipe'].map((item) =>  {
                                          return(
                                            <li key={item}>
                                            {LinkITem(item)}
                                            </li>
                                    )
                                    
                                    } )
                                    }
                               </ul>
                            </motion.div>
                        )
                    }
                
               
            </div>
            <TitleHeader>
                <p>Recipe app</p>
            </TitleHeader> 
            <div className="app__header-theme">
              <Toggle onClick={changeTheme}>
                      {icon}
              </Toggle>
            </div>
            
                </div>
                <Switch>
              <Route exact path="/" component={Main} />
              <Route  path="/categories" exact component={CategoriesContainer} />
              <Route  path="/categories/:q" exact component={Main} />
              <Route  path="/:uri" exact component={RecipeInfo} />
              </Switch>
               
              </Container>    
      </Page>
      </ThemeProvider>
     
  );
}

export default App;
