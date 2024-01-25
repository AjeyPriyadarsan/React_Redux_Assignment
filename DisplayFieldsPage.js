// components/DisplayFieldsPage.js
import React from "react";
import { useSelector } from "react-redux";

const DisplayFieldsPage = () => {
  const fields = useSelector((state) => state.fields);

  return (
    <div>
      <h2>Display Fields for Data Collection</h2>
      {fields.map((field, index) => (
        <div key={index}>
          <p>Field Name: {field.fieldName}</p>
          <p>Field Type: {field.fieldType}</p>
          {/* Add additional information for each field type */}
          {field.fieldType === "Text" && (
            <input type="text" placeholder={`Enter ${field.fieldName}`} />
          )}
          {field.fieldType === "Date" && (
            <input type="date" placeholder={`Select ${field.fieldName}`} />
          )}
          {/* Add other field types if needed */}
        </div>
      ))}
    </div>
  );
};

export default DisplayFieldsPage;
