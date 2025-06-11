import { useState } from "react";

interface User {
    id: string;
    username: string;
    email: string;
}
export function useAuth() {
    const [user, setUser] = useState<User | null>(null);

    return {
        user
    }
}