// components/AddFieldsPage.js
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addField } from "../actions/fieldActions";

const AddFieldsPage = () => {
  const [fields, setFields] = useState([]);
  const [fieldName, setFieldName] = useState("");
  const [fieldType, setFieldType] = useState("Text");
  const [maxFieldsReached, setMaxFieldsReached] = useState(false);
  const dispatch = useDispatch();

  const handleAddField = () => {
    if (fields.length < 4) {
      const newField = { fieldName, fieldType };
      setFields([...fields, newField]);
      setFieldName("");
      setFieldType("Text");
    } else {
      setMaxFieldsReached(true);
    }
  };

  const handleSaveFields = () => {
    // Save fields to Redux
    dispatch(addField(fields));
    // Clear fields after saving
    setFields([]);
  };

  return (
    <div>
      <h2>Add Fields</h2>
      <div>
        <label>Select Category:</label>
        <select>
          <option value="Student">Student</option>
          <option value="Self-Employee">Self-Employee</option>
          <option value="Business">Business</option>
        </select>
      </div>

      {fields.map((field, index) => (
        <div key={index}>
          <p>Field Name: {field.fieldName}</p>
          <p>Field Type: {field.fieldType}</p>
          {/* Add validation and field data input here */}
        </div>
      ))}
      <br />
      <div>
        <label>Field Name:</label>
        <input
          type="text"
          value={fieldName}
          onChange={(e) => setFieldName(e.target.value)}
        />
      </div>
      <br />
      <div>
        <label>Field Type:</label>
        <select
          value={fieldType}
          onChange={(e) => setFieldType(e.target.value)}
        >
          <option value="Text">Text</option>
          <option value="Dropdown">Dropdown</option>
          <option value="Date">Date</option>
        </select>
      </div>
      <br />
      <button onClick={handleAddField}>Add Field</button>
      <br />
      <br />
      <button onClick={handleSaveFields}>Save Fields</button>
      <br />
      {maxFieldsReached && <p>Maximum number of fields reached.</p>}
    </div>
  );
};

export default AddFieldsPage;
