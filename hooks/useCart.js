import { useCartStore } from "@/store/useCartStore";

export const useCart = (car) => {
    const addToCart = useCartStore((state) => state.addToCart);
    const removeFromCart = useCartStore((state) => state.removeFromCart);
    const items = useCartStore((item) => item.items);

    let findCars = items.find((i) => i.id === car.id);

    const handleAddToCart = () => {
        if (findCars) {
            removeFromCart(car.id)
        }
        else {
            addToCart(car);
        }
    }

    return { handleAddToCart, findCars };
}