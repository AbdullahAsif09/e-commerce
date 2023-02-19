import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import SingleProductList from './SingleProductList'
import './SingleProducts.css'
function SingleProducts() {
  const [Product, setProduct] = useState({})
  const {id} =  useParams()
  useEffect(() => {
      const fetchData = async () => {
       try {
         const res = await axios.get(
           `http://localhost:8000/product/oneProduct?product=${id}`
         );
        //  console.log(res.data);
         setProduct(res.data);
       } catch (error) {
         console.log(error);
       }
     };
     fetchData();
  }, [])
  
  return (
    <div className="singlepro-container">
      <div className="singlepro-box">
        <SingleProductList product={Product} />
      </div>
    </div>
  );
} 

export default SingleProducts