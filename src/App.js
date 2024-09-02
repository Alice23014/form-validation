import InfoList from "./components/infoList/InfoList";
import Form from "./components/form/Form";
import { useState } from "react";

function App() {
  const [formData, setFormData] = useState([]);

  console.log(formData);

  return (
    <section>
      <Form getFormData={setFormData} formData={formData}></Form>
      <InfoList formData={formData}></InfoList>
    </section>
  );
}

export default App;
