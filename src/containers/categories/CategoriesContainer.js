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
import "../Main/Main.scss";
//import "../../App.scss";
import Categories from "../../components/Categories/Categories"; 

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

const CategoriesContainer = (props) => {
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
        {category:  "chicken", image: "https://edamam-product-images.s3.amazonaws.com/web-img/e42/e42f9119813e890af34c259785ae1cfb.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLWVhc3QtMSJIMEYCIQD0lULL4TKwaguVei7IwiG8rfuy0iiMfyLQ%2B4NZ2iLMmgIhALnYwWFPrV6E%2BHu%2FXZ4KBz5VtX2z3lh9KSvhcV8%2BEQo4KoMECMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2IgxSACtWZZngey5snrkq1wNVP4UtCy5hOZ8UzcNzCGambKoXZ%2FGHfv4e837%2B9Bp0n9oV83J8NkVCiq0%2B7X0YpCkeFDWZuOi9vB2AOwRHsovNu2G%2BwONtrB6RpoT6chkjwM24ZPLWokAg33KskKQSXSFk3h6M38MgeVhRxZxgN5OdfjVAMP5%2BId92plmBqcAyvC8JtNQoMcuAcI%2BLSeI0RuZKZ1PMyZzUl1LhYSCdbLc9cDY%2B1KmoITbqRMS4WhmEaabxkLXHdrK7k9V3ke%2FoCCQCMS4L8BTzYVO%2B9jbJWTDI1v8JaQn5fh1ikQ4ZunqEM6MvqKt7Pj0pyM8amYNqAiIUjW0TGn74jrrMBS%2Fbl3e0GQEA2dkdxTZaWX5ZQ%2FYbG5akxjpmQtaytg3ogzPr%2FI2%2F9b6paaDDYlBGA94oAFwe3%2Bmz0dRYTMkpWyQnepDsE%2B%2BrZ3jbmtz%2ByoOByvKktNey%2FgxZaKIZqNgOEvQvWbyvoA291Ltv%2FRmcWtC8TCXzNiGCeVKd9DXTvAsHE%2FFRY94GTn1JrQK3rTbK9ZSdC4eU9%2BQS%2BTfTCtCL3l9zSiYrk2GWEzidg4WhwZIEafV%2BtFgBGpycZTuIdjgyZaehAgSob3YFumqrDpwXKF1rTfJ3pjAL9JpuBXQwvsvwkgY6pAFq%2BSonPKK5LMo13jGxazgLcVsVIG95psR%2BLH4QUNkPhJBT3%2F1kBJupW6clZSmhjcUzStnkkN48jceSGl6IBtJ2W5aSMxh8Frr1pX%2FQoatTbxZ6gU2W0%2B5pLmFeLLFEeFdCBWSFEjfiqfx1sQX%2Fciwqce%2FccejUSLzpbkJQAuFmTeuR6ndKwHKrddTA8mivL0fSTdeqp%2Fofz5fHs%2Bkd3%2FVJArhuww%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220417T154005Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFLOBTRYAI%2F20220417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=788e7fc6f4a79ef2857ffbfd035a3e72fec742f1fc5e1c2672f5bbb89793a472"},
        {category:  "fish", image: "https://edamam-product-images.s3.amazonaws.com/web-img/eb5/eb58edb23bf93ebc4ea94abdd95c14ee?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJHMEUCIFXtza0S%2BnsuGcD0yvIr3C5bNbDmdWwjvfSni8lKLHmBAiEA%2BdDzfRcLSW4yTZVwxvrcIGWDE4TRai3OGH7GGpzvvgoqgwQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDL7QiTAR9YdAhzYOGyrXA3wd1NJku8fdUfC2892TAisbuGvAxOndJ9pn6itTpxCVaMu02BwiukqfBgbh2Mdxw9KNvyKDkfySQGtWGbXCi%2FuIl%2FFW9QTijfahQi6G6LaTYPYgBpbjwmPJDCC1VRJbKs7lSN0csOFcmnRRrzhZWDjD9cI8n8U3YztW%2FoTFSE6%2F4EOpaEBVijoHDg5dBSKL7YMOG1wHThZYdlxvsc%2BZI0%2Bj9%2BKgE%2BFxmQAy39nclGLPvWa6Nm4E0p2%2BYR68XdhejK%2B%2BiLHiTCTISdBbFM5r%2B%2BvyyXVh%2FgWWdcCtmK7IFQ%2BPloKxKFZP0ArOEU5FiXczBteVq22nU%2BQie%2Bu9rYdzxPpMG%2F29OzLfs3B87l3otf8W5d0ak67tRRGWM5ErlWoytp4TNmJXZqQ2LLt16BlpKum03TpAHgXBSbFyH7h%2Fyih0G1lQo0kwOoRwDjA8oXGKyMI8v3VMdaBlnVi9iCiecxrG7V3qWLLk0UJxMpvM9C3qH95y908bxaWkA7OIPjctK5UP52RAkhwPF5QucWrOqsCBxB5Fsow72WKToMu%2FjtHAd7NsNdi6UPulDLkBosYdzCnLDqA2a8utecOXhjFcXCPT%2FQaiaJRUq7aKnba4cGRHF0MctMS1%2FjD0p%2FKSBjqlATIatl5rZxfih%2BDkpvk85PoQ%2F9FW03jsxoFUnYwWlZbIv98mgK9KSaXAhiYTdjvJ4j1kd8u1zRYWwx1ZDgenQpbjZn1cdXeEAloLqNPPmEVwlQ%2FlD%2BXYrVtlHtuxNXDFEllMdaxrTQkgWFCE0k7mq4nJzDmfjdepwWlA2VCIkxTk3o4dKVPDaK%2BBwp7raNbNW0KmKktkybKe5ATOEnhn2zxeLeeGMA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220417T234006Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGC4OY342%2F20220417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=17063b13d6bb29c716aba174a9efdd87f629d17aaa242ce72c0e7df93997e0f0"},
        {category: "banana" , image: "https://edamam-product-images.s3.amazonaws.com/web-img/ea3/ea3afc52c32efacae443f4064fbcc880?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJIMEYCIQCWDQpEp9Ttymkph7wWxcwEiW%2FpHrVD7y1g3zsa2eVp5AIhANu5lnCJl43mg2APZcfsDfLhjN21oAQl4A6KbzWwK3WXKoMECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2Igyr2qxEyjMZ7L8nklUq1wPeMyjsJZ8KTTWhcAZYMuHEHMScbaf7uraUiSZipyowt594Ey9RfsBvZq6vwXoXA5cLxse2OZ%2B%2FWnJgG3%2Fi3dqNozKpJeqr29IrshZLz%2F15NJKzm7p1sVgFLsQ7sEvJmCcdykHKXLwxjpbndpQvOaN%2Bq4vIVKOjQqoEoSjgcHHHkej5b%2FWVlGB2JbM6q9xxDVUyqabMS9GUnckjaand%2FPZTMLuwJGaQtQYQjVJxI2PbrLhdbhz6l9e%2F9jeViQt4sm26TkZz3bbX7XoDpXiLNK4wCzifSs%2BmSeV5sjRLdPKpsbRgo%2FLNSmwhZBM3iEsSe12WD%2FcX%2Bt0uAwR%2F7rsL2qLw5wq3J7Ah66inHotIhDmmMKZIGcA%2BxlJoK749pZkgNdlfOz7lIf9HPNhAB%2F1CHAlyFzKeiY6lDlNLJAdo2aC%2F1sqBNE0uc%2BvzFhRGH8wLlWv4SznOMDgDH5k6Nf8zf6Q3xpsIeI4zaRHRrF9r0Y2PUsDumRdyCUYMjs9CrHCpBx02B3H%2BYZ9HtvIosP6azV8ji4pm6UO1pv%2FiuafBSYp5tMf5h0OdeaB4ZjMMlwl1LUSNBQtWJBbnIsZH%2BxU%2FgwW2mPIknn3vEypuaJXP1maFLlGoP8SRMJww3qjykgY6pAHy3xcVqqybiTr7E59dpLzDAI7DNA1D%2F3ZuVQh9hKoZpxrpNskALhkOzcPVyiIe4AUMKRdsRUBqwgXLHC0Kv%2BlBm5ODl17i1aB%2FhHI4YB7lHm%2FDAV9RGRcwH0L3ee1bRp%2F0ifN%2BQ5hSjTHs9o0H9FIUTPHvjZByg21vKyFDtMfBTkhLQrDCsFFLbmmVBCb%2FrGjlfaorwiutveq4kA8js%2B5%2BybermA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220417T233610Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGDCY3CMC%2F20220417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=706d94efb44ff95bd81744375105352071c8fcf98f6fa5a59901e137424cf38f"},
        {category: "seafood" , image: "https://edamam-product-images.s3.amazonaws.com/web-img/613/613fd9e42cbf38caa128548de2d40e2b.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJHMEUCIFXtza0S%2BnsuGcD0yvIr3C5bNbDmdWwjvfSni8lKLHmBAiEA%2BdDzfRcLSW4yTZVwxvrcIGWDE4TRai3OGH7GGpzvvgoqgwQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDL7QiTAR9YdAhzYOGyrXA3wd1NJku8fdUfC2892TAisbuGvAxOndJ9pn6itTpxCVaMu02BwiukqfBgbh2Mdxw9KNvyKDkfySQGtWGbXCi%2FuIl%2FFW9QTijfahQi6G6LaTYPYgBpbjwmPJDCC1VRJbKs7lSN0csOFcmnRRrzhZWDjD9cI8n8U3YztW%2FoTFSE6%2F4EOpaEBVijoHDg5dBSKL7YMOG1wHThZYdlxvsc%2BZI0%2Bj9%2BKgE%2BFxmQAy39nclGLPvWa6Nm4E0p2%2BYR68XdhejK%2B%2BiLHiTCTISdBbFM5r%2B%2BvyyXVh%2FgWWdcCtmK7IFQ%2BPloKxKFZP0ArOEU5FiXczBteVq22nU%2BQie%2Bu9rYdzxPpMG%2F29OzLfs3B87l3otf8W5d0ak67tRRGWM5ErlWoytp4TNmJXZqQ2LLt16BlpKum03TpAHgXBSbFyH7h%2Fyih0G1lQo0kwOoRwDjA8oXGKyMI8v3VMdaBlnVi9iCiecxrG7V3qWLLk0UJxMpvM9C3qH95y908bxaWkA7OIPjctK5UP52RAkhwPF5QucWrOqsCBxB5Fsow72WKToMu%2FjtHAd7NsNdi6UPulDLkBosYdzCnLDqA2a8utecOXhjFcXCPT%2FQaiaJRUq7aKnba4cGRHF0MctMS1%2FjD0p%2FKSBjqlATIatl5rZxfih%2BDkpvk85PoQ%2F9FW03jsxoFUnYwWlZbIv98mgK9KSaXAhiYTdjvJ4j1kd8u1zRYWwx1ZDgenQpbjZn1cdXeEAloLqNPPmEVwlQ%2FlD%2BXYrVtlHtuxNXDFEllMdaxrTQkgWFCE0k7mq4nJzDmfjdepwWlA2VCIkxTk3o4dKVPDaK%2BBwp7raNbNW0KmKktkybKe5ATOEnhn2zxeLeeGMA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220417T233820Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGC4OY342%2F20220417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=5baa9da9832f69fb76503f95fd121861b3af2ef861eec4b0d23deb0d73071476"},
        {category: "beef" , image: "https://edamam-product-images.s3.amazonaws.com/web-img/207/2074a28ff50eba58d79304c9296438a1.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJIMEYCIQCWDQpEp9Ttymkph7wWxcwEiW%2FpHrVD7y1g3zsa2eVp5AIhANu5lnCJl43mg2APZcfsDfLhjN21oAQl4A6KbzWwK3WXKoMECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMMTg3MDE3MTUwOTg2Igyr2qxEyjMZ7L8nklUq1wPeMyjsJZ8KTTWhcAZYMuHEHMScbaf7uraUiSZipyowt594Ey9RfsBvZq6vwXoXA5cLxse2OZ%2B%2FWnJgG3%2Fi3dqNozKpJeqr29IrshZLz%2F15NJKzm7p1sVgFLsQ7sEvJmCcdykHKXLwxjpbndpQvOaN%2Bq4vIVKOjQqoEoSjgcHHHkej5b%2FWVlGB2JbM6q9xxDVUyqabMS9GUnckjaand%2FPZTMLuwJGaQtQYQjVJxI2PbrLhdbhz6l9e%2F9jeViQt4sm26TkZz3bbX7XoDpXiLNK4wCzifSs%2BmSeV5sjRLdPKpsbRgo%2FLNSmwhZBM3iEsSe12WD%2FcX%2Bt0uAwR%2F7rsL2qLw5wq3J7Ah66inHotIhDmmMKZIGcA%2BxlJoK749pZkgNdlfOz7lIf9HPNhAB%2F1CHAlyFzKeiY6lDlNLJAdo2aC%2F1sqBNE0uc%2BvzFhRGH8wLlWv4SznOMDgDH5k6Nf8zf6Q3xpsIeI4zaRHRrF9r0Y2PUsDumRdyCUYMjs9CrHCpBx02B3H%2BYZ9HtvIosP6azV8ji4pm6UO1pv%2FiuafBSYp5tMf5h0OdeaB4ZjMMlwl1LUSNBQtWJBbnIsZH%2BxU%2FgwW2mPIknn3vEypuaJXP1maFLlGoP8SRMJww3qjykgY6pAHy3xcVqqybiTr7E59dpLzDAI7DNA1D%2F3ZuVQh9hKoZpxrpNskALhkOzcPVyiIe4AUMKRdsRUBqwgXLHC0Kv%2BlBm5ODl17i1aB%2FhHI4YB7lHm%2FDAV9RGRcwH0L3ee1bRp%2F0ifN%2BQ5hSjTHs9o0H9FIUTPHvjZByg21vKyFDtMfBTkhLQrDCsFFLbmmVBCb%2FrGjlfaorwiutveq4kA8js%2B5%2BybermA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220417T233435Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGDCY3CMC%2F20220417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=6b4329de07d2b8240a910e49101c0538af1e0b6b1d3afd0f1b693f0f2d7f6683"},
        {category:  "salad", image: "https://edamam-product-images.s3.amazonaws.com/web-img/3ac/3accba1eeb5ac38d902d056050c05ead.jpg?X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLWVhc3QtMSJHMEUCIFXtza0S%2BnsuGcD0yvIr3C5bNbDmdWwjvfSni8lKLHmBAiEA%2BdDzfRcLSW4yTZVwxvrcIGWDE4TRai3OGH7GGpzvvgoqgwQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgwxODcwMTcxNTA5ODYiDL7QiTAR9YdAhzYOGyrXA3wd1NJku8fdUfC2892TAisbuGvAxOndJ9pn6itTpxCVaMu02BwiukqfBgbh2Mdxw9KNvyKDkfySQGtWGbXCi%2FuIl%2FFW9QTijfahQi6G6LaTYPYgBpbjwmPJDCC1VRJbKs7lSN0csOFcmnRRrzhZWDjD9cI8n8U3YztW%2FoTFSE6%2F4EOpaEBVijoHDg5dBSKL7YMOG1wHThZYdlxvsc%2BZI0%2Bj9%2BKgE%2BFxmQAy39nclGLPvWa6Nm4E0p2%2BYR68XdhejK%2B%2BiLHiTCTISdBbFM5r%2B%2BvyyXVh%2FgWWdcCtmK7IFQ%2BPloKxKFZP0ArOEU5FiXczBteVq22nU%2BQie%2Bu9rYdzxPpMG%2F29OzLfs3B87l3otf8W5d0ak67tRRGWM5ErlWoytp4TNmJXZqQ2LLt16BlpKum03TpAHgXBSbFyH7h%2Fyih0G1lQo0kwOoRwDjA8oXGKyMI8v3VMdaBlnVi9iCiecxrG7V3qWLLk0UJxMpvM9C3qH95y908bxaWkA7OIPjctK5UP52RAkhwPF5QucWrOqsCBxB5Fsow72WKToMu%2FjtHAd7NsNdi6UPulDLkBosYdzCnLDqA2a8utecOXhjFcXCPT%2FQaiaJRUq7aKnba4cGRHF0MctMS1%2FjD0p%2FKSBjqlATIatl5rZxfih%2BDkpvk85PoQ%2F9FW03jsxoFUnYwWlZbIv98mgK9KSaXAhiYTdjvJ4j1kd8u1zRYWwx1ZDgenQpbjZn1cdXeEAloLqNPPmEVwlQ%2FlD%2BXYrVtlHtuxNXDFEllMdaxrTQkgWFCE0k7mq4nJzDmfjdepwWlA2VCIkxTk3o4dKVPDaK%2BBwp7raNbNW0KmKktkybKe5ATOEnhn2zxeLeeGMA%3D%3D&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Date=20220417T233706Z&X-Amz-SignedHeaders=host&X-Amz-Expires=3600&X-Amz-Credential=ASIASXCYXIIFGC4OY342%2F20220417%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Signature=c94692c89020210a26e603ff71561ee11cb3cb78e9ca56a83f36c22ad8e14c11"},
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
                    q: query,
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
 /*   useEffect( () => {
       loadData();
   },[query]);*/
   
   /* useEffect(() => {
        axios.get(url1
        ).then(res => {
            console.log("res data recipes",res.data);
            setData(res.data);
            console.log("data state",data);
        });
    },[]);*/
  //   console.log("data is",data);
  
    return(
   
                
    
                <Categories data={data} handleSearchChange={handleSearchChange} handleSearchQuery={handleSearchQuery}/>
       
     
    )
}

export default CategoriesContainer;