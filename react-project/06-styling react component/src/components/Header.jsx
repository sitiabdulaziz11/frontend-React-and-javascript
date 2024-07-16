import logo from '../assets/logo.png';

export default function Header() {
  return (
    <header className="flex flex-col items-center mt-8 mb-16">
      <img src={logo} alt="A canvas" className='object-contain mb-8 w-22 h-22' />
      <h1 className='text-4xl font-semibold tracking-widest text-center uppercase text-amber-800 font-title'>ReactArt</h1>
      <p >A community of artists and art-lovers.</p>
    </header>
  );
}
