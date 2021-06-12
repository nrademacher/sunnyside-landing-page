const Footer = () => (
  <footer className="flex flex-col items-center py-16 bg-[#90d4c5] text-brand-primary-cyan-2">
    <img src="/images/logo-footer.svg" alt="Logo" className="mb-14" />
    <ul className="flex mb-24 space-x-16">
      <li className="cursor-pointer duration-200 hover:text-white">About</li>
      <li className="cursor-pointer duration-200 hover:text-white">Services</li>
      <li className="cursor-pointer duration-200 hover:text-white">Projects</li>
    </ul>
    <ul className="flex space-x-6">
      <li className="cursor-pointer">
        <img src="/images/icon-facebook.svg" alt="Facebook" />
      </li>
      <li className="cursor-pointer">
        <img src="/images/icon-instagram.svg" alt="Instagram" />
      </li>
      <li className="cursor-pointer">
        <img src="/images/icon-twitter.svg" alt="Twitter" />
      </li>
      <li className="cursor-pointer">
        <img src="/images/icon-pinterest.svg" alt="Pinterest" />
      </li>
    </ul>
  </footer>
);

export default Footer;
