import $ from "jquery";

const listAllProducts = () => {
  return $.ajax({
    type: "GET",
    url: `${process.env.REACT_APP_API_URL}/all`,
    cache: false,
    contentType: false,
    processData: false,
  });
};

export default listAllProducts;
