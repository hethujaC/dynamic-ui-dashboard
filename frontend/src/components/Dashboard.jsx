import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { API_URL } from "../services/api";

const cloudName = import.meta.env.VITE_CLOUDINARY_CLOUD_NAME;
const uploadPreset = import.meta.env.VITE_CLOUDINARY_UPLOAD_PRESET;

const Dashboard = ({
  header,
  setHeader,
  navbar,
  setNavbar,
  footer,
  setFooter,
}) => {
  const [uploading, setUploading] = useState(false);
  const [preview, setPreview] = useState(header.image || "");

  const handleImageChange = async (e) => {
    const file = e.target.files[0];
    if (!file) return;

    setPreview(URL.createObjectURL(file));

    const formData = new FormData();
    formData.append("file", file);
    formData.append("upload_preset", uploadPreset);
    formData.append("public_id", uuidv4());

    setUploading(true);
    try {
      const res = await fetch(
        `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
        {
          method: "POST",
          body: formData,
        }
      );
      const data = await res.json();
      setHeader({ ...header, image: data.secure_url });
      setPreview(data.secure_url);
    } catch (err) {
      console.error("Image upload failed:", err);
    } finally {
      setUploading(false);
    }
  };

  const updateNavbar = (index, field, value) => {
    const updated = [...navbar];
    updated[index][field] = value;
    setNavbar(updated);
  };

  return (
    <div className="space-y-8 max-w-3xl mx-auto">
      {/* Header Settings */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl shadow-lg text-white">
        <h2 className="font-bold mb-3 text-white">Header Settings</h2>
        <input
          type="text"
          placeholder="Header Title"
          value={header.title}
          onChange={(e) => setHeader({ ...header, title: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none mt-3"
        />

        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="border border-gray-300 rounded-lg p-2 focus:ring-2 focus:ring-indigo-400 outline-none mt-3"
        />

        {uploading && (
          <p className="text-sm text-white font-medium mt-2">
            Uploading image...
          </p>
        )}

        {preview && (
          <img
            src={preview}
            alt="Preview"
            className="mt-2 h-40 rounded shadow mx-auto"
          />
        )}
      </section>

      {/* Navbar Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl shadow-lg text-white">
        <h2 className="font-bold mb-3">Navbar Settings</h2>

        {navbar.map((link, i) => (
          <div key={i} className="grid grid-cols-2 gap-3 mb-3">
            <input
              type="text"
              placeholder="Link label"
              value={link.label}
              onChange={(e) => updateNavbar(i, "label", e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none mt-3"
            />

            <input
              type="text"
              placeholder="Link URL"
              value={link.url}
              onChange={(e) => updateNavbar(i, "url", e.target.value)}
              className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none mt-3"
            />
          </div>
        ))}
      </section>

      {/* Footer Section */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 p-6 rounded-xl shadow-lg text-white">
        <h2 className="font-bold mb-3">Footer Settings</h2>

        <input
          type="email"
          placeholder="Email"
          value={footer.email}
          onChange={(e) => setFooter({ ...footer, email: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none"
        />

        <input
          type="text"
          placeholder="phone"
          value={footer.phone}
          onChange={(e) => setFooter({ ...footer, phone: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none mt-3"
        />

        <input
          type="text"
          placeholder="Address"
          value={footer.address}
          onChange={(e) => setFooter({ ...footer, address: e.target.value })}
          className="border border-gray-300 rounded-lg p-2 w-full focus:ring-2 focus:ring-indigo-400 outline-none mt-3"
        />
      </section>

      <button
        onClick={async () => {
          try {
            const res = await fetch(API_URL, {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ header, navbar, footer }),
            });
            const data = await res.json();
            alert(data.message);
          } catch (err) {
            console.error("Error saving components data:", err);
            alert("Failed to save data");
          }
        }}
        className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-3 rounded-lg font-semibold tracking-wide hover:opacity-90 transition"
      >
        Save Changes
      </button>
    </div>
  );
};
export default Dashboard;
