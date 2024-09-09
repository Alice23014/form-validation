import "./InfoList.css";

function InfoList({ formData, setFormData }) {
  const handleDelete = (id) => {
    setFormData(formData.filter((currentItem) => currentItem.id !== id));
  };
  return (
    <ul>
      {formData.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.number}</p>
          <button type="button" onClick={() => handleDelete(item.id)}>
            Удалить элемент
          </button>
        </li>
      ))}
    </ul>
  );
}

export default InfoList;
