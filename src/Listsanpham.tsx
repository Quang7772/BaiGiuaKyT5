import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./asset/CSS/listsanpham.css";

interface Product {
  id: string;
  title: string;
  price: number;
  image: string;
}

const Listsanpham: React.FC = () => {
  const [listsanpham, setListProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  useEffect(() => {
    const LayDulieutuBackend = async () => {
      try {
        const res = await axios.get<Product[]>(
          "https://68f97a99ef8b2e621e7c302b.mockapi.io/products"
        );
        if (Array.isArray(res.data) && res.data.length > 0) {
          setListProduct(res.data);
        } else {
          setError("Không có dữ liệu sản phẩm!");
        }
      } catch (err) {
        setError("Không thể tải dữ liệu từ máy chủ!");
      } finally {
        setLoading(false);
      }
    };
    LayDulieutuBackend();
  }, []);

  if (loading) return <p className="loading">Đang tải dữ liệu...</p>;
  if (error) return <p className="error">{error}</p>;

  return (
    <div className="product-container">
      <h2 className="title">✨ Danh sách sản phẩm ✨</h2>
      <div className="product-grid">
        {listsanpham.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => navigate(`/sanpham/${p.id}`)}
          >
            <div className="image-wrapper">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="info">
              <h4 className="name">{p.title}</h4>
              <p className="price">{p.price.toLocaleString()} ₫</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Listsanpham;
