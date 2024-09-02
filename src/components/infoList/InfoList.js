import "./InfoList.css";

function InfoList({ formData }) {
  return (
    <ul>
      {formData.map((item) => (
        <li key={item.id}>
          <p>{item.name}</p>
          <p>{item.number}</p>
        </li>
      ))}
    </ul>
  );
}

export default InfoList;
