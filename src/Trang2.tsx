import React from "react";
import "./asset/CSS/trang2.css";

const Trang2 = () => {
  const dssv = [
    {
      id: 1,
      hoten: "Nguyễn Văn An",
      lop: "K19",
      email: "abc@1234.edu.vn",
      anh: "https://htmediagroup.vn/wp-content/uploads/2022/11/Anh-58-copy-min.jpg.webp",
    },
    {
      id: 2,
      hoten: "Trần Văn Bình",
      lop: "K19",
      email: "abc@1234.edu.vn",
      anh: "https://htmediagroup.vn/wp-content/uploads/2022/08/Anh-cong-so-1-min.jpg.webp",
    },
    {
      id: 3,
      hoten: "Hà Thị Hiền",
      lop: "K19",
      email: "abc@cuong.edu.vn",
      anh: "https://smilemedia.vn/wp-content/uploads/2022/08/Concept-chup-anh-ca-nhan-chan-dung.jpg",
    },
    {
      id: 4,
      hoten: "Nguyễn Kiều Hải My",
      lop: "K19",
      email: "abc@cuong.edu.vn",
      anh: "https://studiochupanhdep.com//Upload/Images/Album/anh-beauty-01.jpg",
    },
  ];

  return (
    <div className="student-page">
      <h2 className="student-title">DANH SÁCH SINH VIÊN</h2>
      <div className="student-grid">
        {dssv.map((sv) => (
          <div key={sv.id} className="student-card">
            <div className="student-image">
              <img src={sv.anh} alt={sv.hoten} />
            </div>
            <div className="student-info">
              <h3>{sv.hoten}</h3>
              <p className="lop">Lớp: {sv.lop}</p>
              <p>{sv.email}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang2;
