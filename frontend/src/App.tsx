import { ItemList } from './components/ItemList'

function App() {
  return (
    <div className="min-h-screen bg-black w-full">
      <header className="bg-black shadow">
        <div className="max-w-7xl mx-auto py-6 px-4">
          <h1 className="!text-2xl font-bold text-white">
            Keystone + React + Vite + TailwindCSS
          </h1>
        </div>
      </header>
      <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
        <ItemList />
      </main>
    </div>
  )
}

export default App
