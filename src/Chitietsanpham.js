import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCart } from "./CartContext";
import "./asset/CSS/Chitietsanpham.css"; // ⭐ THÊM CSS
export default function Chitietsanpham() {
    const { id } = useParams();
    const navigate = useNavigate();
    const { addToCart } = useCart();
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [added, setAdded] = useState(false);
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const response = await fetch(`https://68f97a99ef8b2e621e7c302b.mockapi.io/products/${id}`);
                if (!response.ok)
                    throw new Error("Không thể tải sản phẩm!");
                const data = await response.json();
                setProduct(data);
            }
            catch (err) {
                setError(err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProduct();
    }, [id]);
    if (loading)
        return _jsx("p", Object.assign({ style: { padding: 20 } }, { children: "\u0110ang t\u1EA3i d\u1EEF li\u1EC7u..." }), void 0);
    if (error || !product) {
        return (_jsxs("div", Object.assign({ style: { padding: 20 } }, { children: [_jsx("h3", { children: "Kh\u00F4ng t\u00ECm th\u1EA5y s\u1EA3n ph\u1EA9m!" }, void 0), _jsx("p", { children: error }, void 0), _jsx("button", Object.assign({ onClick: () => navigate("/") }, { children: "Quay l\u1EA1i trang ch\u1EE7" }), void 0)] }), void 0));
    }
    return (_jsxs("div", Object.assign({ className: "product-detail" }, { children: [_jsx("button", Object.assign({ className: "back-btn", onClick: () => navigate(-1) }, { children: "\u2B05 Quay l\u1EA1i" }), void 0), _jsxs("div", Object.assign({ className: "product-container" }, { children: [_jsx("img", { src: product.image, alt: product.title }, void 0), _jsxs("div", Object.assign({ className: "product-info" }, { children: [_jsx("h2", { children: product.title }, void 0), _jsxs("p", { children: [_jsx("strong", { children: "Gi\u00E1:" }, void 0), " $", product.price] }, void 0), _jsxs("p", { children: [_jsx("strong", { children: "Lo\u1EA1i:" }, void 0), " ", product.category] }, void 0), _jsx("p", Object.assign({ className: "product-description" }, { children: product.description }), void 0), _jsx("button", Object.assign({ className: "add-cart-btn", onClick: () => {
                                    addToCart(product);
                                    setAdded(true); // ⭐ HIỆN THÔNG BÁO
                                    setTimeout(() => setAdded(false), 2000); // Ẩn sau 2 giây
                                } }, { children: "\uD83D\uDED2 Th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng" }), void 0), added && _jsx("p", Object.assign({ className: "added-message" }, { children: "\u2714 \u0110\u00E3 th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng!" }), void 0)] }), void 0)] }), void 0)] }), void 0));
}
