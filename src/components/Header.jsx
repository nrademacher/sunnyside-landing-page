const Header = () => (
  <header className="p-8 w-screen h-screen text-white bg-center bg-cover text-[18px] bg-header-hero-mobile md:bg-header-hero-desktop">
    <nav className="flex justify-between items-center">
      <img src="/images/logo.svg" alt="logo" />
      <ul className="flex items-center space-x-12">
        <li>
          <img
            className="block md:hidden"
            src="/images/icon-hamburger.svg"
            alt="Menu"
          />
        </li>
        <li className="hidden cursor-pointer md:block">About</li>
        <li className="hidden cursor-pointer md:block">Services</li>
        <li className="hidden cursor-pointer md:block">Projects</li>
        <li className="hidden py-4 px-7 font-serif text-base text-black uppercase bg-white rounded-3xl duration-200 cursor-pointer md:block hover:bg-opacity-50 hover:text-white">
          Contact
        </li>
      </ul>
    </nav>
    <h1 className="mt-28 font-serif tracking-widest leading-normal text-center uppercase text-[2.5rem] md:text-6xl">
      We are creatives
    </h1>
    <img
      src="/images/icon-arrow-down.svg"
      alt="Arrow down"
      className="mx-auto mt-20 duration-1000 animate-bounce drop-shadow-2xl md:mt-32"
    />
  </header>
);

export default Header;
