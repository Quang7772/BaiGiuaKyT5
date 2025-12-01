import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { Navigate } from "react-router-dom";
const ProtectedRoute = ({ children, roleRequired, }) => {
    const userData = localStorage.getItem("user");
    const user = userData ? JSON.parse(userData) : null;
    if (!user) {
        return (_jsx(Navigate, { to: "/login", replace: true, state: { message: "⚠️ Vui lòng đăng nhập để tiếp tục!" } }, void 0));
    }
    if (roleRequired === "admin" && user.username !== "admin") {
        alert("❌ Bạn không có quyền truy cập trang quản trị!");
        return _jsx(Navigate, { to: "/", replace: true }, void 0);
    }
    return _jsx(_Fragment, { children: children }, void 0);
};
export default ProtectedRoute;
