const Header = ({ data }) => {
  return (
    <header className="bg-gradient-to-r from-blue-500 to-purple-600 text-white p-10 text-center shadow-lg">
      <h1 className="text-4xl font-extrabold mb-4 tracking-wide">{data.title}</h1>

      {data.image && data.image.trim() !== "" && (
        <img
          src={data.image}
          alt="Header"
          className="mx-auto h-44 w-44 object-cover rounded-full border-4 border-white shadow-xl"
        />
      )}
    </header>
  );
};

export default Header;
