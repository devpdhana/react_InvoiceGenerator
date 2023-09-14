import React, { useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InvoiceItem from "./InvoiceItem";

const InvoiceForm = () => {
  const [invoiceNumber, setInvoiceNumber] = useState(1);
  const [taxRate, setTaxRate] = useState();
  const [taxAmount, setTaxAmount] = useState();
  const [discountRate, setDiscountRate] = useState();
  const [discountAmount, setDiscountAmount] = useState();
  const [customurName, setCustomurName] = useState("");
  const [customurEmail, setCustomurEmail] = useState("");
  const [customurAddress, setCustomurAddress] = useState("");

  //    const [itemName,setItemName] = useState('ddddd')

  //    setItemName=(console.log('set'))

  const [items, setItems] = useState([
    {
      id: 1,
      name: "",
      price: "1.00",
      quantity: 1,
    },
  ]);

  const handleAddItem = () => {
    const id = items.length + 1;

    const newItem = {
      id,
      name: "",
      price: "1.00",
      quantity: 1,
    };

    const newItems = [...items, newItem];
    setItems(newItems);
    console.log(id);
  };

  const handleDeleteItem = (item) => {
    console.log(item.id);
    const newItems = items.filter((data) => data.id !== item.id);
    setItems(newItems);
  };

  const handleEditItem = (event) => {
    const editedItem = {
      id: event.target.id,
      name: event.target.name,
      value: event.target.value,
    };
    console.log(editedItem);

    const newItems = items.map((item) => {
      for (var key in item) {
        if (item.id === editedItem.id) {
          item[key] === editedItem.value;
        }
      }
      return item;
    });
    console.log(newItems);
    setItems(newItems);
  };

  const currency = "$";
  return (
    <di>
      <Form onSubmit={(e) => e.preventDefault()}>
        <Row>
          <Col md={8} lg={9}>
            <Card className="p-4 p-xl-5 my-3 my-xl-4">
              <div className="d-flex flex-row justify-content-between mb-3">
                <div>
                  <span className="fw-bold">Current Date:</span>
                  <span>{new Date().toLocaleDateString()}</span>
                </div>
                <div>
                  <span className="fw-bold">Invoice Number:</span>
                  <span>{invoiceNumber}</span>
                </div>
              </div>
              <hr />
              <Row>
                <Col>
                  <Form.Label className="fw-bold">Customur Details</Form.Label>
                  <Form.Control
                    className="mt-3 bg-light"
                    type="text"
                    placeholder="name"
                    value={customurName}
                    onChange={(e) => setCustomurName(e.target.value)}
                  />
                  <Form.Control
                    className="mt-3"
                    type="text"
                    placeholder="email"
                    value={customurEmail}
                    onChange={(e) => setCustomurEmail(e.target.value)}
                  />
                  <Form.Control
                    className="mt-3"
                    type="text"
                    placeholder="address"
                    value={customurAddress}
                    onChange={(e) => setCustomurAddress(e.target.value)}
                  />
                </Col>
                <Col>
                  <Form.Label className="fw-bold">Vendor Details</Form.Label>
                  <Form.Control
                    className="mt-3"
                    type="text"
                    value={"Sathish xerox"}
                    disabled={true}
                  />
                  <Form.Control
                    className="mt-3"
                    type="text"
                    value={"sathish@gmail.com"}
                    disabled={true}
                  />
                  <Form.Control
                    className="mt-3"
                    type="text"
                    value={"Tamilnadu"}
                    disabled={true}
                  />
                </Col>
              </Row>
              <InvoiceItem
                className="mt-3"
                items={items}
                setItems={setItems}
                currency={currency}
                handleAddItem={handleAddItem}
                handleDeleteItem={handleDeleteItem}
                handleEditItem={handleEditItem}
              />
            </Card>
          </Col>
        </Row>
      </Form>
    </di>
  );
};

export default InvoiceForm;
