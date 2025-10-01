import Link from 'next/link';

export default function HomePage() {
  return (
    <main>
      {/* O fundo é aplicado globalmente pelo CSS */}
      <div className="background"></div>
      
      <div className="container">
        <h1 className="title">
          <Link href="/welcome">
            PLANEJAMENTO ESTRATEGICO 2026<br />
            GRUPO ROVEMA<br />
            ADELIO BAROFALDI
          </Link>
        </h1>
      </div>
    </main>
  );
}