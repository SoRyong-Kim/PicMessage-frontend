// TableContainer.js
import React from "react";

const styles = {
  title: {
    textAlign: "center",
    color: "#000", // 검은색 제목
    marginBottom: "20px",
    fontSize: "24px",
    fontWeight: "bold",
  },
  contactList: {
    maxHeight: "400px", // 5개의 항목 표시 높이
    overflowY: "scroll", // 스크롤 활성화
    borderRadius: "8px",
    border: "1px solid #ccc",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
  },
  th: {
    backgroundColor: "#1976d2",
    color: "white",
    padding: "14px",
    fontSize: "20px",
    textAlign: "left",
    position: "sticky",
    top: 0,
    zIndex: 1,
  },
  td: {
    fontSize: "18px",
    padding: "16px",
    backgroundColor: "#f5f5f5",
    borderBottom: "1px solid #bbdefb",
  },
  deleteButton: {
    backgroundColor: "#ef5350",
    color: "white",
    padding: "10px 16px",
    fontSize: "16px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s",
  },
};

const TableContainer = ({ contacts, setContacts }) => {
  const handleDelete = (index) => {
    setContacts((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2 style={styles.title}>연락처 목록</h2>
      <div style={styles.contactList}>
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>이름</th>
              <th style={styles.th}>번호</th>
              <th style={styles.th}>태그</th>
              <th style={styles.th}>특이사항</th>
              <th style={styles.th}>삭제</th>
            </tr>
          </thead>
          <tbody>
            {contacts.length > 0 ? (
              contacts.map((contact, index) => (
                <tr key={index}>
                  <td style={styles.td}>{contact.name}</td>
                  <td style={styles.td}>{contact.phone}</td>
                  <td style={styles.td}>{contact.tag}</td>
                  <td style={styles.td}>{contact.note}</td>
                  <td style={styles.td}>
                    <button
                      style={styles.deleteButton}
                      onClick={() => handleDelete(index)}
                    >
                      삭제
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" style={styles.td}>
                  아직 추가된 연락처가 없습니다.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableContainer;
