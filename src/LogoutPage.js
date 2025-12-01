import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
// ✅ LogoutPage.tsx (Tối ưu + có TypeScript)
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
const LogoutPage = () => {
    const navigate = useNavigate();
    useEffect(() => {
        // ✅ Xóa toàn bộ thông tin user khỏi localStorage
        localStorage.removeItem("user");
        // Nếu bạn dùng token khác như "accessToken" hay "refreshToken", có thể xóa thêm:
        // localStorage.removeItem("accessToken");
        // localStorage.removeItem("refreshToken");
        // 🕒 Sau 2s tự động quay về trang login
        const timer = setTimeout(() => {
            navigate("/login", { replace: true }); // replace để tránh back quay lại page cũ
        }, 2000);
        return () => clearTimeout(timer);
    }, [navigate]);
    return (_jsx("div", Object.assign({ className: "flex justify-center items-center min-h-[70vh] bg-gray-50" }, { children: _jsxs("div", Object.assign({ className: "bg-white shadow-md rounded-2xl p-8 w-96 text-center border border-gray-200" }, { children: [_jsx("h2", Object.assign({ className: "text-2xl font-semibold text-blue-600 mb-4" }, { children: "\uD83D\uDC4B \u0110\u0103ng xu\u1EA5t th\u00E0nh c\u00F4ng!" }), void 0), _jsx("p", Object.assign({ className: "text-gray-600 mb-2" }, { children: "Phi\u00EAn \u0111\u0103ng nh\u1EADp c\u1EE7a b\u1EA1n \u0111\u00E3 \u0111\u01B0\u1EE3c k\u1EBFt th\u00FAc." }), void 0), _jsx("p", Object.assign({ className: "text-gray-500 text-sm" }, { children: "\u0110ang chuy\u1EC3n h\u01B0\u1EDBng \u0111\u1EBFn trang \u0111\u0103ng nh\u1EADp..." }), void 0)] }), void 0) }), void 0));
};
export default LogoutPage;
