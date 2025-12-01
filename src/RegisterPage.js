import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { supabase } from "./supabaseClient";
import anhlogo1 from "./asset/CSS/images/keylogin.png";
import "./asset/CSS/login.css";
const RegisterPage = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const handleRegister = async (e) => {
        e.preventDefault();
        if (!username.trim() || !password.trim()) {
            alert("⚠️ Vui lòng nhập đầy đủ thông tin!");
            return;
        }
        if (password !== confirmPassword) {
            alert("❌ Mật khẩu không khớp!");
            return;
        }
        setLoading(true);
        // 🔍 Kiểm tra xem username đã tồn tại chưa
        const { data: existingUser } = await supabase
            .from("users")
            .select("*")
            .eq("username", username)
            .maybeSingle();
        if (existingUser) {
            alert("⚠️ Tên đăng nhập đã tồn tại!");
            setLoading(false);
            return;
        }
        // 🟢 Tạo tài khoản mới
        const { error } = await supabase.from("users").insert([
            {
                username: username.trim(),
                password: password.trim(), // demo: chưa mã hoá
            },
        ]);
        if (error) {
            alert("❌ Lỗi khi tạo tài khoản! " + error.message);
        }
        else {
            alert("✅ Đăng ký thành công! Vui lòng đăng nhập.");
            navigate("/login");
        }
        setLoading(false);
    };
    return (_jsx("div", Object.assign({ className: "login-wrapper" }, { children: _jsxs("div", Object.assign({ className: "login-card" }, { children: [_jsx("img", { src: anhlogo1, alt: "Logo", className: "login-logo" }, void 0), _jsx("h2", Object.assign({ className: "login-title" }, { children: "T\u1EA1o t\u00E0i kho\u1EA3n m\u1EDBi" }), void 0), _jsx("p", Object.assign({ className: "login-subtitle" }, { children: "Ho\u00E0n t\u1EA5t \u0111\u0103ng k\u00FD \u0111\u1EC3 tham gia c\u00F9ng ch\u00FAng t\u00F4i" }), void 0), _jsxs("form", Object.assign({ onSubmit: handleRegister, className: "login-form" }, { children: [_jsxs("div", Object.assign({ className: "form-group" }, { children: [_jsx("label", { children: "T\u00EAn \u0111\u0103ng nh\u1EADp" }, void 0), _jsx("input", { type: "text", placeholder: "Nh\u1EADp t\u00EAn \u0111\u0103ng nh\u1EADp...", value: username, onChange: (e) => setUsername(e.target.value) }, void 0)] }), void 0), _jsxs("div", Object.assign({ className: "form-group" }, { children: [_jsx("label", { children: "M\u1EADt kh\u1EA9u" }, void 0), _jsx("input", { type: "password", placeholder: "Nh\u1EADp m\u1EADt kh\u1EA9u...", value: password, onChange: (e) => setPassword(e.target.value) }, void 0)] }), void 0), _jsxs("div", Object.assign({ className: "form-group" }, { children: [_jsx("label", { children: "Nh\u1EADp l\u1EA1i m\u1EADt kh\u1EA9u" }, void 0), _jsx("input", { type: "password", placeholder: "X\u00E1c nh\u1EADn m\u1EADt kh\u1EA9u...", value: confirmPassword, onChange: (e) => setConfirmPassword(e.target.value) }, void 0)] }), void 0), _jsx("button", Object.assign({ type: "submit", disabled: loading }, { children: loading ? "⏳ Đang xử lý..." : "Đăng ký" }), void 0)] }), void 0), _jsxs("p", Object.assign({ className: "register-link" }, { children: ["\u0110\u00E3 c\u00F3 t\u00E0i kho\u1EA3n? ", _jsx(Link, Object.assign({ to: "/login" }, { children: "\u0110\u0103ng nh\u1EADp ngay" }), void 0)] }), void 0)] }), void 0) }), void 0));
};
export default RegisterPage;
