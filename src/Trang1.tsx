import { products } from "./data/product";
import { useNavigate } from "react-router-dom";
import "./asset/CSS/trang1.css";

const Trang1 = () => {
  const navigate = useNavigate();

  return (
    <div className="product-page">
      <h2 className="page-title">🛍️ Danh sách sản phẩm</h2>

      <div className="product-grid">
        {products.map((p) => (
          <div
            key={p.id}
            className="product-card"
            onClick={() => navigate(`/sanpham/${p.id}`)}
          >
            <div className="product-image">
              <img src={p.image} alt={p.title} />
            </div>
            <div className="product-info">
              <h4>{p.title}</h4>
              <p className="price">${p.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trang1;
