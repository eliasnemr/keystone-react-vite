import { ItemList } from './components/ItemList'
import useAuth from './hooks/useAuth';
import Login from './pages/Login/Login';

function App() {
  const { session, login } = useAuth();

  if (!session) {
    return <Login onLogin={login} />
  }

  return (
    <div className="min-h-screen bg-black w-full">
      <header className="bg-black shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="!text-2xl font-bold text-white">
            Keystone + React + Vite + TailwindCSS
          </h1>
          <h2>Welcome {session.username}</h2>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ItemList />
      </main>
    </div>
  )
}

export default App
