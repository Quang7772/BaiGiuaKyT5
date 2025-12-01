import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "./supabaseClient"; // ✅ import supabase
import anhlogo1 from "./asset/CSS/images/keylogin.png";
import "./asset/CSS/login.css";
const LoginPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleLogin = async (e) => {
        e.preventDefault();
        setLoading(true);
        if (!username.trim() || !password.trim()) {
            alert("❌ Vui lòng nhập đầy đủ thông tin!");
            setLoading(false);
            return;
        }
        try {
            // ✅ Truy vấn Supabase bảng `users`
            const { data, error } = await supabase
                .from("users")
                .select("*")
                .eq("username", username)
                .eq("password", password) // demo: plain text
                .maybeSingle();
            if (error) {
                alert("❌ Lỗi kết nối với server!");
            }
            else if (!data) {
                alert("❌ Sai tên đăng nhập hoặc mật khẩu!");
            }
            else {
                // Lưu thông tin user vào localStorage (dùng trong app)
                localStorage.setItem("user", JSON.stringify({ username: data.username }));
                alert("✅ Đăng nhập thành công!");
                navigate("/"); // chuyển về trang chính
            }
        }
        catch (err) {
            console.error(err);
            alert("❌ Có lỗi xảy ra!");
        }
        setLoading(false);
    };
    return (_jsx("div", Object.assign({ className: "login-wrapper" }, { children: _jsxs("div", Object.assign({ className: "login-card" }, { children: [_jsx("img", { src: anhlogo1, alt: "Logo", className: "login-logo" }, void 0), _jsx("h2", Object.assign({ className: "login-title" }, { children: "\u0110\u0103ng nh\u1EADp v\u00E0o t\u00E0i kho\u1EA3n" }), void 0), _jsx("p", Object.assign({ className: "login-subtitle" }, { children: "S\u1EED d\u1EE5ng t\u00E0i kho\u1EA3n c\u1EE7a b\u1EA1n \u0111\u1EC3 ti\u1EBFp t\u1EE5c" }), void 0), _jsxs("form", Object.assign({ onSubmit: handleLogin, className: "login-form" }, { children: [_jsxs("div", Object.assign({ className: "form-group" }, { children: [_jsx("label", { children: "T\u00EAn \u0111\u0103ng nh\u1EADp" }, void 0), _jsx("input", { type: "text", placeholder: "Nh\u1EADp t\u00EAn \u0111\u0103ng nh\u1EADp...", value: username, onChange: (e) => setUsername(e.target.value) }, void 0)] }), void 0), _jsxs("div", Object.assign({ className: "form-group" }, { children: [_jsx("label", { children: "M\u1EADt kh\u1EA9u" }, void 0), _jsx("input", { type: "password", placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u...", value: password, onChange: (e) => setPassword(e.target.value) }, void 0)] }), void 0), _jsx("button", Object.assign({ type: "submit", disabled: loading }, { children: loading ? "⏳ Đang xử lý..." : "Đăng nhập" }), void 0)] }), void 0), _jsxs("p", Object.assign({ className: "register-link" }, { children: ["B\u1EA1n ch\u01B0a c\u00F3 t\u00E0i kho\u1EA3n? ", _jsx(Link, Object.assign({ to: "/register" }, { children: "T\u1EA1o t\u00E0i kho\u1EA3n m\u1EDBi" }), void 0)] }), void 0)] }), void 0) }), void 0));
};
export default LoginPage;
