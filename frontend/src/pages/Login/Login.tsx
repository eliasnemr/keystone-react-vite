const Login = ({ onLogin }: { onLogin: (email: string, password: string) => void }) => {

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
                
        const { email, password } = e.target as HTMLFormElement;        
        onLogin(email.value, password.value);
    }

    return (
        <div className="h-screen flex flex-col gap-4 items-center justify-center">
            <h1 className="text-2xl font-bold">Login</h1>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input id="email" className="border-2 border-gray-300 rounded-md p-2" type="email" placeholder="Email" />
                <input id="password" className="border-2 border-gray-300 rounded-md p-2" type="password" placeholder="Password" />
                <button className="bg-blue-500 text-white p-2 rounded-md" type="submit">Login</button>
            </form>
        </div>
    )
}

export default Login;