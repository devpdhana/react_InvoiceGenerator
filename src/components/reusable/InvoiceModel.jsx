import React from 'react'
import { Col, Modal, Row, Table } from 'react-bootstrap';

const InvoiceModel = ({
  isOpen,
  billFrom,
  invoiceNumber,
  currency,
  items,
  customurName,
  customurEmail,
  customurAddress,
  subTotal,
  taxRate,
  discountRate,
  total,
  setIsOpen
}) => {
  return (
    <div>
      <div onClick={()=>setIsOpen(false)}>
        <Modal show={isOpen} onHide={isOpen} size="lg" centered>
          <div id="invoiceCapture">
            <div className="d-flex flex-row justify-content-between align-items-start bg-light w-100 p-4">
              <div className="w-100">
                <h4 className="fw-bold my-2">{billFrom || "Sathish Kumar"}</h4>
                <h6 className="fw-bold text-secondary mb-1">
                  Invoice #: {invoiceNumber || ""}
                </h6>
              </div>
              <div className="text-end ms-4">
                <h6 className="fw-bold mt-1 mb-2">Amount&nbsp;Due:</h6>
                <h5 className="fw-bold text-secondary">
                  {" "}
                  {currency} {total}
                </h5>
              </div>
            </div>
            <div className="p-4">
              <Row className="mb-4">
                <Col md={4}>
                  <div className="fw-bold">Billed to:</div>
                  <div>{customurName || ""}</div>
                  <div>{customurEmail || ""}</div>
                  <div>{customurAddress || ""}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold">Billed From:</div>
                  <div>{"SathisKumar" || ""}</div>
                  <div>{"smssma143@gmail.com" || ""}</div>
                  <div>{"TamilNadu" || ""}</div>
                </Col>
                <Col md={4}>
                  <div className="fw-bold mt-2">Date Of Issue:</div>
                  <div>{new Date().toLocaleDateString || ""}</div>
                </Col>
              </Row>
              <Table className="mb-0">
                <thead>
                  <tr>
                    <th>QTY</th>
                    <th>DESCRIPTION</th>
                    <th className="text-end">PRICE</th>
                    <th className="text-end">AMOUNT</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, i) => {
                    return (
                      <tr id={i} key={i}>
                        <td style={{ width: "70px" }}>{item.quantity}</td>
                        <td>{item.name}</td>
                        <td className="text-end" style={{ width: "100px" }}>
                          {currency} {item.price}
                        </td>
                        <td className="text-end" style={{ width: "100px" }}>
                          {currency} {item.price * item.quantity}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </Table>
              <Table>
                <tbody>
                  <tr>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                    <td>&nbsp;</td>
                  </tr>
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: "100px" }}>
                      SUBTOTAL
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                      {currency} {subTotal}
                    </td>
                  </tr>
                  {taxRate != 0.0 && (
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{ width: "100px" }}>
                        TAX
                      </td>
                      <td className="text-end" style={{ width: "100px" }}>
                        {currency} {taxRate}
                      </td>
                    </tr>
                  )}
                  {discountRate != 0.0 && (
                    <tr className="text-end">
                      <td></td>
                      <td className="fw-bold" style={{ width: "100px" }}>
                        DISCOUNT
                      </td>
                      <td className="text-end" style={{ width: "100px" }}>
                        {currency} {discountRate}
                      </td>
                    </tr>
                  )}
                  <tr className="text-end">
                    <td></td>
                    <td className="fw-bold" style={{ width: "100px" }}>
                      TOTAL
                    </td>
                    <td className="text-end" style={{ width: "100px" }}>
                      {currency} {total}
                    </td>
                  </tr>
                </tbody>
              </Table>
            </div>
          </div>
          <div className="pb-4 px-4">
            {/* <Row>
              <Col md={6}>
                <Button
                  variant="primary"
                  className="d-block w-100"
                  onClick={GenerateInvoice}
                >
                  <BiPaperPlane
                    style={{ width: "15px", height: "15px", marginTop: "-3px" }}
                    className="me-2"
                  />
                  Send Invoice
                </Button>
              </Col>
              <Col md={6}>
                <Button
                  variant="outline-primary"
                  className="d-block w-100 mt-3 mt-md-0"
                  onClick={GenerateInvoice}
                >
                  <BiCloudDownload
                    style={{ width: "16px", height: "16px", marginTop: "-3px" }}
                    className="me-2"
                  />
                  Download Copy
                </Button>
              </Col>
            </Row> */}
          </div>
        </Modal>
        <hr className="mt-4 mb-3" />
      </div>
    </div>
  );
};

export default InvoiceModel