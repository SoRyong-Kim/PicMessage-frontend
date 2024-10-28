// ContactForm.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import FormContainer from "./../components/ContactForm/FormContainer";
import TableContainer from "./../components/ContactForm/TableContainer";

const styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    maxWidth: "80%",
    margin: "50px auto",
    padding: "30px",
    backgroundColor: "#f5f5f5",
    borderRadius: "12px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    position: "relative",
  },
  formContainer: {
    flex: 1.5,
    marginRight: "30px",
  },
  tableContainer: {
    flex: 3,
  },
  completeButton: {
    position: "absolute",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#0d47a1",
    color: "white",
    padding: "15px 20px",
    fontSize: "18px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
  },
};

const ContactForm = () => {
  const [contacts, setContacts] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    phone: "",
    tag: "",
    tone: "",
  });

  const navigate = useNavigate();

  const handleComplete = () => {
    navigate("/", { state: { contacts } });
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <FormContainer
          contact={contact}
          setContact={setContact}
          setContacts={setContacts}
        />
      </div>
      <div style={styles.tableContainer}>
        <TableContainer contacts={contacts} setContacts={setContacts} />
      </div>
      <button style={styles.completeButton} onClick={handleComplete}>
        완료
      </button>
    </div>
  );
};

export default ContactForm;
