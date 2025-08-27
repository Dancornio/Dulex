// app/page.tsx
import { redirect } from 'next/navigation';

export default function HomePage() {
  // Redireciona permanentemente da raiz "/" para "/login"
  redirect('/login');
}