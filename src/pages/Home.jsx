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
    const { products, filter, order, searchResults } = useContext(ProductContext);

  return (
    <>
        <Header />
        <Slider />
        <main>            
            <section className='search__section'>
                    <h2>Buscar:</h2>
                    <SearchBar />
            </section>
            <section className='filter__section'>                
                
                <div className='filter__container'>
                    <h2>Filtrar por:</h2>
                    <div>
                        <Categories />
                        <Order />
                    </div>
                </div>
                
            </section>
            
            <section className='products__section'>                
                {searchResults.length > 0? searchResults.map((p)=> <Card p={p}/>) : order.length > 1? order.map((p) => (<Card p={p}/>)) : filter.length > 0? filter.map((p) => (<Card p={p}/>)) : products.map((p) => (<Card p={p}/>))}
            </section>

        </main>
        <Footer />
    </>
    )
}

export default Home;