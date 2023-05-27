import React, { useContext, useState, useEffect } from "react";
import { Product } from "./product";
import { ShopContext } from "../../context/shop-context";
import { Link } from "react-router-dom";
import handleProductDelete from "../../apis/deleteProduct";
import listAllProducts from "../../apis/listAllProducts";
import Spinner from "react-bootstrap/Spinner";
import Swal from "sweetalert2";

export const Shop = () => {
  const { itemsArray } = useContext(ShopContext);
  const [dataArrived, setDataArrived] = useState(false);
  const [allProducts, setAllProducts] = useState([]);
  const [dataFound, setDataFound] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();

    try {
      const deletePromises = itemsArray.map(async (item) => {
        const response = await handleProductDelete(item);
        if (response.message.includes("successfully")) {
          Swal.fire({
            title: "Deleted",
            icon: "success",
            text: "Product deleted successfully",
          });
          return true;
        } else {
          Swal.fire({
            title: "Error",
            text: "An error occurred while deleting product!",
          });
          return false;
        }
      });

      const deleteResults = await Promise.all(deletePromises);

      if (deleteResults.includes(true)) {
        const updatedProducts = await listAllProducts();
        setAllProducts(updatedProducts.data);
      }
    } catch (error) {
      // Swal.fire({
      //   title: "Error",
      //   text: "An error occurred while deleting product!",
      // });
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const data = await listAllProducts();
      setDataArrived(true);
      setDataFound(data.data.length > 0);
      setAllProducts(data.data);
    } catch (error) {
      Swal.fire({
        title: "Error",
        text: "An error occurred while fetching products!",
      });
      console.log(error);
    }
  };

  const products =
    allProducts &&
    allProducts.map((product, index) => {
      const {
        id,
        product_name,
        product_price,
        product_type,
        product_size,
        product_height,
        product_width,
        product_length,
        product_weight,
      } = product;

      return (
        <Product
          key={id}
          id={id}
          productName={product_name}
          productPrice={product_price}
          productType={product_type}
          productHeight={product_height}
          productWidth={product_width}
          productLength={product_length}
          productSize={product_size}
          productWeight={product_weight}
        />
      );
    });

  return (
    <form
      className="shop"
      method="POST"
      id="allProductForm"
      onSubmit={(e) => handleClick(e)}
    >
      <div className="shopTitle d-flex align-items-center justify-content-end p-2 my-3">
        {dataFound ? (
          <div className="d-flex align-items-center justify-content-end p-2 my-3">
            <button
              className="btn btn-danger text-capitalize mx-2"
              onClick={(e) => handleClick(e)}
              id="delete-product-btn"
            >
              MASS DELETE
            </button>

            <button
              className="btn btn-primary text-capitalize mx-2"
              onClick={(e) => handleClick(e)}
            >
              <Link to="/create" className="text-decoration-none text-light">
                ADD
              </Link>
            </button>
          </div>
        ) : (
          <button
            className="btn btn-primary text-capitalize"
            onClick={(e) => handleClick(e)}
          >
            <Link to="/create" className="text-decoration-none text-light">
              ADD
            </Link>
          </button>
        )}
      </div>

      <div className="all-products-container d-flex align-items-center flex-md-row justify-content-around flex-column">
        {!dataArrived ? (
          <div className="my-5 p-5 d-flex align-items-center justify-content-center m-auto">
            <Spinner animation="border" variant="secondary" />
          </div>
        ) : dataFound ? (
          products
        ) : (
          <span className="text-center my-5 py-3">No Products Found!</span>
        )}
      </div>
    </form>
  );
};
