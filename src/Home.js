import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useState } from "react";
const Home = () => {
    const str = "THỨ NĂM NGÀY 16/10/2025";
    // Biến thường
    const dssv = ["Nguyễn Văn An111", "Trần Văn Ba", "Nguyễn Văn Cường"];
    // Biến thường ds2
    const ds2 = [
        { id: "001", hoten: "Nguyễn Thị An111", lop: "K18", gioitinh: false },
        { id: "002", hoten: "Trần Văn Ba", lop: "K18", gioitinh: true },
        { id: "003", hoten: "Nguyễn Văn Cường", lop: "K18", gioitinh: true },
        { id: "007", hoten: "Nguyễn Văn Bảy", lop: "phicong", gioitinh: true },
    ];
    // State ds3
    const [ds3, setDs3] = useState([
        { id: "101", hoten: "Lê Thị Hoa", lop: "K19", gioitinh: false },
        { id: "102", hoten: "Phạm Văn Nam", lop: "K19", gioitinh: true },
        { id: "103", hoten: "Nguyễn Văn Bình", lop: "K19", gioitinh: false },
    ]);
    //ds3[2].hoten="jkldsjflk"
    // State cho ô nhập tên mới
    const [tenMoi, setTenMoi] = useState("");
    // Hàm cập nhật ds3 khi gõ trong ô input bảng ds3
    const handleChangeDs3 = (id, field, value) => {
        setDs3((prevDs3) => prevDs3.map((item) => item.id === id ? { ...item, [field]: value } : item));
    };
    // Hàm sửa họ tên ds3 bằng giá trị từ ô nhập tênMoi
    const TestSuaDLds3 = (id) => {
        if (!tenMoi.trim()) {
            alert("Vui lòng nhập tên mới trước khi sửa!");
            return;
        }
        setDs3((prevDs3) => prevDs3.map((item) => item.id === id ? { ...item, hoten: tenMoi } : item));
        setTenMoi(""); // reset ô nhập sau khi cập nhật
    };
    //Viết lại
    const TestSuaDLds3_aaa = (id) => {
        if (!tenMoi.trim()) {
            alert("Vui lòng nhập tên mới trước khi sửa!");
            return;
        }
        var newds3 = ds3.map((phantu) => {
            if (phantu.id === id) {
                phantu.hoten = tenMoi;
            }
            return phantu;
        });
        setDs3(newds3);
    };
    // Nút sửa ds2 (biến thường)
    const TestSuaDLds2 = (id) => {
        ds2.map((item) => {
            if (item.id === id) {
                item.hoten = "Ronaldo";
                console.log("ds2 item.hoten = " + item.hoten);
            }
            return item;
        });
        alert("ds2 đã thay đổi nhưng UI không cập nhật tự động!");
    };
    return (_jsxs("div", Object.assign({ style: { padding: "20px" } }, { children: [_jsx("h3", { children: str }, void 0), _jsxs("div", { children: [_jsx("p", { children: "DANH S\u00C1CH SINH VI\u00CAN (bi\u1EBFn th\u01B0\u1EDDng dssv)" }, void 0), dssv.map((sv, index) => (_jsx("p", { children: sv }, index)))] }, void 0), _jsxs("div", Object.assign({ style: { marginTop: "20px" } }, { children: [_jsx("p", { children: "DANH S\u00C1CH SINH VI\u00CAN ds2 (bi\u1EBFn th\u01B0\u1EDDng)" }, void 0), _jsxs("table", Object.assign({ border: "1", cellPadding: "5" }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("td", { children: "ID" }, void 0), _jsx("td", { children: "H\u1ECD t\u00EAn" }, void 0), _jsx("td", { children: "L\u1EDBp" }, void 0), _jsx("td", { children: "Gi\u1EDBi t\u00EDnh" }, void 0), _jsx("td", { children: "S\u1EEDa DL" }, void 0)] }, void 0) }, void 0), _jsx("tbody", { children: ds2.map((sv) => (_jsxs("tr", { children: [_jsx("td", { children: sv.id }, void 0), _jsx("td", { children: _jsx("input", { type: "text", value: sv.hoten, readOnly: true }, void 0) }, void 0), _jsx("td", { children: sv.lop }, void 0), _jsx("td", { children: _jsx("input", { type: "checkbox", checked: sv.gioitinh, readOnly: true }, void 0) }, void 0), _jsx("td", { children: _jsx("input", { type: "button", value: "S\u1EEDa", onClick: () => TestSuaDLds2(sv.id) }, void 0) }, void 0)] }, sv.id))) }, void 0)] }), void 0), _jsx("small", { children: "Ch\u00FA \u00FD: V\u00EC ds2 l\u00E0 bi\u1EBFn th\u01B0\u1EDDng, UI s\u1EBD kh\u00F4ng c\u1EADp nh\u1EADt khi thay \u0111\u1ED5i gi\u00E1 tr\u1ECB." }, void 0)] }), void 0), _jsxs("div", Object.assign({ style: { marginTop: "30px" } }, { children: [_jsx("p", { children: "DANH S\u00C1CH SINH VI\u00CAN ds3 (state)" }, void 0), _jsxs("div", Object.assign({ style: { marginBottom: "10px" } }, { children: [_jsx("label", { children: "Nh\u1EADp t\u00EAn m\u1EDBi: " }, void 0), _jsx("input", { type: "text", value: tenMoi, onChange: (e) => setTenMoi(e.target.value), placeholder: "Nh\u1EADp t\u00EAn mu\u1ED1n \u0111\u1ED5i..." }, void 0)] }), void 0), _jsxs("table", Object.assign({ border: "1", cellPadding: "5" }, { children: [_jsx("thead", { children: _jsxs("tr", { children: [_jsx("td", { children: "ID" }, void 0), _jsx("td", { children: "H\u1ECD t\u00EAn" }, void 0), _jsx("td", { children: "L\u1EDBp" }, void 0), _jsx("td", { children: "Gi\u1EDBi t\u00EDnh" }, void 0), _jsx("td", { children: "S\u1EEDa DL" }, void 0)] }, void 0) }, void 0), _jsx("tbody", { children: ds3.map((sv) => (_jsxs("tr", { children: [_jsx("td", { children: sv.id }, void 0), _jsx("td", { children: _jsx("input", { type: "text", value: sv.hoten, onChange: (e) => handleChangeDs3(sv.id, "hoten", e.target.value) }, void 0) }, void 0), _jsx("td", { children: sv.lop }, void 0), _jsx("td", { children: _jsx("input", { type: "checkbox", checked: sv.gioitinh, onChange: (e) => handleChangeDs3(sv.id, "gioitinh", e.target.checked) }, void 0) }, void 0), _jsx("td", { children: _jsx("input", { type: "button", value: "S\u1EEDa", onClick: () => TestSuaDLds3_aaa(sv.id) }, void 0) }, void 0)] }, sv.id))) }, void 0)] }), void 0), _jsx("small", { children: "Ch\u00FA \u00FD: ds3 l\u00E0 state, m\u1ECDi thay \u0111\u1ED5i s\u1EBD t\u1EF1 \u0111\u1ED9ng render l\u1EA1i UI." }, void 0)] }), void 0)] }), void 0));
};
export default Home;
