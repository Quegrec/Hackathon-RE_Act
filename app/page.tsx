'use client';
import MasonryGrid from '@/components/MasonryGrid';

export default function Home() {
  return (
    <main className="bg-white text-gray-800 min-h-screen">
      <header className="p-6 bg-green-600 text-white flex flex-row items-center">
        <div className="flex flex-col items-center">
        <img src="RE_act.svg" alt="logo" />
        <p className="text-lg">Parce que réparer, c’est agir.</p>
        </div>
        <div className="mt-4 ml-auto flex space-x-4">
            <button
            className="bg-white text-green-600 px-4 py-2 rounded shadow hover:bg-gray-200"
            onClick={() => alert('Search popup coming soon!')}
            >
            <img src="search.png" alt="loupe" className="w-8 h-4" />
            </button>
          <button className="bg-white text-green-600 px-4 py-2 rounded shadow hover:bg-gray-200">
            burger
          </button>
        </div>
      </header>
      <section className="p-6">
        <MasonryGrid />
      </section>
      <div className="fixed bottom-6 right-6">
        <button
          className="bg-green-600 text-white p-4 rounded-full shadow-lg hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          onClick={() => alert('Chatbot coming soon!')}
        >
          <img src="chatbot.svg" alt="Chatbot" className="w-8 h-8" />
        </button>
      </div>
        <footer className="p-6 bg-gray-100 text-center">
          <p className="text-gray-600">© 2025 RE_Act. Tous droits réservés.</p>
          <p className="text-gray-600">Mentions légales | Politique de confidentialité</p>
          <p className="text-gray-600">Contact:NON</p>
        </footer>
    </main>
  );
}
