import { Form } from "react-bootstrap";

export const DVDFormDescription = () => {
  return (
    <section className="dvd-form-description my-2">
      <Form.Group controlId="size">
        <Form.Label className="small">Size {"(Mb)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter dvd size"
          name="product_size"
          id="size"
          required
        />
      </Form.Group>
    </section>
  );
};

export const FurnitureFormDescription = () => {
  return (
    <section className="furniture-form-description my-2">
      <Form.Group controlId="height">
        <Form.Label className="small">Height {"(CM)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter furniture height"
          name="product_height"
          required
          id="height"
        />
      </Form.Group>

      <Form.Group controlId="width">
        <Form.Label className="small">Width {"(CM)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter furniture width"
          name="product_width"
          id="width"
          required
        />
      </Form.Group>

      <Form.Group controlId="length">
        <Form.Label className="small">Length {"(CM)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter furniture length"
          name="product_length"
          id="length"
          required
        />
      </Form.Group>
    </section>
  );
};

export const BookFormDescription = () => {
  return (
    <section className="book-form-description my-2">
      <Form.Group controlId="weight">
        <Form.Label className="small">Weight {"(KG)"}</Form.Label>
        <Form.Control
          type="number"
          min="1"
          placeholder="Enter book weight"
          name="product_weight"
          required
          id="weight"
        />
      </Form.Group>
    </section>
  );
};
