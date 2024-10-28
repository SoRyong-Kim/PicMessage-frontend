// ImageGeneration.js
import React from "react";
import { useLocation } from "react-router-dom";

const ImageGeneration = () => {
  const location = useLocation();
  const message = location.state?.message || ""; // 전달된 메시지를 받아옴

  return (
    <div>
      <h2>이미지 자동생성 페이지</h2>
      <textarea
        style={styles.textArea}
        value={message}
        readOnly // 수정 불가
      ></textarea>
    </div>
  );
};

const styles = {
  textArea: {
    width: "100%",
    height: "200px",
    padding: "10px",
    fontSize: "14px",
    border: "1px solid #ccc",
    borderRadius: "4px",
    resize: "vertical",
    marginTop: "20px",
    boxSizing: "border-box",
  },
};

export default ImageGeneration;
