import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState, useEffect } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate, useParams } from "react-router-dom";
import "./asset/CSS/EditProducts_SP_Admin.css";
const EditProduct = () => {
    const { id } = useParams();
    const isNew = id === "new";
    const navigate = useNavigate();
    const [product, setProduct] = useState({
        title: "",
        price: "",
        image: "",
        rating_rate: "",
        rating_count: "",
        category: "",
        description: "",
        stock: "",
    });
    useEffect(() => {
        if (!isNew) {
            supabase
                .from("product1")
                .select("*")
                .eq("id", id)
                .single()
                .then(({ data }) => {
                if (data)
                    setProduct(data);
            });
        }
    }, [id, isNew]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct({ ...product, [name]: value });
    };
    const handleSubmit = async (e) => {
        e.preventDefault();
        if (isNew) {
            const { error } = await supabase.from("product1").insert([product]);
            if (error)
                return alert("❌ Lỗi thêm sản phẩm: " + error.message);
            alert("✅ Đã thêm sản phẩm mới!");
        }
        else {
            const { error } = await supabase
                .from("product1")
                .update(product)
                .eq("id", id);
            if (error)
                return alert("❌ Lỗi cập nhật: " + error.message);
            alert("✅ Cập nhật thành công!");
        }
        navigate("/admin/products");
    };
    return (_jsxs("div", Object.assign({ className: "container" }, { children: [_jsx("h2", { children: isNew ? "Thêm sản phẩm mới" : "Chỉnh sửa sản phẩm" }, void 0), _jsxs("form", Object.assign({ onSubmit: handleSubmit, className: "form" }, { children: [_jsxs("label", { children: ["T\u00EAn s\u1EA3n ph\u1EA9m:", _jsx("input", { type: "text", name: "title", value: product.title, onChange: handleChange, required: true }, void 0)] }, void 0), _jsxs("label", { children: ["Gi\u00E1:", _jsx("input", { type: "number", name: "price", value: product.price, onChange: handleChange, required: true }, void 0)] }, void 0), _jsxs("label", { children: ["H\u00E3ng:", _jsxs("select", Object.assign({ name: "category", value: product.category, onChange: handleChange, required: true }, { children: [_jsx("option", Object.assign({ value: "" }, { children: "-- Ch\u1ECDn h\u00E3ng --" }), void 0), _jsx("option", Object.assign({ value: "Apple" }, { children: "Apple" }), void 0), _jsx("option", Object.assign({ value: "Samsung" }, { children: "Samsung" }), void 0), _jsx("option", Object.assign({ value: "Xiaomi" }, { children: "Xiaomi" }), void 0), _jsx("option", Object.assign({ value: "Oppo" }, { children: "Oppo" }), void 0), _jsx("option", Object.assign({ value: "Realme" }, { children: "Realme" }), void 0)] }), void 0)] }, void 0), _jsxs("label", { children: ["T\u1ED3n kho:", _jsx("input", { type: "number", name: "stock", value: product.stock, onChange: handleChange }, void 0)] }, void 0), _jsxs("label", { children: ["H\u00ECnh \u1EA3nh (URL):", _jsx("input", { type: "text", name: "image", value: product.image, onChange: handleChange }, void 0)] }, void 0), product.image && (_jsx("img", { src: product.image, alt: "preview", className: "preview", onError: (e) => (e.target.src = "/no-image.png") }, void 0)), _jsxs("label", { children: ["\u0110\u00E1nh gi\u00E1 (0\u20135):", _jsx("input", { type: "number", step: "0.1", name: "rating_rate", value: product.rating_rate, onChange: handleChange }, void 0)] }, void 0), _jsxs("label", { children: ["S\u1ED1 l\u01B0\u1EE3t \u0111\u00E1nh gi\u00E1:", _jsx("input", { type: "number", name: "rating_count", value: product.rating_count, onChange: handleChange }, void 0)] }, void 0), _jsxs("label", { children: ["M\u00F4 t\u1EA3 s\u1EA3n ph\u1EA9m:", _jsx("textarea", { name: "description", value: product.description, onChange: handleChange, rows: "4" }, void 0)] }, void 0), _jsxs("div", Object.assign({ className: "actions" }, { children: [_jsx("button", Object.assign({ type: "button", className: "btn gray", onClick: () => navigate("/admin/products") }, { children: "H\u1EE7y" }), void 0), _jsx("button", Object.assign({ type: "submit", className: "btn blue" }, { children: isNew ? "Thêm sản phẩm" : "Lưu thay đổi" }), void 0)] }), void 0)] }), void 0)] }), void 0));
};
export default EditProduct;
