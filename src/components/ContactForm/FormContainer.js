// FormContainer.js
import React from "react";

const styles = {
  title: {
    textAlign: "center",
    color: "#000", // 검은색 제목
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  contactForm: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
  },
  input: {
    padding: "15px",
    fontSize: "18px",
    border: "1px solid #bbdefb",
    borderRadius: "8px",
    backgroundColor: "white",
    transition: "border-color 0.3s",
  },
  button: {
    backgroundColor: "#1e88e5",
    color: "white",
    padding: "15px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

const FormContainer = ({ contact, setContact, setContacts }) => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    setContact((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setContacts((prev) => [...prev, contact]);
    setContact({ name: "", phone: "", tag: "", note: "" });
  };

  return (
    <div>
      <h2 style={styles.title}>연락처 추가</h2>
      <form onSubmit={handleSubmit} style={styles.contactForm}>
        <label>이름:</label>
        <input
          type="text"
          name="name"
          placeholder="이름 입력"
          value={contact.name}
          onChange={handleChange}
          style={styles.input}
        />
        <label>번호:</label>
        <input
          type="text"
          name="phone"
          placeholder="번호 입력"
          value={contact.phone}
          onChange={handleChange}
          style={styles.input}
        />
        <label>태그:</label>
        <input
          type="text"
          name="tag"
          placeholder="태그 입력"
          value={contact.tag}
          onChange={handleChange}
          style={styles.input}
        />
        <label>특이사항:</label>
        <input
          type="text"
          name="note"
          placeholder="특이사항 입력"
          value={contact.note}
          onChange={handleChange}
          style={styles.input}
        />
        <button type="submit" style={styles.button}>
          추가
        </button>
      </form>
    </div>
  );
};

export default FormContainer;
