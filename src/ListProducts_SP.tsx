import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./asset/CSS/ProductList.css";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  category?: string;
  rating_rate?: number;
  rating_count?: number;
}

const ListProducts_SP: React.FC = () => {
  const [listProduct, setListProduct] = useState<Product[]>([]);
  const [featured, setFeatured] = useState<Product[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [activeCategory, setActiveCategory] = useState<string>("all");

  const navigate = useNavigate();

  // ==================== FETCH TOÀN BỘ =====================
  const fetchProducts = async () => {
    let query = supabase.from<Product>("product1").select("*");

    // Nếu người dùng chọn category
    if (activeCategory !== "all") {
      query = query.eq("category", activeCategory);
    }

    const { data, error } = await query.order("id", { ascending: true });

    if (!error && data) setListProduct(data);
  };

  // ============== LẤY SẢN PHẨM NỔI BẬT ==================
  const fetchFeatured = async () => {
    const { data, error } = await supabase
      .from<Product>("product1")
      .select("*")
      .gte("rating_rate", 4.5)
      .order("rating_rate", { ascending: false });

    if (!error && data) setFeatured(data);
  };

  // Chạy mỗi lần đổi category
  useEffect(() => {
    const loadAll = async () => {
      await fetchProducts();
      await fetchFeatured();
      setLoading(false);
    };
    loadAll();
  }, [activeCategory]);

  if (loading) {
    return (
      <div
        style={{ textAlign: "center", marginTop: "50px", fontSize: "1.3rem" }}
      >
        ⏳ Đang tải sản phẩm...
      </div>
    );
  }

  // ==================== DANH MỤC ====================
  const categories = [
    { key: "all", label: "Tất cả" },
    { key: "apple", label: "Apple" },
    { key: "samsung", label: "Samsung" },
    { key: "xiaomi", label: "Xiaomi" },
    { key: "oppo", label: "Oppo" },
    { key: "vivo", label: "Vivo" },
  ];

  return (
    <div
      style={{
        padding: "40px 20px",
        backgroundColor: "#f8f9fa",
        minHeight: "100vh",
      }}
    >
      {/* ==================== DANH MỤC CELL PHONES STYLE ==================== */}
      <div
        style={{
          display: "flex",
          gap: "16px",
          justifyContent: "center",
          marginBottom: "35px",
          flexWrap: "wrap",
        }}
      >
        {categories.map((c) => (
          <button
            key={c.key}
            onClick={() => setActiveCategory(c.key)}
            style={{
              padding: "10px 20px",
              borderRadius: "30px",
              border: "none",
              cursor: "pointer",
              fontWeight: 600,
              backgroundColor: activeCategory === c.key ? "#e63946" : "#fff",
              color: activeCategory === c.key ? "#fff" : "#222",
              boxShadow: "0 3px 8px rgba(0,0,0,0.12)",
              transition: "0.2s",
            }}
          >
            {c.label}
          </button>
        ))}
      </div>

      {/* ==================== SẢN PHẨM NỔI BẬT ==================== */}
      {featured.length > 0 && (
        <div style={{ marginBottom: "50px" }}>
          <h2
            style={{
              fontSize: "2rem",
              fontWeight: 700,
              textAlign: "center",
              marginBottom: "20px",
              color: "#222",
            }}
          >
            ⭐ Sản phẩm nổi bật
          </h2>

          <div
            style={{
              display: "flex",
              overflowX: "auto",
              gap: "20px",
              paddingBottom: "12px",
              scrollbarWidth: "thin",
            }}
          >
            {featured.map((p) => (
              <div
                key={p.id}
                onClick={() => navigate(`/detail/${p.id}`)}
                style={{
                  minWidth: "220px",
                  background: "#fff",
                  borderRadius: "12px",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                  cursor: "pointer",
                  transition: "0.25s",
                }}
              >
                <div
                  style={{
                    height: "180px",
                    background: "#f3f3f3",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={p.image}
                    alt={p.title}
                    style={{ height: "100%", objectFit: "cover" }}
                  />
                </div>

                <div style={{ padding: "12px" }}>
                  <h4 style={{ fontWeight: 600, marginBottom: "6px" }}>
                    {p.title}
                  </h4>
                  <p style={{ fontWeight: 700, color: "#e63946" }}>
                    {p.price.toLocaleString("vi-VN")}₫
                  </p>
                  <p style={{ fontSize: "0.9rem", color: "#666" }}>
                    ⭐ {p.rating_rate} ({p.rating_count})
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* ==================== DANH SÁCH sản phẩm ==================== */}
      <h2
        style={{
          textAlign: "center",
          fontSize: "2rem",
          marginBottom: "30px",
          color: "#333",
          fontWeight: 700,
        }}
      >
        🛍️ Danh sách sản phẩm
      </h2>

      {listProduct.length === 0 ? (
        <p style={{ textAlign: "center", fontSize: "1.1rem", color: "#555" }}>
          📭 Không có sản phẩm nào!
        </p>
      ) : (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
            gap: "24px",
            maxWidth: "1200px",
            margin: "0 auto",
          }}
        >
          {listProduct.map((p) => (
            <div
              key={p.id}
              onClick={() => navigate(`/detail/${p.id}`)}
              style={{
                borderRadius: "14px",
                overflow: "hidden",
                backgroundColor: "#fff",
                cursor: "pointer",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                transition: "all 0.25s ease",
              }}
            >
              <div
                style={{
                  height: "230px",
                  backgroundColor: "#f3f3f3",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  overflow: "hidden",
                }}
              >
                <img src={p.image} alt={p.title} style={{ height: "100%" }} />
              </div>

              <div style={{ padding: "16px" }}>
                <h4
                  style={{
                    fontSize: "1.05rem",
                    fontWeight: 600,
                    color: "#222",
                    marginBottom: "8px",
                  }}
                >
                  {p.title}
                </h4>

                <p
                  style={{
                    color: "#e63946",
                    fontWeight: 700,
                    fontSize: "1.1rem",
                  }}
                >
                  {p.price.toLocaleString("vi-VN")}₫
                </p>

                <p style={{ color: "#666", fontSize: "0.9rem" }}>
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
