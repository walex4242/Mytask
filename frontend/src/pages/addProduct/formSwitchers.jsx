import { Form } from "react-bootstrap";

export const DVDFormDescription = () => {
  return (
    <section className="dvd-form-description my-2">
      <Form.Group controlId="DVD">
        <Form.Label className="small">Size {"(Mb)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter dvd size"
          name="product_size"
          required
        />
      </Form.Group>
    </section>
  );
};

export const FurnitureFormDescription = () => {
  return (
    <section className="furniture-form-description my-2">
      <Form.Group controlId="Furniture">
        <Form.Label className="small">Height {"(CM)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter furniture height"
          name="product_height"
          required
        />
      </Form.Group>

      <Form.Group controlId="Furniture">
        <Form.Label className="small">Width {"(CM)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter furniture width"
          name="product_width"
          required
        />
      </Form.Group>

      <Form.Group controlId="Furniture">
        <Form.Label className="small">Length {"(CM)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter furniture length"
          name="product_length"
          required
        />
      </Form.Group>
    </section>
  );
};

export const BookFormDescription = () => {
  return (
    <section className="book-form-description my-2">
      <Form.Group controlId="Book">
        <Form.Label className="small">Weight {"(KG)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter book weight"
          name="product_weight"
          required
        />
      </Form.Group>
    </section>
  );
};
