// src/Chitietsanpham.js
import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { products } from "./data/product";
import "./asset/CSS/Chitietsanpham.css";

export default function Chitietsanpham() {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = products.find((p) => p.id === Number(id));

  if (!product) {
    return (
      <div className="not-found">
        <h3>Không tìm thấy sản phẩm!</h3>
        <button className="btn-back" onClick={() => navigate("/trang1")}>
          ⬅ Quay lại Trang 1
        </button>
      </div>
    );
  }

  return (
    <div className="product-detail-container">
      <button className="btn-back" onClick={() => navigate(-1)}>
        ⬅ Quay lại
      </button>

      <div className="product-detail-card">
        <div className="product-image">
          <img src={product.image} alt={product.title} />
        </div>

        <div className="product-info">
          <h2 className="product-title">{product.title}</h2>
          <p className="product-category">{product.category}</p>
          <p className="product-price">
            {Number(product.price).toLocaleString()} ₫
          </p>
          <p className="product-description">{product.description}</p>

          <button className="btn-add-cart">🛒 Thêm vào giỏ hàng</button>
        </div>
      </div>
    </div>
  );
}
