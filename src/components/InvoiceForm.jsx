import React, { useContext, useState } from "react";

import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import InvoiceItem from "./InvoiceItem";
import { Button, InputGroup } from "react-bootstrap";
import InvoiceModel from "./reusable/InvoiceModel";


const InvoiceForm = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [invoiceNumber, setInvoiceNumber] = useState(1);
    const [tax, setTax] = useState(0);
    const [taxAmount, setTaxAmount] = useState();
    const [discount, setDiscount] = useState(0);
    const [discountAmount, setDiscountAmount] = useState();
    const [customurName, setCustomurName] = useState("");
    const [customurEmail, setCustomurEmail] = useState("");
    const [customurAddress, setCustomurAddress] = useState("");

    const [subTotal, setSubTotal] = useState("1.00");
    // const [total,setTotal] = useState('0.00')

    //    const [itemName,setItemName] = useState('ddddd')

    //    setItemName=(console.log('set'))

    const [items, setItems] = useState([
      {
        id: 1,
        name: "",
        price: 1.0,
        quantity: 1,
      },
    ]);

    const subtotal = items.reduce((prev, curr) => {
      if (curr.name.trim().length > 0) {
        return prev + curr.price * curr.quantity;
      }
      return prev;
    }, 0);

    // const sub = items.map((item)=>{
    //   return item.price * item.quantity;
    // })

    const subCalculate = () => {
      let totalCost = 0;
      for (const item of items) {
        totalCost += item.price * item.quantity;
      }
      return totalCost;
    };
    const sub = subCalculate();

    const taxRate = (tax * sub) / 100;
    const discountRate = (discount * sub) / 100;
    const total = sub - discountRate + taxRate;

    const handleAddItem = () => {
      const id = items.length + 1;

      const newItem = {
        id,
        name: "",
        price: 1,
        quantity: 1,
      };

      const newItems = [...items, newItem];
      setItems(newItems);
    };

    const handleDeleteItem = (item) => {
      console.log(item.id);
      const newItems = items.filter((data) => data.id !== item.id);
      setItems(newItems);
    };

    // const handleEditItem = (event) => {
    //   const editedItem = {
    //     id: event.target.id,
    //     name: event.target.name,
    //     value: event.target.value,
    //   };
    //   console.log(editedItem);

    //   const newItems = items.map((item) => {
    //     for (var key in item) {
    //       console.log(item.id === editedItem.id);
    //       if (item.id === editedItem.id) {
    //         item[key] === editedItem.value;
    //       }
    //     }
    //     return item;
    //   });

    //   console.log(newItems);
    //   setItems(newItems);
    // };

    const handleEditItem = (event, itemId, field) => {
      const updatedItems = items.map((item) => {
        if (item.id === itemId) {
          return {
            ...item,
            [field]: event.target.value,
          };
        }
        return item;
      });

      setItems(updatedItems);
    };

    const currency = "$";
  return (
    // <DataProvider>
      <div>
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
                    <Form.Label className="fw-bold">
                      Customur Details
                    </Form.Label>
                    <Form.Control
                      name="name"
                      className="mt-3 bg-light"
                      type="text"
                      placeholder="name"
                      value={customurName}
                      onChange={(e) => setCustomurName(e.target.value)}
                      required={true}
                    />
                    <Form.Control
                      name="email"
                      className="mt-3"
                      type="text"
                      placeholder="email"
                      value={customurEmail}
                      onChange={(e) => setCustomurEmail(e.target.value)}
                      required={true}
                    />
                    <Form.Control
                      name="address"
                      className="mt-3"
                      type="text"
                      placeholder="address"
                      value={customurAddress}
                      onChange={(e) => setCustomurAddress(e.target.value)}
                      required={true}
                    />
                  </Col>
                  <Col>
                    <Form.Label className="fw-bold">Vendor Details</Form.Label>
                    <Form.Control
                      name="name"
                      className="mt-3"
                      type="text"
                      value={"Sathish xerox"}
                      disabled={true}
                    />
                    <Form.Control
                      name="email"
                      className="mt-3"
                      type="text"
                      value={"sathish@gmail.com"}
                      disabled={true}
                    />
                    <Form.Control
                      name="address"
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

                <Row className="mt-4 justify-content-end">
                  <Col lg={6}>
                    <div className="d-flex flex-row align-items-start justify-content-between">
                      <span className="fw-bold">Subtotal:</span>
                      <span>
                        {currency}
                        {sub}
                      </span>
                    </div>
                    <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                      <span className="fw-bold">Discount:</span>
                      <span>
                        <span className="small ">({discount || 0}%)</span>
                        {currency}
                        {discountRate || 0}
                      </span>
                    </div>
                    <div className="d-flex flex-row align-items-start justify-content-between mt-2">
                      <span className="fw-bold">Tax:</span>
                      <span>
                        <span className="small ">({tax || 0}%)</span>
                        {currency}
                        {taxRate || 0}
                      </span>
                    </div>
                    <hr />
                    <div
                      className="d-flex flex-row align-items-start justify-content-between"
                      style={{
                        fontSize: "1.125rem",
                      }}
                    >
                      <span className="fw-bold">Total:</span>
                      <span className="fw-bold">
                        {currency}
                        {total || 0}
                      </span>
                    </div>
                  </Col>
                </Row>
              </Card>
            </Col>

            <Col md={4} lg={3}>
              <div className="sticky-top pt-md-3 pt-xl-4">
                <Button
                  variant="primary"
                  type="submit"
                  className="d-block w-100"
                  onClick={() => setIsOpen(true)}
                >
                  Review Invoice
                </Button>
                <Form.Group className="mb-5 mt-3">
                  <Form.Label className="fw-bold">Currency:</Form.Label>
                  <Form.Select
                    // onChange={(event) =>
                    //   this.onCurrencyChange({ currency: event.target.value })
                    // }
                    className="btn btn-light my-1"
                    name="currency"
                    aria-label="Change Currency"
                  >
                    <option value="$">USD (United States Dollar)</option>
                    <option value="£">GBP (British Pound Sterling)</option>
                    <option value="¥">JPY (Japanese Yen)</option>
                    <option value="$">CAD (Canadian Dollar)</option>
                    <option value="$">AUD (Australian Dollar)</option>
                    <option value="$">SGD (Signapore Dollar)</option>
                    <option value="¥">CNY (Chinese Renminbi)</option>
                    <option value="₿">BTC (Bitcoin)</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label className="fw-bold">Tax rate:</Form.Label>
                  <InputGroup className="my-1 flex-nowrap">
                    <Form.Control
                      name="taxRate"
                      type="number"
                      value={tax}
                      onChange={(event) => setTax(event.target.value)}
                      className="bg-white border"
                      placeholder="0.0"
                      min="0.00"
                      step="0.01"
                      max="100.00"
                    />
                    <InputGroup.Text className="bg-light fw-bold text-secondary small">
                      %
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
                <Form.Group className="my-3">
                  <Form.Label className="fw-bold">Discount rate:</Form.Label>
                  <InputGroup className="my-1 flex-nowrap">
                    <Form.Control
                      name="discountRate"
                      type="number"
                      value={discount}
                      onChange={(event) => setDiscount(event.target.value)}
                      className="bg-white border"
                      placeholder="0.0"
                      min="0.00"
                      step="0.01"
                      max="100.00"
                    />
                    <InputGroup.Text className="bg-light fw-bold text-secondary small">
                      %
                    </InputGroup.Text>
                  </InputGroup>
                </Form.Group>
              </div>
            </Col>

            <InvoiceModel
              isOpen={isOpen}
              billFrom={"Sathish"}
              invoiceNumber={invoiceNumber}
              currency={currency}
              total={total}
              items={items}
              customurName={customurName}
              customurEmail={customurEmail}
              customurAddress={customurAddress}
              subTotal={subTotal}
              taxRate={taxRate}
              discountRate={discountRate}
              setIsOpen={setIsOpen}
            />
          </Row>
        </Form>
      </div>
    
  );
};

export default InvoiceForm;
