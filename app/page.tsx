import Avatar from "./components/Avatar";
import LinkButton from "./components/LinkButton";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-950 to-gray-900">
      <div className="text-center p-8">

        <Avatar />

        <h1 className="text-4xl font-bold text-white tracking-widest mb-2">
          BUBAA
        </h1>
        <p className="text-gray-400 mb-8">Retrouve-moi sur mes réseaux</p>

        <LinkButton
          href="https://www.facebook.com/babs.ndiaye.5477/"
          color="bg-blue-600"
          hover="hover:bg-blue-700"
          emoji="📘"
          label="Facebook"
        />

        <LinkButton
          href="https://wa.me/221778546225"
          color="bg-green-500"
          hover="hover:bg-green-600"
          emoji="💬"
          label="WhatsApp"
        />

        <Footer />

      </div>
    </main>
  );
}