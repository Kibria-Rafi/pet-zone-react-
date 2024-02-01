import Product from "./Product";


const Products = ({products}) => {
    return (

        <div>
            <h1 className="text-center my-4 text-3xl text-yellow-400">Our Products:</h1>
            <div  className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2">
            {
                products?.map(product=> <Product key={product.id} product={product}></Product>)
            }
        </div>
        </div>
    );
};

export default Products;