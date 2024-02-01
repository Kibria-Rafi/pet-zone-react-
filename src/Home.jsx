
import { useLoaderData } from "react-router-dom";
import Banner from "./Banner";
import Products from "./Products";


const Home = () => {
  const products = useLoaderData()
  
    return (
       <div>
        <Banner></Banner>
        <Products products ={products}></Products>
       </div>
    );
};

export default Home;