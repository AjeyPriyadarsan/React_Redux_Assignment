// App.js
import React from "react";
import { Provider } from "react-redux";
import store from "./store";
import AddFieldsPage from "./components/AddFieldsPage";
import DisplayFieldsPage from "./components/DisplayFieldsPage";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AddFieldsPage />
        <DisplayFieldsPage />
      </div>
    </Provider>
  );
}

export default App;
