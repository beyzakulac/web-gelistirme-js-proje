import { useState } from "react";
import BookForm from "../Components/BookForm";
import BookList from "../Components/BookList";

function Home() {
  // Notlar alanının da eklendiği tam veri setimiz
  const [books, setBooks] = useState([
    {
      id: 1,
      title: "Simyacı",
      author: "Paulo Coelho",
      status: "Okundu",
      notes: "Hayallerinin peşinden gitmeyi anlatan harika bir eser.",
    },
    {
      id: 2,
      title: "1984",
      author: "George Orwell",
      status: "Okunacak",
      notes: "",
    },
  ]);

  // Ekleme İşlemi
  const addBook = (newBook) => {
    setBooks([...books, newBook]);
  };

  // Silme İşlemi
  const deleteBook = (id) => {
    const filteredBooks = books.filter((book) => book.id !== id);
    setBooks(filteredBooks);
  };

  // Güncelleme İşlemi
  const updateBookStatus = (id, newStatus) => {
    const updatedBooks = books.map((book) =>
      book.id === id ? { ...book, status: newStatus } : book,
    );
    setBooks(updatedBooks);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-8">
      <div className="max-w-4xl mx-auto">
        {/* Üst Başlık */}
        <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-200 mb-8 text-center">
          <h1 className="text-3xl font-bold text-gray-800 flex items-center justify-center gap-2">
            Kütüphanem
          </h1>
          <p className="text-gray-500 mt-2">
            Kitap okuma durumunu ve notlarını kolayca takip et
          </p>
        </div>

        {/* Bileşenler */}
        <BookForm onAdd={addBook} />
        <BookList
          books={books}
          onDelete={deleteBook}
          onUpdateStatus={updateBookStatus}
        />
      </div>
    </div>
  );
}

export default Home;
