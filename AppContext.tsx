import React, { createContext, useContext, useState, ReactNode, useEffect } from 'react';
import { Product, CartItem, initialProducts } from '../store/products';

interface AppContextType {
  // Products
  products: Product[];
  addProduct: (product: Omit<Product, 'id'>) => void;
  updateProduct: (id: string, product: Partial<Product>) => void;
  deleteProduct: (id: string) => void;
  
  // Cart
  cart: CartItem[];
  addToCart: (product: Product) => void;
  removeFromCart: (productId: string) => void;
  updateCartQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  cartTotal: number;
  cartCount: number;
  
  // Auth
  isAdmin: boolean;
  adminPassword: string;
  login: (password: string) => boolean;
  logout: () => void;
  
  // Orders (for admin)
  orders: Order[];
  addOrder: (order: Omit<Order, 'id' | 'orderDate'>) => void;
}

export interface Order {
  id: string;
  orderDate: string;
  customerName: string;
  customerEmail: string;
  items: CartItem[];
  total: number;
  status: 'pending' | 'processing' | 'shipped' | 'delivered';
  shippingAddress: string;
}

const AppContext = createContext<AppContextType | undefined>(undefined);

export const useApp = () => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useApp must be used within AppProvider');
  }
  return context;
};

interface AppProviderProps {
  children: ReactNode;
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
  // Load from localStorage or use defaults
  const [products, setProducts] = useState<Product[]>(() => {
    const saved = localStorage.getItem('karmax_products');
    return saved ? JSON.parse(saved) : initialProducts;
  });

  const [cart, setCart] = useState<CartItem[]>(() => {
    const saved = localStorage.getItem('karmax_cart');
    return saved ? JSON.parse(saved) : [];
  });

  const [isAdmin, setIsAdmin] = useState<boolean>(() => {
    const saved = localStorage.getItem('karmax_admin');
    return saved === 'true';
  });

  const [orders, setOrders] = useState<Order[]>(() => {
    const saved = localStorage.getItem('karmax_orders');
    return saved ? JSON.parse(saved) : [];
  });

  const adminPassword = 'karmax2024'; // In production, use proper authentication

  // Save to localStorage
  useEffect(() => {
    localStorage.setItem('karmax_products', JSON.stringify(products));
  }, [products]);

  useEffect(() => {
    localStorage.setItem('karmax_cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('karmax_admin', String(isAdmin));
  }, [isAdmin]);

  useEffect(() => {
    localStorage.setItem('karmax_orders', JSON.stringify(orders));
  }, [orders]);

  // Product management
  const addProduct = (product: Omit<Product, 'id'>) => {
    const newProduct: Product = {
      ...product,
      id: Date.now().toString(),
    };
    setProducts([...products, newProduct]);
  };

  const updateProduct = (id: string, updatedProduct: Partial<Product>) => {
    setProducts(products.map(p => p.id === id ? { ...p, ...updatedProduct } : p));
  };

  const deleteProduct = (id: string) => {
    setProducts(products.filter(p => p.id !== id));
  };

  // Cart management
  const addToCart = (product: Product) => {
    setCart(prevCart => {
      const existing = prevCart.find(item => item.id === product.id);
      if (existing) {
        return prevCart.map(item =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId: string) => {
    setCart(cart.filter(item => item.id !== productId));
  };

  const updateCartQuantity = (productId: string, quantity: number) => {
    if (quantity <= 0) {
      removeFromCart(productId);
      return;
    }
    setCart(cart.map(item =>
      item.id === productId ? { ...item, quantity } : item
    ));
  };

  const clearCart = () => {
    setCart([]);
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  // Auth
  const login = (password: string): boolean => {
    if (password === adminPassword) {
      setIsAdmin(true);
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAdmin(false);
  };

  // Orders
  const addOrder = (order: Omit<Order, 'id' | 'orderDate'>) => {
    const newOrder: Order = {
      ...order,
      id: Date.now().toString(),
      orderDate: new Date().toISOString(),
    };
    setOrders([newOrder, ...orders]);
  };

  const value: AppContextType = {
    products,
    addProduct,
    updateProduct,
    deleteProduct,
    cart,
    addToCart,
    removeFromCart,
    updateCartQuantity,
    clearCart,
    cartTotal,
    cartCount,
    isAdmin,
    adminPassword,
    login,
    logout,
    orders,
    addOrder,
  };

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
