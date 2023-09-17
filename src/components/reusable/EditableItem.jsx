import React, { useContext } from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import DataContext from "../context/DataContext";

const EditableItem = ({ currency,cellData, handleEditItem }) => {

  return (
    <InputGroup>
      {currency !== undefined && (
        <InputGroup.Text>
          <span>{currency}</span>
        </InputGroup.Text>
      )}
      <Form.Control
        type={cellData.type}
        placeholder={cellData.placeholder}
        min={cellData.min}
        max={cellData.max}
        step={cellData.step}
        name={cellData.name}
        // id={cellData.id}
        value={cellData.value}
        onChange={handleEditItem}
        required
      />
    </InputGroup>
  );
};

export default EditableItem;
