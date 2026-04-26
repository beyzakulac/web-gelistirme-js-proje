import { useState } from "react";

function BookForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [status, setStatus] = useState("Okunacak");
  const [notes, setNotes] = useState(""); // Notlar için yeni state

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !author) return;

    onAdd({
      id: Date.now(),
      title,
      author,
      status,
      notes, // Notları gönderiyoruz
    });

    setTitle("");
    setAuthor("");
    setStatus("Okunacak");
    setNotes(""); // Formu temizliyoruz
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-lg shadow-sm border border-gray-200 mb-8"
    >
      <h2 className="text-xl font-semibold mb-4 text-gray-700">
        Yeni Kitap Ekle
      </h2>
      <div className="flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-4">
          <input
            type="text"
            placeholder="Kitap Adı"
            className="flex-1 border border-gray-300 p-2 rounded focus:ring-1 focus:ring-blue-500 outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <input
            type="text"
            placeholder="Yazar Adı"
            className="flex-1 border border-gray-300 p-2 rounded focus:ring-1 focus:ring-blue-500 outline-none"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
          />
          <select
            className="border border-gray-300 p-2 rounded bg-white cursor-pointer outline-none"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
          >
            <option value="Okunacak">Okunacak</option>
            <option value="Okunuyor">Okunuyor</option>
            <option value="Okundu">Okundu</option>
          </select>
        </div>

        {/* Not Alanı */}
        <textarea
          placeholder="Kitap hakkında notların..."
          className="w-full border border-gray-300 p-2 rounded focus:ring-1 focus:ring-blue-500 outline-none h-24 resize-none"
          value={notes}
          onChange={(e) => setNotes(e.target.value)}
        />

        <button
          type="submit"
          className="bg-purple-600 text-white font-medium px-6 py-2 rounded hover:bg-purple-700 transition-colors w-full md:w-auto self-end"
        >
          Kütüphaneye Ekle
        </button>
      </div>
    </form>
  );
}

export default BookForm;
