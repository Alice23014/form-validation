import InfoList from "./components/infoList/InfoList";
import Form from "./components/form/Form";
import { useState } from "react";
import Modal from "./components/modal/Modal";

function App() {
  const [formData, setFormData] = useState([]);
  const [mistake, setMistake] = useState('false')

  console.log(formData);

  return (
    <section>
      <Form getFormData={setFormData}></Form>
      <InfoList formData={formData}></InfoList>
      <Modal></Modal>
    </section>
  );
}

export default App;
