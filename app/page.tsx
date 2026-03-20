export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="text-center p-8">
        <div className="w-24 h-24 rounded-full bg-gradient-to-br from-pink-500 to-blue-600 flex items-center justify-center text-white text-4xl font-bold mx-auto mb-4">
          B
        </div>
        <h1 className="text-4xl font-bold text-white tracking-widest mb-2">BUBAA</h1>
        <p className="text-gray-400 mb-8">Retrouve-moi sur mes réseaux</p>

        <a href="https://www.facebook.com/babs.ndiaye.5477/" target="_blank"
          className="flex items-center justify-center gap-3 w-80 mx-auto py-4 mb-4 rounded-xl bg-blue-600 text-white font-bold text-lg hover:bg-blue-700 transition">
          📘 Facebook
        </a>

        <a href="https://wa.me/221778546225" target="_blank"
          className="flex items-center justify-center gap-3 w-80 mx-auto py-4 rounded-xl bg-green-500 text-white font-bold text-lg hover:bg-green-600 transition">
          💬 WhatsApp
        </a>

        <p className="text-gray-600 text-sm mt-8">© 2026 BUBAA</p>
      </div>
    </main>
  );
}