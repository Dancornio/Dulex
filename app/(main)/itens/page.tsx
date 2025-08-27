// app/(main)/itens/page.tsx
'use client';

// Exemplo de dados (você buscará isso do Firestore)
const items = [
  { id: '1', name: 'Projetor Dell 1550', status: 'Disponível', checkedOutBy: null },
  { id: '2', name: 'Notebook Lenovo V14', status: 'Em uso', checkedOutBy: 'Prof. Ana' },
  { id: '3', name: 'Caixa de Som JBL', status: 'Disponível', checkedOutBy: null },
  { id: '4', name: 'Microfone sem fio', status: 'Manutenção', checkedOutBy: null },
];

const StatusBadge = ({ status }: { status: string }) => {
    const baseClasses = "px-3 py-1 text-xs font-semibold rounded-full";
    if (status === 'Disponível') return <span className={`${baseClasses} bg-green-100 text-green-800`}>Disponível</span>
    if (status === 'Em uso') return <span className={`${baseClasses} bg-yellow-100 text-yellow-800`}>Em uso</span>
    return <span className={`${baseClasses} bg-red-100 text-red-800`}>Manutenção</span>
}


export default function ItensPage() {
  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold text-gray-800">Controle de Itens</h1>
        <button className="px-4 py-2 font-semibold text-white transition duration-200 bg-brand-blue rounded-md hover:bg-brand-blue-dark">
          + Adicionar Item
        </button>
      </div>

      <div className="p-6 bg-white rounded-lg shadow-md">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-brand-gray-light">
              <th className="p-4">Item</th>
              <th className="p-4">Status</th>
              <th className="p-4">Retirado por</th>
              <th className="p-4">Ações</th>
            </tr>
          </thead>
          <tbody>
            {items.map((item) => (
              <tr key={item.id} className="border-b border-brand-gray-light last:border-b-0">
                <td className="p-4 font-medium text-gray-700">{item.name}</td>
                <td className="p-4"><StatusBadge status={item.status} /></td>
                <td className="p-4 text-gray-500">{item.checkedOutBy || '---'}</td>
                <td className="p-4">
                  <button className="text-sm font-bold text-brand-blue hover:underline">
                    {item.status === 'Disponível' ? 'Retirar' : 'Devolver'}
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}