import React, { useState } from "react";
import { Button } from "react-bootstrap";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
const Add = ({ updateValue }) => {
  const [inputValue, setInputValue] = useState("");
  const handleAdd = () => {
    updateValue(inputValue);

    setInputValue("");
  };
  return (
    <div>
      <Container className="p-3" style={{ width: "50%" }} align="center">
        <Card body className="m-3">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Enter your task"
          />
          <Button variant="primary" onClick={handleAdd}>
            Add
          </Button>
        </Card>
      </Container>
    </div>
  );
};
export default Add;
