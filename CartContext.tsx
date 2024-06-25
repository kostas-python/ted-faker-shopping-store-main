

import React, { createContext, useState, useContext, ReactNode } from 'react';
import { Product, Color, Size } from './types';


interface CartItem extends Product {
  color: Color;
  size: Size;
  quantity: number;
}


interface CartContextType {
  cart: CartItem[];
  addToCart: (product: Product, color: Color, size: Size) => void;
}


const CartContext = createContext<CartContextType | undefined>(undefined);


export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};


export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cart, setCart] = useState<CartItem[]>([]);

  const addToCart = (product: Product, color: Color, size: Size) => {
    setCart((prevCart) => [
      ...prevCart,
      { ...product, color, size, quantity: 1 }
    ]);
  };

  
  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
};
