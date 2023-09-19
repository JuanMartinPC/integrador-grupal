import '../styles/Home.css'
import { useContext } from "react";
import ProductContext from "../context/ProductsContext.jsx";
import Card from "../components/Card.jsx";
import Categories from "../components/Categories.jsx";
import Header from "../components/Header2.jsx";
import Slider from "../components/Slider.jsx"
import Footer from '../components/Footer';
import Order from '../components/Order';
import SearchBar from '../components/SearchBar';

function Home() {
    const productos = useContext(ProductContext);
    
  return (
    <>
        <Header />
        <Slider />
        <main>
            
            <hr />
            <section className='filter__section'>
                <div>
                    <h2>Buscar:</h2>
                    <SearchBar />
                </div>
                <div>
                    <h2>Filtrar por:</h2>
                    <Categories />
                </div>
                {/* <Order /> */}
            </section>
            
            <section className='products__section'>
                
                {productos.searchResults.length > 0? productos.searchResults.map((p)=> <Card p={p}/>) : productos.filter.length === 0? productos.products.map((p) => (<Card p={p}/>)) : productos.filter.map((p) => (<Card p={p}/>))}
            </section>
        </main>
        <Footer />
    </>
    )
}

export default Home;