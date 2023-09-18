import '../styles/Home.css'
import { useContext } from "react";
import ProductContext from "../context/ProductsContext.jsx";
import Card from "../components/Card.jsx";
import Categories from "../components/Categories.jsx";
import Header from "../components/Header2.jsx";
import Slider from "../components/Slider.jsx"
import Footer from '../components/Footer';
import Order from '../components/Order';

function Home() {
    const productos = useContext(ProductContext);
    
  return (
    <>
        <Header />
        <Slider />
        <main>
            <h2>Filtrar por:</h2>
            <hr />
            <section className='filter__section'>
                <Categories />
                <Order />
            </section>
            <section className='products__section'>
                {productos.products.map((p) => (<Card p={p}/>))}
            </section>
        </main>
        <Footer />
    </>
    )
}

export default Home;