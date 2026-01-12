import { useState, useEffect } from 'react'
import Header from "./components/Header"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Dashboard from "./components/Dashboard"
import { API_URL } from "./services/api";

function App() {
  const [header, setHeader] = useState({
    title: "My Application",
    image: ""
  })

  const [navbar, setNavbar] = useState([
    { label: "Home", url: "#"},
    { label: "About", url: "#"},
    { label: "Contact", url: "#"}
  ])

  const [footer, setFooter] = useState({
    email: "hello@gmail.com",
    phone: "+94 77 123 7547",
    address: "Colombo, Sri Lanka"
  })

  useEffect(() => {
    const saved = localStorage.getItem("componentsData");
    if (saved) {
      const parsed = JSON.parse(saved);
      setHeader(parsed.header);
      setNavbar(parsed.navbar);
      setFooter(parsed.footer);
    }
  }, []);

  useEffect(() => {
    const data = { header, navbar, footer };
    localStorage.setItem("componentsData", JSON.stringify(data));
  }, [header, navbar, footer]);


    useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(API_URL);
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();

        if (data.header && data.header.title) setHeader(data.header);
        if (data.navbar && data.navbar.length > 0) setNavbar(data.navbar);
        if (data.footer && data.footer.email) setFooter(data.footer);
      } catch (err) {
        console.error("Error fetching dashboard data:", err);
      }
    };
    fetchData();
  }, []);




  return (
    <div className="min-h-screen flex flex-col">
      <Header data={header} />
      <Navbar links={navbar} />

      <main className="flex-1 p-6 bg-gray-300">
        <Dashboard
        header={header}
        setHeader={setHeader}
        navbar={navbar}
        setNavbar={setNavbar}
        footer={footer}
        setFooter={setFooter}
         />
      </main>

      <Footer data={footer}/>
    </div>
  )
}

export default App
