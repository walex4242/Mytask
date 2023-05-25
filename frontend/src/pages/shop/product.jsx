import React, { useContext } from "react";
import { ShopContext } from "../../context/shop-context";
import { Form } from "react-bootstrap";
import "./shop.css";

export const Product = ({
  id,
  productName,
  productPrice,
  productType,
  productSize,
  productHeight,
  productWidth,
  productLength,
  productWeight,
}) => {
  const { itemsArray } = useContext(ShopContext);

  const handleChange = (e) => {
    if (e.target.checked) {
      itemsArray.push(id);
    } else {
      let arrToRemoveIndex = itemsArray.indexOf(id);
      arrToRemoveIndex > -1 && itemsArray.splice(arrToRemoveIndex, 1);
    }
  };

  const handleType = (productType) => {
    let type = "";
    switch (productType) {
      case "0":
        type = "Size";
        break;

      case "1":
        type = "Dimension";
        break;

      case "2":
        type = "Weight";
        break;

      default:
        type = "";
    }
    return type;
  };

  const resolveProductProperties = (type) => {
    const check_type = handleType(type);
    let resolveProductProperties = "";

    switch (check_type) {
      case "Size":
        resolveProductProperties = `${check_type}: ${productSize}MB`;
        break;

      case "Weight":
        resolveProductProperties = `${check_type}: ${productWeight}KG`;
        break;

      case "Dimension":
        resolveProductProperties = `${check_type}: ${productHeight}x${productWidth}X${productLength}`;
        break;

      default:
        resolveProductProperties = ` `;
    }

    return resolveProductProperties;
  };

  return (
    <div
      className="product-container d-flex align-items-start justify-content-start flex-column my-3"
      key={id}
    >
      <Form.Check
        type="checkbox"
        name="user_selection"
        onChange={(e) => handleChange(e)}
        className="delete-checkbox m-2"
      />

      <section className="product-details-container m-auto d-flex align-items-center justify-content-center flex-column">
        <h5 className="fs-5 fw-bold">{id}</h5>
        <p className="text-capitalize">{productName}</p>
        <p className="small">${productPrice}</p>

        <p className="text-center">{resolveProductProperties(productType)}</p>
      </section>
    </div>
  );
};
