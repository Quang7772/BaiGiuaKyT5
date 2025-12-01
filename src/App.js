import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./styles.css";
import Layout from "./Layout";
import Trang1 from "./Trang1";
import Trang2 from "./Trang2";
import Listsanpham from "./Listsanpham";
import Chitietsanpham from "./Chitietsanpham";
import ListProducts_SP from "./ListProducts_SP";
import ProductDetail from "./ProductDetail";
import LoginPage from "./LoginPage";
import LogoutPage from "./LogoutPage";
import RegisterPage from "./RegisterPage";
import ProtectedRoute from "./ProtectedRoute";
import ListProducts_SP_Admin from "./ListProducts_SP_Admin";
import EditProduct from "./EditProduct";
import { CartProvider } from "./CartContext"; // Context vừa sửa ở Bước 1
import CartPage from "./CartPage"; // Trang hiển thị giỏ hàng (Xem bước 3)
const App = () => {
    return (_jsx(CartProvider, { children: _jsx(BrowserRouter, { children: _jsx(Routes, { children: _jsxs(Route, Object.assign({ path: "/", element: _jsx(Layout, {}, void 0) }, { children: [_jsx(Route, { index: true, element: _jsx(ListProducts_SP, {}, void 0) }, void 0), _jsx(Route, { path: "trang1", element: _jsx(Trang1, {}, void 0) }, void 0), _jsx(Route, { path: "listsanpham", element: _jsx(Listsanpham, {}, void 0) }, void 0), _jsx(Route, { path: "detail/:id", element: _jsx(ProductDetail, {}, void 0) }, void 0), _jsx(Route, { path: "/admin/edit/:id", element: _jsx(EditProduct, {}, void 0) }, void 0), _jsx(Route, { path: "sanpham/:id", element: _jsx(Chitietsanpham, {}, void 0) }, void 0), _jsx(Route, { path: "trang2", element: _jsx(Trang2, {}, void 0) }, void 0), _jsx(Route, { path: "cart", element: _jsx(CartPage, {}, void 0) }, void 0), _jsx(Route, { path: "login", element: _jsx(LoginPage, {}, void 0) }, void 0), _jsx(Route, { path: "logout", element: _jsx(LogoutPage, {}, void 0) }, void 0), _jsx(Route, { path: "/register", element: _jsx(RegisterPage, {}, void 0) }, void 0), _jsx(Route, { path: "admin/products", element: _jsx(ProtectedRoute, { children: _jsx(ListProducts_SP_Admin, {}, void 0) }, void 0) }, void 0)] }), void 0) }, void 0) }, void 0) }, void 0));
};
export default App;
