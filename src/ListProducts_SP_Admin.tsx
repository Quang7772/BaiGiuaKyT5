import React, { useEffect, useState } from "react";
import { supabase } from "./supabaseClient";
import { useNavigate } from "react-router-dom";
import "./asset/CSS/ListProducts_SP_Admin.css";

interface Product {
  id: number;
  title: string;
  price: number;
  image: string;
  rating_rate: number;
  rating_count: number;
}

const ListProducts_SP_Admin: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [newProduct, setNewProduct] = useState<Omit<Product, "id">>({
    title: "",
    price: 0,
    image: "",
    rating_rate: 0,
    rating_count: 0,
  });

  const navigate = useNavigate();

  const fetchProducts = async () => {
    const { data, error } = await supabase
      .from("product1")
      .select("*")
      .order("id", { ascending: true });
    if (!error) setProducts(data as Product[]);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    editingProduct
      ? setEditingProduct({ ...editingProduct, [name]: value })
      : setNewProduct({ ...newProduct, [name]: value });
  };

  const handleAddOrEdit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editingProduct) {
      const { id, ...updateData } = editingProduct;
      const { error } = await supabase
        .from("product1")
        .update(updateData)
        .eq("id", id);
      if (!error) alert("✅ Cập nhật thành công!");
      setEditingProduct(null);
    } else {
      const { error } = await supabase.from("product1").insert([newProduct]);
      if (!error) alert("✅ Thêm sản phẩm thành công!");
      setNewProduct({
        title: "",
        price: 0,
        image: "",
        rating_rate: 0,
        rating_count: 0,
      });
    }
    fetchProducts();
  };

  const handleDelete = async (id: number) => {
    if (window.confirm("Bạn chắc chắn muốn xóa sản phẩm này?")) {
      await supabase.from("product1").delete().eq("id", id);
      fetchProducts();
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    navigate("/login");
  };

  return (
    <div className="admin-page">
      <header className="admin-header">
        <h1>🛠️ Quản lý sản phẩm</h1>
      </header>
      <button
        onClick={handleLogout}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
      >
        🚪 Thoát
      </button>
      <form onSubmit={handleAddOrEdit} className="admin-form">
        <h2>
          {editingProduct ? "✏️ Chỉnh sửa sản phẩm" : "➕ Thêm sản phẩm mới"}
        </h2>
        <div className="form-grid">
          <input
            name="title"
            value={editingProduct?.title ?? newProduct.title}
            onChange={handleChange}
            placeholder="Tên sản phẩm"
          />
          <input
            name="price"
            type="number"
            value={editingProduct?.price ?? newProduct.price}
            onChange={handleChange}
            placeholder="Giá sản phẩm"
          />
          <input
            name="image"
            value={editingProduct?.image ?? newProduct.image}
            onChange={handleChange}
            placeholder="Link ảnh sản phẩm"
            className="col-span-2"
          />
          <input
            name="rating_rate"
            type="number"
            step="0.1"
            value={editingProduct?.rating_rate ?? newProduct.rating_rate}
            onChange={handleChange}
            placeholder="Đánh giá (0 - 5)"
          />
          <input
            name="rating_count"
            type="number"
            value={editingProduct?.rating_count ?? newProduct.rating_count}
            onChange={handleChange}
            placeholder="Số lượt đánh giá"
          />
        </div>

        <div className="form-actions">
          {editingProduct && (
            <button
              type="button"
              onClick={() => setEditingProduct(null)}
              className="cancel-btn"
            >
              Hủy
            </button>
          )}
          <button type="submit" className="submit-btn">
            {editingProduct ? "💾 Lưu lại" : "➕ Thêm mới"}
          </button>
        </div>
      </form>

      <div className="product-grid">
        {products.map((p) => (
          <div className="product-card" key={p.id}>
            <img src={p.image} alt={p.title} />
            <h3>{p.title}</h3>
            <p className="price">${p.price}</p>
            <p className="rating">
              ⭐ {p.rating_rate} ({p.rating_count})
            </p>
            <div className="card-actions">
              <button onClick={() => setEditingProduct(p)} className="edit-btn">
                Sửa
              </button>
              <button onClick={() => handleDelete(p.id)} className="delete-btn">
                Xóa
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProducts_SP_Admin;
