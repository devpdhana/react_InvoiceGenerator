import React, { useContext } from "react";

import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import { BiTrash } from "react-icons/bi";

import EditableItem from "./reusable/EditableItem";

import DataContext from "./context/DataContext";

const ItemRow = ({id,name,item,quantity,price,currency,handleDeleteItem,handleEditItem}) => {

  return (
    <tr>
      <td>
        <EditableItem
          handleEditItem={(event) => handleEditItem(event, id, "name")}
          cellData={{
            placeholder: "Item name",
            type: "text",
            name: "name",
            id: id,
            value: name,
          }}
        />
      </td>
      <td>
        <EditableItem
          handleEditItem={(event) => handleEditItem(event, id, "quantity")}
          cellData={{
            type: "number",
            name: "quantity",
            min: "1",
            id: id,
            value: quantity,
          }}
        />
      </td>
      <td>
        <EditableItem
          currency={currency}
          handleEditItem={(event) => handleEditItem(event, id, "price")}
          cellData={{
            type: "number",
            min: "0.01",
            step: "0.01",
            name: "price",
            id: id,
            value: price,
          }}
        />
      </td>

      <td>
        <BiTrash
          className="text-white btn btn-danger"
          id={item.id}
          style={{ height: "35px", width: "35", padding: "5.5" }}
          onClick={() => handleDeleteItem(item)}
        />
      </td>
    </tr>
  );
};

export default ItemRow;
