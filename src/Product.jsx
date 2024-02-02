import { Link } from "react-router-dom";


const Product = ({product}) => {
    const {name,image,price,id,rating} = product;
    return (
       <div>
         <div className="card w-96 hover:border bg-base-100 shadow-xl">
  <figure className="px-10 pt-10">
    <img src={image} alt="Shoes" className="rounded-xl h-60  w-72" />
  </figure>
  <div className="card-body items-center text-center">
    <h2 className="card-title">{name}</h2>
    <p className="text-white font-bold">Price: <span className="text-yellow-400">{price} $</span></p>
    <p>If you buy this product, simply click buy now button</p>
    
    <div className="card-actions">
      <Link to={`/products/ ${id}`}>
      <button className="px-3 py-1 hover:bg-white bg-yellow-400 text-black font-bold rounded-lg">See details -></button>
      </Link>
      <Link to="/buyerdetails">
      <button className="px-3 py-1 hover:bg-white bg-yellow-400 text-black font-bold rounded-lg">Buy Now</button>
      </Link>
    </div>
  </div>
</div>
       </div>
    );
};

export default Product;