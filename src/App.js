import InfoList from "./components/infoList/InfoList";
import Form from "./components/form/Form";
import { useState } from "react";
import Modal from "./components/modal/Modal";

function App() {
  const [formData, setFormData] = useState([]);
  const [mistake, setMistake] = useState(false);
  const [mistakeText, setMistakeText] = useState("");

  return (
    <section>
      <Form
        getFormData={setFormData}
        getMistake={setMistake}
        getMistakeText={setMistakeText}
      />
      <InfoList formData={formData} setFormData={setFormData} />
      {mistake && <Modal setMistake={setMistake} mistakeText={mistakeText} />}
    </section>
  );
}

export default App;
