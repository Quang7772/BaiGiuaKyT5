import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import "./asset/CSS/layout.css";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
const Layout = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    // 🔹 Kiểm tra trạng thái đăng nhập khi load trang
    useEffect(() => {
        const userData = localStorage.getItem("user");
        if (userData) {
            setUser(JSON.parse(userData));
        }
    }, []);
    // 🔹 Hàm đăng xuất
    const handleLogout = () => {
        localStorage.removeItem("user");
        setUser(null);
        navigate("/login");
    };
    // Thêm useState cho ô tìm kiếm
    const [keyword, setKeyword] = useState("");
    const handleSearch = () => {
        if (keyword.trim() !== "") {
            navigate(`/listsanpham?search=${keyword}`);
        }
    };
    return (_jsxs("div", Object.assign({ className: "layout-shop" }, { children: [_jsxs("header", Object.assign({ className: "shop-header" }, { children: [_jsx("div", Object.assign({ className: "top-bar" }, { children: _jsx("span", { children: "Mi\u1EC5n ph\u00ED giao h\u00E0ng cho \u0111\u01A1n tr\u00EAn 500.000\u0111 \uD83D\uDE9A" }, void 0) }), void 0), _jsxs("div", Object.assign({ className: "main-header container" }, { children: [_jsx("div", Object.assign({ className: "logo-area" }, { children: _jsxs(Link, Object.assign({ to: "/", className: "logo-text" }, { children: ["\uD83D\uDECD\uFE0F ", _jsx("span", { children: "QDH" }, void 0), " ", _jsx("strong", { children: "Shop" }, void 0)] }), void 0) }), void 0), _jsxs("div", Object.assign({ className: "search-area" }, { children: [_jsx("input", { type: "text", placeholder: "T\u00ECm s\u1EA3n ph\u1EA9m, th\u01B0\u01A1ng hi\u1EC7u...", value: keyword, onChange: (e) => setKeyword(e.target.value) }, void 0), _jsx("button", Object.assign({ onClick: handleSearch }, { children: "T\u00ECm ki\u1EBFm" }), void 0)] }), void 0), _jsxs("div", Object.assign({ className: "user-area" }, { children: [_jsx(Link, Object.assign({ to: "/cart", className: "cart-btn" }, { children: "\uD83D\uDED2 Gi\u1ECF h\u00E0ng" }), void 0), user ? (_jsx("button", Object.assign({ onClick: handleLogout, className: "logout-btn" }, { children: "\uD83D\uDEAA Tho\u00E1t" }), void 0)) : (_jsx(Link, Object.assign({ to: "/admin/products", className: "login-btn" }, { children: "\uD83D\uDD11 \u0110\u0103ng nh\u1EADp" }), void 0))] }), void 0)] }), void 0), _jsx("nav", Object.assign({ className: "nav-bar" }, { children: _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Trang ch\u1EE7" }), void 0) }, void 0), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/listsanpham" }, { children: "S\u1EA3n ph\u1EA9m" }), void 0) }, void 0), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/trang2" }, { children: "Li\u00EAn h\u1EC7" }), void 0) }, void 0), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/trang1" }, { children: "Gi\u1EDBi thi\u1EC7u" }), void 0) }, void 0), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/admin/products" }, { children: "Qu\u1EA3n tr\u1ECB" }), void 0) }, void 0)] }, void 0) }), void 0)] }), void 0), _jsx("main", Object.assign({ className: "shop-content" }, { children: _jsx(Outlet, {}, void 0) }), void 0), _jsxs("footer", Object.assign({ className: "shop-footer" }, { children: [_jsxs("div", Object.assign({ className: "footer-container container" }, { children: [_jsxs("div", Object.assign({ className: "footer-col" }, { children: [_jsx("h4", { children: "V\u1EC1 QDH Shop" }, void 0), _jsx("p", { children: "QDH Shop \u2013 n\u01A1i mua s\u1EAFm \u0111\u00E1ng tin c\u1EADy, chuy\u00EAn cung c\u1EA5p c\u00E1c s\u1EA3n ph\u1EA9m ch\u1EA5t l\u01B0\u1EE3ng, gi\u00E1 t\u1ED1t v\u00E0 d\u1ECBch v\u1EE5 chu \u0111\u00E1o." }, void 0)] }), void 0), _jsxs("div", Object.assign({ className: "footer-col" }, { children: [_jsx("h4", { children: "Li\u00EAn k\u1EBFt nhanh" }, void 0), _jsxs("ul", { children: [_jsx("li", { children: _jsx(Link, Object.assign({ to: "/" }, { children: "Trang ch\u1EE7" }), void 0) }, void 0), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/listsanpham" }, { children: "S\u1EA3n ph\u1EA9m" }), void 0) }, void 0), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/cart" }, { children: "Gi\u1ECF h\u00E0ng" }), void 0) }, void 0), _jsx("li", { children: _jsx(Link, Object.assign({ to: "/login" }, { children: "\u0110\u0103ng nh\u1EADp" }), void 0) }, void 0)] }, void 0)] }), void 0), _jsxs("div", Object.assign({ className: "footer-col" }, { children: [_jsx("h4", { children: "Li\u00EAn h\u1EC7" }, void 0), _jsx("p", { children: "\uD83D\uDCCD 123 Nguy\u1EC5n Tr\u00E3i, H\u00E0 N\u1ED9i" }, void 0), _jsx("p", { children: "\uD83D\uDCDE (024) 1234 5678" }, void 0), _jsx("p", { children: "\u2709\uFE0F support@qdhshop.vn" }, void 0)] }), void 0), _jsxs("div", Object.assign({ className: "footer-col" }, { children: [_jsx("h4", { children: "K\u1EBFt n\u1ED1i v\u1EDBi ch\u00FAng t\u00F4i" }, void 0), _jsxs("div", Object.assign({ className: "social-icons" }, { children: [_jsx("a", Object.assign({ href: "#" }, { children: _jsx("i", { className: "fab fa-facebook-f" }, void 0) }), void 0), _jsx("a", Object.assign({ href: "#" }, { children: _jsx("i", { className: "fab fa-instagram" }, void 0) }), void 0), _jsx("a", Object.assign({ href: "#" }, { children: _jsx("i", { className: "fab fa-youtube" }, void 0) }), void 0), _jsx("a", Object.assign({ href: "#" }, { children: _jsx("i", { className: "fab fa-tiktok" }, void 0) }), void 0)] }), void 0)] }), void 0)] }), void 0), _jsx("div", Object.assign({ className: "footer-bottom" }, { children: "\u00A9 2025 QDH Shop \u2014 All rights reserved." }), void 0)] }), void 0)] }), void 0));
};
export default Layout;
