import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  ReactNode,
} from "react";
import { Product, CartItem } from "./data/product";

interface CartContextType {
  cartItems: CartItem[];
  totalPrice: number;
  addToCart: (product: Product) => void;
  removeFromCart: (productId: number) => void;
  increaseQuantity: (productId: number) => void;
  decreaseQuantity: (productId: number) => void;
  clearCart: () => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>(() => {
    try {
      const storedData = localStorage.getItem("MY_APP_CART");
      return storedData ? JSON.parse(storedData) : [];
    } catch {
      return [];
    }
  });

  useEffect(() => {
    localStorage.setItem("MY_APP_CART", JSON.stringify(cartItems));
  }, [cartItems]);

  // ===== THÊM SẢN PHẨM VÀO GIỎ =====
  const addToCart = (product: Product) => {
    const fixedProduct = {
      ...product,
      id: Number(product.id), // ⭐ Quan trọng
      price: Number(product.price), // ⭐ Đảm bảo luôn là number
    };

    setCartItems((prev) => {
      const existing = prev.find((item) => item.product.id === fixedProduct.id);

      if (existing) {
        return prev.map((item) =>
          item.product.id === fixedProduct.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      return [...prev, { product: fixedProduct, quantity: 1 }];
    });
  };

  const removeFromCart = (id: number) =>
    setCartItems((prev) => prev.filter((i) => i.product.id !== id));

  const increaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.product.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseQuantity = (id: number) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.product.id === id)
            return { ...item, quantity: item.quantity - 1 };
          return item;
        })
        .filter((item) => item.quantity > 0)
    );
  };

  const clearCart = () => setCartItems([]);

  const totalPrice = cartItems.reduce(
    (sum, item) => sum + Number(item.product.price) * item.quantity,
    0
  );

  return (
    <CartContext.Provider
      value={{
        cartItems,
        totalPrice,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error("useCart must be used within a CartProvider");
  return context;
};
