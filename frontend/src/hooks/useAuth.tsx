import { useState } from "react";

export default function useAuth() {
    const [session, setSession] = useState<{ email: string, username: string } | null>(null);
    const [isLoading, setIsLoading] = useState(false);


    const login = (email: string, password: string) => {
        console.log(email, password);
        setSession({ email, username: "John Doe" });

        setIsLoading(false);
    }

    return { session, login, isLoading };
}