import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import { useCart } from "./CartContext"; // ⭐ Thêm CartContext
import "./asset/CSS/Chitietsanpham.css";
const ProductDetail = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);
    const navigate = useNavigate();
    const { addToCart } = useCart(); // ⭐ Lấy hàm addToCart
    useEffect(() => {
        const fetchProduct = async () => {
            try {
                const { data, error } = await supabase
                    .from("product1")
                    .select("*")
                    .eq("id", id)
                    .single();
                if (error)
                    throw error;
                setProduct(data);
            }
            catch (err) {
                console.error("Lỗi khi lấy dữ liệu sản phẩm:", err.message);
            }
        };
        fetchProduct();
    }, [id]);
    if (!product) {
        return (_jsx("div", Object.assign({ style: { textAlign: "center", marginTop: "40px" } }, { children: _jsx("p", { children: "\u0110ang t\u1EA3i th\u00F4ng tin s\u1EA3n ph\u1EA9m..." }, void 0) }), void 0));
    }
    return (_jsxs("div", Object.assign({ style: {
            maxWidth: "900px",
            margin: "30px auto",
            padding: "20px",
            border: "1px solid #ddd",
            borderRadius: "10px",
            backgroundColor: "#fff",
            boxShadow: "0 2px 10px rgba(0,0,0,0.1)",
        } }, { children: [_jsx("button", Object.assign({ onClick: () => navigate(-1), style: {
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    padding: "8px 14px",
                    borderRadius: "6px",
                    cursor: "pointer",
                    marginBottom: "20px",
                } }, { children: "\u2190 Quay l\u1EA1i danh s\u00E1ch" }), void 0), _jsxs("div", Object.assign({ style: {
                    display: "flex",
                    flexWrap: "wrap",
                    gap: "30px",
                    alignItems: "flex-start",
                } }, { children: [_jsx("div", Object.assign({ style: {
                            flex: "1 1 300px",
                            maxWidth: "400px",
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center",
                            backgroundColor: "#f9f9f9",
                            borderRadius: "10px",
                            overflow: "hidden",
                        } }, { children: _jsx("img", { src: product.image, alt: product.title, style: { width: "100%", height: "100%", objectFit: "contain" } }, void 0) }), void 0), _jsxs("div", Object.assign({ style: { flex: "1 1 300px" } }, { children: [_jsx("h2", Object.assign({ style: { marginBottom: "10px" } }, { children: product.title }), void 0), _jsxs("p", Object.assign({ style: { fontSize: "1.2rem", color: "#e63946", fontWeight: "bold" } }, { children: ["$", product.price] }), void 0), _jsxs("p", Object.assign({ style: { marginTop: "10px", color: "#555" } }, { children: ["\u2B50 ", product.rating_rate, " (", product.rating_count, " \u0111\u00E1nh gi\u00E1)"] }), void 0), _jsx("p", Object.assign({ style: {
                                    marginTop: "20px",
                                    lineHeight: "1.6",
                                    color: "#333",
                                    textAlign: "justify",
                                } }, { children: product.description || "Chưa có mô tả cho sản phẩm này." }), void 0), _jsx("button", Object.assign({ style: {
                                    marginTop: "20px",
                                    backgroundColor: "#28a745",
                                    color: "#fff",
                                    border: "none",
                                    padding: "10px 16px",
                                    borderRadius: "6px",
                                    cursor: "pointer",
                                }, onClick: () => {
                                    addToCart({
                                        ...product,
                                        id: Number(product.id),
                                        price: Number(product.price), // đảm bảo kiểu number
                                    });
                                    alert("Đã thêm vào giỏ hàng!");
                                } }, { children: "\uD83D\uDED2 Th\u00EAm v\u00E0o gi\u1ECF h\u00E0ng" }), void 0)] }), void 0)] }), void 0)] }), void 0));
};
export default ProductDetail;
