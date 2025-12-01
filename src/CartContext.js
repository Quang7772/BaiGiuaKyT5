import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext, useState, useEffect, } from "react";
const CartContext = createContext(undefined);
export const CartProvider = ({ children }) => {
    const [cartItems, setCartItems] = useState(() => {
        try {
            const storedData = localStorage.getItem("MY_APP_CART");
            return storedData ? JSON.parse(storedData) : [];
        }
        catch {
            return [];
        }
    });
    useEffect(() => {
        localStorage.setItem("MY_APP_CART", JSON.stringify(cartItems));
    }, [cartItems]);
    // ===== THÊM SẢN PHẨM VÀO GIỎ =====
    const addToCart = (product) => {
        const fixedProduct = {
            ...product,
            id: Number(product.id),
            price: Number(product.price), // ⭐ Đảm bảo luôn là number
        };
        setCartItems((prev) => {
            const existing = prev.find((item) => item.product.id === fixedProduct.id);
            if (existing) {
                return prev.map((item) => item.product.id === fixedProduct.id
                    ? { ...item, quantity: item.quantity + 1 }
                    : item);
            }
            return [...prev, { product: fixedProduct, quantity: 1 }];
        });
    };
    const removeFromCart = (id) => setCartItems((prev) => prev.filter((i) => i.product.id !== id));
    const increaseQuantity = (id) => {
        setCartItems((prev) => prev.map((item) => item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item));
    };
    const decreaseQuantity = (id) => {
        setCartItems((prev) => prev
            .map((item) => {
            if (item.product.id === id)
                return { ...item, quantity: item.quantity - 1 };
            return item;
        })
            .filter((item) => item.quantity > 0));
    };
    const clearCart = () => setCartItems([]);
    const totalPrice = cartItems.reduce((sum, item) => sum + Number(item.product.price) * item.quantity, 0);
    return (_jsx(CartContext.Provider, Object.assign({ value: {
            cartItems,
            totalPrice,
            addToCart,
            removeFromCart,
            increaseQuantity,
            decreaseQuantity,
            clearCart,
        } }, { children: children }), void 0));
};
export const useCart = () => {
    const context = useContext(CartContext);
    if (!context)
        throw new Error("useCart must be used within a CartProvider");
    return context;
};
