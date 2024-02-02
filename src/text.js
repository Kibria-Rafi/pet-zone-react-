const params = useParams()
const id = params.id;
console.log(detailsProduct)
const  {name,image,price}=detailsProduct;
useEffect(()=>{
    const findDetailsData = allData?.find(singleData=> singleData.id === id)
    setDetailsProduct(findDetailsData);
},[id,allData])


const [detailsProduct,setDetailsProduct]= useState([])