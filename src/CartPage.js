import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCart } from "./CartContext";
import { useNavigate } from "react-router-dom";
export default function CartPage() {
    const { cartItems, totalPrice, removeFromCart, increaseQuantity, decreaseQuantity, } = useCart();
    const navigate = useNavigate();
    // ===== GIỎ HÀNG TRỐNG =====
    if (cartItems.length === 0)
        return (_jsxs("div", Object.assign({ style: { textAlign: "center", marginTop: 50 } }, { children: [_jsx("h3", Object.assign({ style: { marginBottom: 20 } }, { children: "Gi\u1ECF h\u00E0ng tr\u1ED1ng!" }), void 0), _jsx("button", Object.assign({ onClick: () => navigate("/"), style: styles.secondaryButton }, { children: "\u2B05 Quay l\u1EA1i mua s\u1EAFm" }), void 0)] }), void 0));
    // ===== GIỎ HÀNG CÓ SẢN PHẨM =====
    return (_jsxs("div", Object.assign({ style: { padding: 20 } }, { children: [_jsxs("h2", { children: ["Gi\u1ECF h\u00E0ng c\u1EE7a b\u1EA1n (", cartItems.length, " s\u1EA3n ph\u1EA9m)"] }, void 0), _jsxs("table", Object.assign({ style: { width: "100%", borderCollapse: "collapse", marginTop: 20 }, border: 1 }, { children: [_jsx("thead", { children: _jsxs("tr", Object.assign({ style: { backgroundColor: "#f9f9f9" } }, { children: [_jsx("th", Object.assign({ style: { padding: 10 } }, { children: "S\u1EA3n ph\u1EA9m" }), void 0), _jsx("th", { children: "\u0110\u01A1n gi\u00E1" }, void 0), _jsx("th", { children: "S\u1ED1 l\u01B0\u1EE3ng" }, void 0), _jsx("th", { children: "Th\u00E0nh ti\u1EC1n" }, void 0), _jsx("th", { children: "X\u00F3a" }, void 0)] }), void 0) }, void 0), _jsx("tbody", { children: cartItems.map((item) => (_jsxs("tr", { children: [_jsxs("td", Object.assign({ style: {
                                        padding: 10,
                                        display: "flex",
                                        alignItems: "center",
                                        gap: 10,
                                    } }, { children: [_jsx("img", { src: item.product.image, width: 50, height: 50, style: { objectFit: "contain" }, alt: "" }, void 0), _jsx("span", Object.assign({ style: { fontWeight: 500 } }, { children: item.product.title }), void 0)] }), void 0), _jsxs("td", Object.assign({ style: { textAlign: "center" } }, { children: [Number(item.product.price).toLocaleString(), " \u20AB"] }), void 0), _jsx("td", Object.assign({ style: { textAlign: "center" } }, { children: _jsxs("div", Object.assign({ style: {
                                            display: "flex",
                                            justifyContent: "center",
                                            alignItems: "center",
                                            gap: 5,
                                        } }, { children: [_jsx("button", Object.assign({ onClick: () => decreaseQuantity(item.product.id), style: styles.qtyBtn }, { children: "-" }), void 0), _jsx("span", Object.assign({ style: { minWidth: 20, textAlign: "center" } }, { children: item.quantity }), void 0), _jsx("button", Object.assign({ onClick: () => increaseQuantity(item.product.id), style: styles.qtyBtn }, { children: "+" }), void 0)] }), void 0) }), void 0), _jsxs("td", Object.assign({ style: {
                                        textAlign: "center",
                                        fontWeight: "bold",
                                        color: "#333",
                                    } }, { children: [(Number(item.product.price) * item.quantity).toLocaleString(), " ", "\u20AB"] }), void 0), _jsx("td", Object.assign({ style: { textAlign: "center" } }, { children: _jsx("button", Object.assign({ onClick: () => removeFromCart(item.product.id), style: styles.deleteBtn }, { children: "\uD83D\uDDD1\uFE0F" }), void 0) }), void 0)] }, item.product.id))) }, void 0)] }), void 0), _jsxs("div", Object.assign({ style: {
                    display: "flex",
                    justifyContent: "space-between",
                    marginTop: 30,
                    paddingTop: 20,
                    borderTop: "1px solid #eee",
                } }, { children: [_jsx("button", Object.assign({ onClick: () => navigate("/"), style: styles.secondaryButton }, { children: "\u2B05 Ti\u1EBFp t\u1EE5c mua h\u00E0ng" }), void 0), _jsxs("div", Object.assign({ style: { textAlign: "right" } }, { children: [_jsxs("h3", Object.assign({ style: { marginBottom: 15 } }, { children: ["T\u1ED5ng c\u1ED9ng:", " ", _jsxs("span", Object.assign({ style: { color: "#d32f2f", fontSize: "1.2em" } }, { children: [totalPrice.toLocaleString(), " \u20AB"] }), void 0)] }), void 0), _jsx("button", Object.assign({ style: styles.primaryButton }, { children: "Thanh to\u00E1n ngay" }), void 0)] }), void 0)] }), void 0)] }), void 0));
}
const styles = {
    qtyBtn: {
        width: 25,
        height: 25,
        cursor: "pointer",
        backgroundColor: "#eee",
        border: "none",
        borderRadius: 4,
    },
    deleteBtn: {
        color: "red",
        background: "none",
        border: "none",
        cursor: "pointer",
        fontSize: 16,
    },
    secondaryButton: {
        padding: "10px 20px",
        background: "white",
        color: "#333",
        border: "1px solid #ccc",
        borderRadius: "4px",
        cursor: "pointer",
        fontWeight: "500",
    },
    primaryButton: {
        padding: "12px 24px",
        background: "#28a745",
        color: "white",
        border: "none",
        borderRadius: "4px",
        fontSize: "16px",
        fontWeight: "bold",
        cursor: "pointer",
    },
};
