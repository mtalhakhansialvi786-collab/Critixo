import axios from "axios";

// Environment variable ke bajaye direct backend link dal dein
const API_URL = "https://critixo-mik3.vercel.app";

export const fetchBooks = async () => {
  const res = await axios.get(`${API_URL}/api/books/all`);
  return res.data;
};

export const createOrder = async (bookId, whatsapp) => {
  return await axios.post(`${API_URL}/api/orders`, {
    bookId,
    whatsapp,
  });
};
