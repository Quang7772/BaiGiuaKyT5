import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./asset/CSS/listproduct_sp.css"; // ⭐ Thêm CSS riêng

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating_rate?: number;
  rating_count?: number;
}

const ListProducts_SP: React.FC = () => {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from<Product>("product1")
          .select("*")
          .order("id", { ascending: true });

        if (error) throw error;
        setListProduct(data || []);
      } catch (err: any) {
        console.error("❌ Lỗi khi lấy dữ liệu:", err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) return <p className="loading">⏳ Đang tải sản phẩm...</p>;

  return (
    <div className="product-wrapper">
      <h2 className="product-title">🛍️ Danh sách sản phẩm</h2>

      {listProduct.length === 0 ? (
        <p className="empty-text">📭 Không có sản phẩm nào!</p>
      ) : (
        <div className="product-grid">
          {listProduct.map((p) => (
            <div
              key={p.id}
              className="product-card"
              onClick={() => navigate(`/detail/${p.id}`)}
            >
              <div className="image-box">
                <img src={p.image} alt={p.title} />
              </div>

              <div className="info-box">
                <h4 className="name">{p.title}</h4>
                <p className="price">${p.price.toFixed(2)}</p>
                <p className="rating">
                  ⭐ {p.rating_rate ?? 0} ({p.rating_count ?? 0} đánh giá)
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default ListProducts_SP;
