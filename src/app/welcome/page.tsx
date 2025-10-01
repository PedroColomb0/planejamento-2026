import Link from 'next/link';

export default function WelcomePage() {
  return (
    <main>
      <div className="background"></div>
      
      <div className="container">
        <div>
          <h1 className="welcome-text">Bem-vindo!</h1>
          <p>
            <Link href="/" className="back-link">
              Voltar ao início
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}