'use client';

import { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '@/lib/firebase';
import { useRouter } from 'next/navigation';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
    try {
      await signInWithEmailAndPassword(auth, email, password);
      router.push('/dashboard'); // Redireciona para o dashboard após o login
    } catch (err: any) {
      setError('Falha ao autenticar. Verifique suas credenciais.');
      console.error(err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-brand-blue-light">
      <div className="w-full max-w-md p-8 space-y-8 bg-white rounded-xl shadow-lg">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-brand-blue-dark">Dulex</h1>
          <p className="mt-2 text-brand-gray">Gestão de Itens e Chaves</p>
        </div>
        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <label htmlFor="email" className="text-sm font-medium text-brand-gray-dark">
              Email
            </label>
            <input
              id="email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md border-brand-gray focus:ring-brand-blue focus:border-brand-blue"
              placeholder="seuemail@instituicao.com"
            />
          </div>
          <div>
            <label
              htmlFor="password"
              className="text-sm font-medium text-brand-gray-dark"
            >
              Senha
            </label>
            <input
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full px-3 py-2 mt-1 border rounded-md border-brand-gray focus:ring-brand-blue focus:border-brand-blue"
              placeholder="********"
            />
          </div>

          {error && <p className="text-sm text-red-600">{error}</p>}

          <div>
            <button
              type="submit"
              className="w-full px-4 py-2 font-semibold text-white transition duration-200 bg-brand-blue rounded-md hover:bg-brand-blue-dark focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-blue"
            >
              Entrar
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}