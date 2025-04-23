export const calculateSubtotal = (cart) =>
  cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
