import React, { useState } from "react";
import handleSubmit from "../../apis/createProduct";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { Form } from "react-bootstrap";
import {
  DVDFormDescription,
  BookFormDescription,
  FurnitureFormDescription,
} from "./formSwitchers";

export default function AddProduct() {
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const navigateTo = useNavigate();
  const handleSubmitClick = async (e) => {
    try {
      setButtonDisabled(true);

      const response = await handleSubmit(e);
      if (response.message.includes("successfully")) {
        setButtonDisabled(false);
        setTimeout(() => {
          navigateTo("/");
        }, 2000);
      } else {
        Swal.fire({
          title: "Error",
          text: "An error occured while creating product!",
        });
      }
    } catch (error) {
      setButtonDisabled(false);
      Swal.fire({
        title: "Error",
        text: "An error occured while creating product!",
      });
    }
  };

  const differentFormArray = [
    DVDFormDescription,
    FurnitureFormDescription,
    BookFormDescription,
  ];
  const [formToRender, setFormToRender] = useState(
    <React.Fragment></React.Fragment>
  );

  const handleFormTypeToggle = (e) => {
    for (let i = 0; i < differentFormArray.length; i++) {
      if (parseInt(e.target.value) === i) {
        setFormToRender(differentFormArray[i]);
      }
    }
  };

  return (
    <section className="my-3 p-3">
      <h4 className="fw-bold text-capitalize text-center my-md-3 my-5">
        Add New Product
      </h4>
      <form
        className="width-toggle-2 m-auto"
        id="product_form"
        method="POST"
        onSubmit={(e) => handleSubmitClick(e)}
      >
        {" "}
        <section>
          <label htmlFor="sku" className="my-2">
            SkU
          </label>
          <input
            type="text"
            placeholder="sku"
            className="form-control"
            id="sku"
          />
        </section>
        <section>
          <label htmlFor="product_name" className="my-2">
            Product name
          </label>
          <input
            type="text"
            placeholder="Product name"
            className="form-control"
            name="product_name"
            required
            id="name"
          />
        </section>
        <section>
          <label htmlFor="product_price" className="my-2">
            Product price
          </label>
          <input
            type="number"
            min="1"
            placeholder="Product price"
            className="form-control"
            name="product_price"
            required
            id="price"
          />
        </section>
        <section className="form-switcher my-2" id="productType">
          <label htmlFor="type_switcher" className="my-2 fw-bold">
            Type Switcher
          </label>
          <Form.Group
            controlId="prouctType"
            onChange={(e) => handleFormTypeToggle(e)}
            className="my-2"
          >
            <Form.Select
              size="sm"
              name="product_type"
              required
              id="productType"
            >
              <option value="NULL">SELECT</option>
              <option value="0" id="DVD">
                DVD{" "}
              </option>
              <option value="1" id="Furniture">
                Furniture
              </option>
              <option value="2" id="Book">
                Book
              </option>
            </Form.Select>
          </Form.Group>
        </section>
        <section className="product-description-container">
          {formToRender && formToRender}
        </section>
        <section className="my-4 d-flex align-items-center justify-content-between">
          <button
            type="submit"
            className="btn btn-primary text-capitalize"
            onClick={(e) => {
              handleSubmitClick(e);
            }}
            disabled={buttonDisabled}
          >
            ADD
          </button>

          <button
            className="btn btn-danger text-capitalize"
            onClick={(e) => {
              handleSubmitClick(e);
            }}
          >
            <Link
              to="/"
              className="text-decoration-none text-light text-capitalize"
            >
              Cancel
            </Link>
          </button>
        </section>
      </form>
    </section>
  );
}
