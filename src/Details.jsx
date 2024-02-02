import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";


const Details = () => {
  const [detailsProduct,setDetailsProduct] =useState([])
  console.log(detailsProduct)
  const{id} = useParams()
  // console.log(id)
  const dataa = useLoaderData()
  // console.log(dataa);
  
useEffect(()=>{
      const findData = dataa.find(details=>details.id == id)
      setDetailsProduct(findData);

},[dataa,id])

const{name,image,price} =detailsProduct;
  return (
    <div className="">
      <div className="card w-full h-1/2 glass">
  <figure><img className="h-1/2" src={image} alt="car!"/></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>This a very good product</p>
    <p className="font-bold">Price: <span className="text-yellow-400">{price}$</span> </p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Learn now!</button>
    </div>
  </div>
</div>
    </div>
  );
};

export default Details;