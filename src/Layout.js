import "./asset/CSS/layout.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import React, { useEffect, useState } from "react";

const Layout = () => {
  const [user, setUser] = useState < any > null;
  const navigate = useNavigate();

  useEffect(() => {
    const userData = localStorage.getItem("user");
    if (userData) setUser(JSON.parse(userData));
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/login");
  };

  const [keyword, setKeyword] = useState("");

  const handleSearch = () => {
    if (keyword.trim() !== "") {
      navigate(`/listsanpham?search=${keyword}`);
    }
  };

  return (
    <div className="layout-container">
      {/* =================== TOP HEADER =================== */}
      <div className="top-banner">
        <span>Tưng bừng khai trương - Giảm sốc đến 50% 🎉</span>
      </div>

      {/* =================== MAIN HEADER =================== */}
      <header className="header">
        <div className="header-inner container">
          {/* Logo */}
          <Link to="/" className="header-logo">
            <span className="logo-red">QDH</span> Shop
          </Link>

          {/* Tìm kiếm */}
          <div className="header-search">
            <input
              type="text"
              placeholder="Bạn cần tìm gì?"
              value={keyword}
              onChange={(e) => setKeyword(e.target.value)}
            />
            <button onClick={handleSearch}>🔍</button>
          </div>

          {/* Hotline */}
          <div className="header-hotline">
            <span className="hotline-title">Gọi mua hàng</span>
            <strong>1800.6800</strong>
          </div>

          {/* Tài khoản */}
          <div className="header-user">
            {user ? (
              <button onClick={handleLogout}>👤 Thoát</button>
            ) : (
              <Link to="/login">👤 Tài khoản</Link>
            )}
          </div>

          {/* Giỏ hàng */}
          <Link to="/cart" className="header-cart">
            🛒 <span>Giỏ hàng</span>
          </Link>
        </div>

        {/* =================== MENU BAR =================== */}
        <nav className="menu-bar">
          <ul>
            <li>
              <Link to="/">Trang chủ</Link>
            </li>
            <li>
              <Link to="/listsanpham">Điện thoại</Link>
            </li>
            <li>
              <Link to="/laptop">Laptop</Link>
            </li>
            <li>
              <Link to="/tablet">Tablet</Link>
            </li>
            <li>
              <Link to="/phukien">Phụ kiện</Link>
            </li>
            <li>
              <Link to="/tintuc">Tin công nghệ</Link>
            </li>
            <li>
              <Link to="/admin/products">Quản trị</Link>
            </li>
          </ul>
        </nav>
      </header>

      {/* ================= MAIN CONTENT ================= */}
      <main className="main-content">
        <Outlet />
      </main>

      {/* ================= FOOTER ================= */}
      <footer className="footer">
        <div className="container footer-top">
          <div>
            <h4>Về QDH Shop</h4>
            <p>Hệ thống bán lẻ điện thoại - laptop uy tín nhất Việt Nam.</p>
          </div>

          <div>
            <h4>Danh mục</h4>
            <ul>
              <li>
                <Link to="/listsanpham">Điện thoại</Link>
              </li>
              <li>
                <Link to="/laptop">Laptop</Link>
              </li>
              <li>
                <Link to="/tablet">Tablet</Link>
              </li>
              <li>
                <Link to="/phukien">Phụ kiện</Link>
              </li>
            </ul>
          </div>

          <div>
            <h4>Thông tin</h4>
            <p>📞 Hotline: 1800.6800</p>
            <p>✉ Email: support@qdhshop.vn</p>
            <p>📍 123 Nguyễn Trãi - Hà Nội</p>
          </div>
        </div>

        <div className="footer-bottom">
          © 2025 QDH Shop - All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Layout;
