import React from "react";
import { client } from "@/sanity/lib/client";
import { urlForImage } from "@/sanity/lib/image";
import {
  AiOutlineMinus,
  AiOutlinePlus,
  AiOutlineStar,
  AiFillStar,
} from "react-icons/ai";
import { Product } from "@/components";
export default async function ProductDetails({ params }) {
  const { product, products } = await getServerSideData(params.slug);
  const { image, name, details, price } = product;

  return (
    <div>
      <div className="product-detail-container">
        <div className="image-container">
          <img
            src={urlForImage(image && image[0])}
            alt={name}
            className="product-detail-image"
          />
        </div>
        <div className="small-images-container">
          {image?.map((item, i) => (
            <img key={i} src={urlForImage(item)} className="" onMouseEnter="" />
          ))}
        </div>
        <div className="product-detail-desc">
          <h1>{name}</h1>
          <div className="reviews">
            <div>
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiFillStar />
              <AiOutlineStar />
            </div>
            <p>(20)</p>
          </div>
          <h4>Details:</h4>
          <p> {details} </p>
          <p className="price">${price} </p>
          <h3>Quantity</h3>
          <p className="quantity-desc">
            <span className="minus" onClick="">
              <AiOutlineMinus />
            </span>
            <span className="num">0</span>

            <span className="plus" onClick="">
              <AiOutlinePlus />
            </span>
          </p>
        </div>
        <div className="buttons">
          <button type="button" className="add-to-cart" onClick="">
            Add to cart
          </button>
          <button type="button" className="buy-now" onClick="">
            Buy now
          </button>
        </div>
      </div>
      <div className="maylike-products-wrapper">
        <h2>You may also like</h2>
        <div className="marquee">
          <div className="maylike-products-container track">
            {products?.map((item) => (
              <Product key={item._id} product={item} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
async function getServerSideData(slug) {
  const query = `*[_type=='product' && slug.current == '${slug}'][0]`;
  const product = await client.fetch(query);

  const productsQuery = `*[_type=='product']`;
  const products = await client.fetch(productsQuery);
  return { product, products };
}
