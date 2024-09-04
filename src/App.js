import InfoList from "./components/infoList/InfoList";
import Form from "./components/form/Form";
import { useState } from "react";
import Modal from "./components/modal/Modal";

function App() {
  const [formData, setFormData] = useState([]);
  const [mistake, setMistake] = useState(false);

  return (
    <section>
      <Form getFormData={setFormData} getMistake={setMistake} />
      <InfoList formData={formData} />
      {mistake && <Modal setMistake={setMistake} />}
    </section>
  );
}

export default App;
