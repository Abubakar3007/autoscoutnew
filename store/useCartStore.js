import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useCartStore = create(
    persist((set) => ({
        items: [],

        // 🟢 Add to cart
        addToCart: (product) => set((state) => {
            const exist = state.items.find((item) => item.id === product.id);

            if (exist) {
                return {
                    items: state.items.map((item) => item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item),
                };
            }

            return {
                items: [...state.items, { ...product, quantity: 1 }],
            };
        }),

        // 🔴 Remove
        removeFromCart: (id) => set((state) => ({
            items: state.items.filter((item) => item.id !== id),

        })),

        // 🟡 Clear
        clearCart: () => set({ items: [] }),
        // 🔵 Increase
        increaseQuantity: (id) =>
            set((state) => ({
                items: state.items.map((item) => item.id === id ? { ...item, quantity: item.quantity + 1 } : item),
            })),

        // 🟣 Decrease
        decreaseQuantity: (id) =>
            set((state) => ({
                items: state.items.map((item) => item.id === id ? { ...item, quantity: item.quantity - 1 } : item).filter((item) => item.quantity > 0),
            })),
    }),
        {
            name: "cart-storage", // localStorage key
        }
    )
);

// Redux old way
// const initialState = { items: [] };

// export const cartReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "ADD":
//             const exits = state.items.find((item) => item.id === action.payload.id);

//             if (exits) {
//                 return {
//                     items: state.items.map((item) => item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item)
//                 }
//             }

//             return {
//                 items: [...state.items, { ...action.payload, quantity: 1 }]
//             };
//         case "REMOVE":
//             return {
//                 items: state.items.filter((item) => item.id === action.payload.id),
//             }
//         default:
//             return state;
//     }
// }
