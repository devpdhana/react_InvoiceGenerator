import React from "react";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const EditableItem = ({ currency, cellData, handleEditItem }) => {
  // console.log(cellData)

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
        id={cellData.id}
        value={cellData.value}
        onChange={handleEditItem}
        required
      />
    </InputGroup>
  );
};

export default EditableItem;
