import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "./supabaseClient";
import "./asset/CSS/ProductList.css";
const ListProducts_SP = () => {
    const [listProduct, setListProduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();
    useEffect(() => {
        const fetchProducts = async () => {
            try {
                const { data, error } = await supabase
                    .from("product1")
                    .select("*")
                    .order("id", { ascending: true });
                if (error)
                    throw error;
                setListProduct(data || []);
            }
            catch (err) {
                console.error("❌ Lỗi khi lấy dữ liệu:", err.message);
            }
            finally {
                setLoading(false);
            }
        };
        fetchProducts();
    }, []);
    if (loading) {
        return (_jsx("div", Object.assign({ style: { textAlign: "center", marginTop: "50px", fontSize: "1.3rem" } }, { children: "\u23F3 \u0110ang t\u1EA3i s\u1EA3n ph\u1EA9m..." }), void 0));
    }
    return (_jsxs("div", Object.assign({ style: {
            padding: "40px 20px",
            backgroundColor: "#f8f9fa",
            minHeight: "100vh",
        } }, { children: [_jsx("h2", Object.assign({ style: {
                    textAlign: "center",
                    fontSize: "2rem",
                    marginBottom: "30px",
                    color: "#333",
                    fontWeight: 700,
                    letterSpacing: "0.5px",
                } }, { children: "\uD83D\uDECD\uFE0F Danh s\u00E1ch s\u1EA3n ph\u1EA9m" }), void 0), listProduct.length === 0 ? (_jsx("p", Object.assign({ style: { textAlign: "center", fontSize: "1.1rem", color: "#555" } }, { children: "\uD83D\uDCED Kh\u00F4ng c\u00F3 s\u1EA3n ph\u1EA9m n\u00E0o!" }), void 0)) : (_jsx("div", Object.assign({ style: {
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fill, minmax(240px, 1fr))",
                    gap: "24px",
                    maxWidth: "1200px",
                    margin: "0 auto",
                } }, { children: listProduct.map((p) => (_jsxs("div", Object.assign({ onClick: () => navigate(`/detail/${p.id}`), style: {
                        borderRadius: "14px",
                        overflow: "hidden",
                        backgroundColor: "#fff",
                        cursor: "pointer",
                        boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                        transition: "all 0.25s ease",
                    }, onMouseEnter: (e) => {
                        e.currentTarget.style.transform = "translateY(-6px)";
                        e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
                    }, onMouseLeave: (e) => {
                        e.currentTarget.style.transform = "translateY(0)";
                        e.currentTarget.style.boxShadow = "0 4px 12px rgba(0,0,0,0.1)";
                    } }, { children: [_jsx("div", Object.assign({ style: {
                                width: "100%",
                                height: "230px",
                                backgroundColor: "#f3f3f3",
                                display: "flex",
                                justifyContent: "center",
                                alignItems: "center",
                                overflow: "hidden",
                            } }, { children: _jsx("img", { src: p.image, alt: p.title, style: {
                                    width: "auto%",
                                    height: "100%",
                                    objectFit: "cover",
                                    transition: "transform 0.3s ease",
                                }, onMouseEnter: (e) => (e.currentTarget.style.transform = "scale(1.05)"), onMouseLeave: (e) => (e.currentTarget.style.transform = "scale(1)") }, void 0) }), void 0), _jsxs("div", Object.assign({ style: { padding: "16px" } }, { children: [_jsx("h4", Object.assign({ style: {
                                        fontSize: "1.05rem",
                                        fontWeight: 600,
                                        color: "#222",
                                        marginBottom: "8px",
                                        lineHeight: "1.3",
                                    } }, { children: p.title }), void 0), _jsxs("p", Object.assign({ style: {
                                        color: "#e63946",
                                        fontWeight: 700,
                                        fontSize: "1.1rem",
                                        marginBottom: "6px",
                                    } }, { children: [p.price.toLocaleString("vi-VN"), "\u20AB"] }), void 0), _jsxs("p", Object.assign({ style: {
                                        color: "#666",
                                        fontSize: "0.9rem",
                                        margin: 0,
                                        display: "flex",
                                        alignItems: "center",
                                        justifyContent: "center",
                                        gap: "4px",
                                    } }, { children: ["\u2B50 ", p.rating_rate ?? 0, " (", p.rating_count ?? 0, " \u0111\u00E1nh gi\u00E1)"] }), void 0)] }), void 0)] }), p.id))) }), void 0))] }), void 0));
};
export default ListProducts_SP;
