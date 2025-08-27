import { ReactNode } from 'react'

const Sidebar = () => {
    // Exemplo de componente Sidebar
    return (
        <aside className="w-64 p-6 bg-white shadow-md">
            <h1 className="text-3xl font-bold text-brand-blue-dark">Dulex</h1>
            <nav className="mt-10">
                <a href="/dashboard" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-brand-blue-light text-brand-gray-dark">Dashboard</a>
                <a href="/itens" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-brand-blue-light text-brand-gray-dark">Itens</a>
                <a href="/chaves" className="block py-2.5 px-4 rounded transition duration-200 hover:bg-brand-blue-light text-brand-gray-dark">Chaves</a>
            </nav>
        </aside>
    )
}


export default function MainLayout({ children }: { children: ReactNode }) {
  // Aqui você adicionará a lógica para proteger a rota,
  // verificando se o usuário está logado.
  
  return (
    <div className="flex h-screen bg-brand-gray-light">
      <Sidebar />
      <main className="flex-1 p-8 overflow-y-auto">
        {children}
      </main>
    </div>
  );
}