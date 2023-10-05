import React from "react";
import Navbar from "./Navbar";
import Form from "./Form";
import { useSelector } from "react-redux";

function Body() {
  const productData = useSelector((state) => state.productReducer);
  return (
    <body>
      <Navbar />
      <main className="py-16">
        <div className="productWrapper">
          <div className="productContainer" id="lws-productContainer">
            {/* https://i.dummyjson.com/data/products/40/thumbnail.jpg" */}
            {productData.map((data) => (
              <div className="lws-productCard">
                <img
                  className="lws-productImage"
                  src={data.image}
                  alt="product"
                />
                <div className="p-4 space-y-2">
                  <h4 className="lws-productName">{data.name}</h4>
                  <p className="lws-productCategory">{data.category}</p>
                  <div className="flex items-center justify-between pb-2">
                    <p className="productPrice">
                      BDT <span className="lws-price">{data.price}</span>
                    </p>
                    <p className="productQuantity">
                      QTY <span className="lws-quantity">{data.quantity}</span>
                    </p>
                  </div>
                  <button className="lws-btnAddToCart">Add To Cart</button>
                </div>
              </div>
            ))}
          </div>
          <Form />
        </div>
      </main>
    </body>
  );
}

export default Body;
