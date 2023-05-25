import $ from "jquery";

const handleSubmit = (e) => {
  e.preventDefault();
  const form = document.getElementById("form");
  const formData = new FormData(form);

  return $.ajax({
    type: "POST",
    url: `${process.env.REACT_APP_API_URL}/create`,
    data: formData,
    cache: false,
    contentType: false,
    processData: false,
  });
};

export default handleSubmit;
