const Footer = ({ data }) => {
  return (
    <footer className="bg-gray-900 text-gray-300 py-6 text-center">
      <p className="font-semibold text-white">Contact Us</p>
      <p>Email: {data.email}</p>
      <p>phone: {data.phone}</p>
      <p>Address: {data.address}</p>

      <p> © 2026 My Application. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
