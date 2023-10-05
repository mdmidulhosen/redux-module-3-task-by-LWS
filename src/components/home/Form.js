import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { added } from "../../redux/product-add/Actions";

function Form() {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");
  const [price, setPrice] = useState();
  const [quantity, setQuantity] = useState();
  const data = useSelector((state) => state.productReducer);
  console.log(data);
  const dispatch = useDispatch();

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const handleImageChange = (e) => {
    setImage(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Clicked");
    dispatch(added(name, image, category, price, quantity));
  };
  return (
    <div>
      <div className="formContainer">
        <h4 className="formTitle">Add New Product</h4>
        <form
          className="space-y-4 text-[#534F4F]"
          id="lws-addProductForm"
          onSubmit={handleSubmit}
        >
          <div className="space-y-2">
            <label htmlFor="lws-inputName">Product Name</label>
            <input
              onChange={handleNameChange}
              className="addProductInput"
              id="lws-inputName"
              type="text"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputCategory">Category</label>
            <input
              onChange={handleCategoryChange}
              className="addProductInput"
              id="lws-inputCategory"
              type="text"
              required
            />
          </div>
          <div className="space-y-2">
            <label htmlFor="lws-inputImage">Image Url</label>
            <input
              onChange={handleImageChange}
              className="addProductInput"
              id="lws-inputImage"
              type="text"
              required
            />
          </div>
          <div className="grid grid-cols-2 gap-8 pb-4">
            <div className="space-y-2">
              <label htmlFor="ws-inputPrice">Price</label>
              <input
                onChange={handlePriceChange}
                className="addProductInput"
                type="number"
                id="lws-inputPrice"
                required
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="lws-inputQuantity">Quantity</label>
              <input
                onChange={handleQuantityChange}
                className="addProductInput"
                type="number"
                id="lws-inputQuantity"
                required
              />
            </div>
          </div>
          <button type="submit" id="lws-inputSubmit" className="submit">
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default Form;
