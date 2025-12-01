import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
import "./asset/CSS/ListProducts_SP_Admin.css";
const ListProducts_SP_Admin = () => {
    const [products, setProducts] = useState([]);
    const navigate = useNavigate();
    const fetchProducts = async () => {
        const { data, error } = await supabase
            .from("product1")
            .select("*")
            .order("id", { ascending: true });
        if (error)
            console.error("Lỗi:", error.message);
        else
            setProducts(data);
    };
    useEffect(() => {
        fetchProducts();
    }, []);
    const handleDelete = async (id) => {
        if (window.confirm("Bạn có chắc muốn xóa sản phẩm này không?")) {
            const { error } = await supabase.from("product1").delete().eq("id", id);
            if (error)
                alert("Lỗi khi xóa: " + error.message);
            else
                fetchProducts();
        }
    };
    return (_jsx("div", Object.assign({ className: "container" }, { children: _jsxs("div", Object.assign({ style: { display: "flex", flexDirection: "column" } }, { children: [_jsx("div", Object.assign({ className: "table-actions" }, { children: _jsx("button", Object.assign({ className: "btn green", onClick: () => navigate("/admin/edit/new") }, { children: "\u2795 Th\u00EAm m\u1EDBi" }), void 0) }), void 0), _jsxs("div", { children: [_jsx("h2", { children: "Qu\u1EA3n l\u00FD s\u1EA3n ph\u1EA9m (Admin)" }, void 0), _jsxs("table", Object.assign({ className: "product-table" }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("th", { children: "H\u00ECnh \u1EA3nh" }, void 0), _jsx("th", { children: "T\u00EAn" }, void 0), _jsx("th", { children: "Gi\u00E1" }, void 0), _jsx("th", { children: "\u0110\u00E1nh gi\u00E1" }, void 0), _jsx("th", { children: "Thao t\u00E1c" }, void 0)] }, void 0) }, void 0), _jsx("tbody", { children: products.map((p) => (_jsxs("tr", { children: [_jsx("td", Object.assign({ style: { width: "100px" } }, { children: _jsx("img", { src: p.image, alt: p.title, className: "thumb" }, void 0) }), void 0), _jsx("td", Object.assign({ style: { width: "500px" } }, { children: p.title }), void 0), _jsx("td", { children: p.price }, void 0), _jsxs("td", { children: ["\u2B50 ", p.rating_rate, " (", p.rating_count, ")"] }, void 0), _jsxs("td", Object.assign({ style: { width: "150px" } }, { children: [_jsx("button", Object.assign({ className: "btn yellow", onClick: () => navigate(`/admin/edit/${p.id}`) }, { children: "S\u1EEDa" }), void 0), _jsx("button", Object.assign({ className: "btn red", onClick: () => handleDelete(p.id) }, { children: "X\u00F3a" }), void 0)] }), void 0)] }, p.id))) }, void 0)] }), void 0)] }, void 0)] }), void 0) }), void 0));
};
export default ListProducts_SP_Admin;
