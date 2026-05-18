import { create } from "zustand";

export const useAuthStore = create((set) => ({
    user: null, // initial user will empty
    loading: false,

    // user register
    register: async (name, email, phone, country, city, state, zip, address, username, password) => {
        set({ loading: true });

        try {
            const res = await fetch("http://localhost:5000/api/auth/register", {
                method: "POST",
                credentials: "include", //cookie set ho jayega
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ name, email, phone, country, city, state, zip, address, username, password })
            });

            const data = await res.json();

            if (!res.ok) {
                throw new Error(data.message)
            }

            // auto login user
            set({ user: data.user })
        } finally {
            set({ loading: false });
        }
    },

    // user login
    login: async (email, password) => {
        try {
            const res = await fetch("http://localhost:5000/api/auth/login", {
                method: "POST",
                credentials: "include",
                headers: { "content-type": "application/json" },
                body: JSON.stringify({ email, password })
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }

            localStorage.setItem("token", data.token);

            set({ user: data.user });

        } catch (err) {
            console.log(err);
        }
    },

    logout: async () => {
        localStorage.removeItem("token");
        set({ user: null });
    },
    // user logout

    // user profile
    profile: async () => {
        try {
            const token = localStorage.getItem("token");

            const res = await fetch("http://localhost:5000/api/auth/profile", {
                method: "GET",
                header: {
                    authorization: `Bearer ${token}`

                }
            });

            const data = await res.json();
            if (!res.ok) {
                throw new Error(data.message);
            }

            console.log("profile", data.user);

            set({ user: data.user });
        } catch (err) {
            console.log(err);
        }
    }
}))