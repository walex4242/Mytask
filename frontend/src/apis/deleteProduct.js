import $ from "jquery";

const handleProductDelete = (id) => {
  return $.ajax({
    type: "DELETE",
    url: `${process.env.REACT_APP_API_URL}/delete/${id}`,
    cache: false,
    contentType: false,
    processData: false,
  });
};

export default handleProductDelete;
