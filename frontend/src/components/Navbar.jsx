const Navbar = ({ links }) => {
  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <ul className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-10 py-4">
        {links.map((link, index) => (
          <li key={index}>
            <a
              href={link.url}
              className="text-gray-700 font-semibold hover:text-indigo-600 transition duration-300"
            >
              {link.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
