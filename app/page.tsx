'use client';
import '../i18n'; // ✅ Import here — client only


import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';

export default function HomePage() {
 

  return (
    <main className="p-4">
      <Header></Header>
      <Navbar></Navbar>
      
    </main>
  );
}
