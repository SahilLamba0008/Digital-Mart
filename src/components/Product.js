import React from "react";
import { NavLink } from "react-router-dom";
import FormatPrice from "../Helpers/FormatPrice";

const Product = (curElem) => {
  const { id, name, image, price, category } = curElem;
  return (
    <NavLink to={`/singleproduct/${id}`}>
      <div className="card">
        <figure>
          <img
            src={image}
            alt={name}
          />
          <figcaption className="caption" style={{ color: "#067FD0" }}>
            {category}
          </figcaption>
        </figure>
        <hr></hr>
        <div className="card-data">
          <div className="card-data-flex">
            <h3>{name}</h3>
            <p className="card-data--price" style={{ color: "#067FD0" }}>
              {<FormatPrice price={price} />}
            </p>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Product;
