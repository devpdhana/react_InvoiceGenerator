import React, { useContext } from "react";
import Table from "react-bootstrap/Table";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import ItemRow from "./ItemRow";

const InvoiceItem = ({
  items,
  setItems,
  currency,
  handleAddItem,
  handleDeleteItem,
  handleEditItem,
}) => {
  return (
    <div>
      <Table>
        <thead>
          <tr>
            <td className="fw-bold">Item</td>
            <td className="fw-bold">Quantity</td>
            <td className="fw-bold">price</td>
            <td className="text-center fw-bold">Action</td>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <ItemRow
              item={item}
              id={item.id}
              name={item.name}
              quantity={item.quantity}
              price={item.price}
              currency={currency}
              handleDeleteItem={handleDeleteItem}
              key={item.id}
              handleEditItem={handleEditItem}
            />
          ))}
        </tbody>
      </Table>
      <Button type="submit" onClick={handleAddItem} className="fw-bold">
        Add Item
      </Button>
    </div>
  );
};

export default InvoiceItem;
