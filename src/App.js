import React  from "react";
import { useState,useEffect } from "react";
import './App.css';
import SearchIcon from './search.svg'
import ProductCard from "./ProductCard";
import Pagination from '@material-ui/lab/Pagination';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  root : {
    position: "fixed",
    bottom : 0,
    zIndex : 200,
    backgroundColor : "gray",
    padding : "10px 80px",

    color : "white",
    width : "100%",
  },

  container : {
    display : "flex",
    justifyContent : "center",
    alignItems : "center",
    color :"white",
  }
}));

const API_URL = 'https://staging-backend.esyms-api.com/esyms/website/product/front-condition';

const App = () => {

    const [products, setProducts] = useState([]);
    const [searchTerm, setSearchTerm] = useState('')
    const searchProducts = async (title) =>{
        const response = await fetch(`${API_URL}?name=${title}&page=${page}`)
        console.log(response);
        const data = await response.json();
        setProducts(data.results.docs);
    }
    
    const [page, setPage] = useState(1);
    const classes = useStyles();
    const handleChange = (page) =>{
      setPage(page)
      window.scroll(0,0)
     }

     useEffect(() =>{
        searchProducts('Goli');
    }, [page]);

    return(
        <>
        <div className="app">
            <h1>eSyms</h1>
            <div className="search">
                <input placeholder="Serach"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)} />
                <img
                    src={SearchIcon}
                    alt="search"
                    onClick={() => searchProducts(searchTerm)} />
            </div>
            {products?.length > 0
                ? (
                    <div className="container">
                        {products.map((product) => (
                            <ProductCard product={product} key={product._id} />
                        ))}

                    </div>
                ) :
                (
                    <div className="empty">
                        <h2>No producs found</h2>
                    </div>
                )}

        </div>
        <div className={classes.container}>
            <div className={classes.root}>
                <Pagination
                    onChange={(e) => handleChange(e.target.textContent)}
                    style={{
                        display: "flex",
                        justifyContent: 'center'
                    }} variant="outlined" count={10} />
            </div>
        </div>
            </>
    );
}

export default App;