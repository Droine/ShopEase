import { create } from "zustand";
import { calculateSubtotal } from "../Utils/calculateSubtotal";
export const useCartStore = create((set) => ({
  cart: [],
  total: 0,
  subtotal: 0,
  addToCart: (product) => {
    set((prevState) => {
      const existingItem = prevState.cart.find(
        (item) => item.id === product.id
      );

      const newCart = existingItem
        ? prevState.cart.map((item) =>
            item.id === product.id
              ? { ...item, quantity: item.quantity + 1 }
              : item
          )
        : [...prevState.cart, { ...product, quantity: 1 }];

      const newSubtotal = calculateSubtotal(newCart);

      return { cart: newCart, subtotal: newSubtotal, total: newSubtotal };
    });
  },

  clearCart: () => set({ cart: [], subtotal: 0, total: 0 }),

  handleIncrease: (id) => {
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      );
      const newSubtotal = calculateSubtotal(updatedCart);
      return { cart: updatedCart, subtotal: newSubtotal, total: newSubtotal };
    });
  },

  handleDecrease: (id) => {
    set((state) => {
      const updatedCart = state.cart.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      const newSubtotal = calculateSubtotal(updatedCart);
      return { cart: updatedCart, subtotal: newSubtotal, total: newSubtotal };
    });
  },

  handleRemove: (id) => {
    set((state) => {
      const updatedCart = state.cart.filter((item) => item.id !== id);
      const newSubtotal = calculateSubtotal(updatedCart);
      return { cart: updatedCart, subtotal: newSubtotal, total: newSubtotal };
    });
  },

  handleSubTotal: () => {
    set((state) => {
      const subtotal = state.cart.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );

      let total = subtotal;
      return { subtotal, total };
    });
  },
}));

export default useCartStore;
