import axios from "axios";

// Ye line Vercel se VITE_API_URL uthaye gi, aur agar local ho to 5000 use karegi
const API_URL = import.meta.env.VITE_API_URL || "http://localhost:5000";

// 🔹 Get all books
export const fetchBooks = async () => {
  const res = await axios.get(`${API_URL}/api/books/all`); // Check karein endpoint 'all' hai ya nahi
  return res.data;
};

// 🔹 Create order (WhatsApp)
export const createOrder = async (bookId, whatsapp) => {
  return await axios.post(`${API_URL}/api/orders`, {
    bookId,
    whatsapp,
  });
};
