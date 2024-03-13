"use client"
import { urlForImage } from '@/sanity/lib/image'
import React,{useState} from 'react'
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiOutlineStar,
    AiFillStar,
  } from "react-icons/ai";
const ProductManagement = ({image}) => {
    const [index,setIndex] = useState(0)
    const [qty,setQty] = useState(1)

    const incQty = () => {
        setQty((prevQty) => prevQty + 1);
      }
      const decQty = () => {

        setQty((prevQty) => {if (prevQty - 1<1) return 1;
        return prevQty -1});
      }
  return (
    <>
       <div className="small-images-container">
            {image?.map((item, i) => (
              <img 
                key={i}
                src={urlForImage(item)}
                className={i === index ? 'small-image selected-image' : 'small-image'}
                onMouseEnter={() => setIndex(i)}
              />
            ))}
          </div>
          <div className="quantity">

          <h3>Quantity:</h3>
            <p className="quantity-desc">
              <span className="minus" onClick={decQty}><AiOutlineMinus /></span>
              <span className="num">{qty}</span>
              <span className="plus" onClick={incQty}><AiOutlinePlus /></span>
            </p>
          </div>
          
       
     

    </>

  )
}

export default ProductManagement