function BookList({ books, onDelete, onUpdateStatus }) {
  if (books.length === 0) {
    return (
      <p className="text-center text-gray-500 my-8">
        Henüz kütüphanende kitap yok.
      </p>
    );
  }

  return (
    <div className="grid gap-4">
      {books.map((book) => (
        <div
          key={book.id}
          className="bg-white p-5 rounded-lg shadow-sm border border-gray-200 hover:shadow-md transition-shadow"
        >
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div className="flex-1">
              <h3 className="font-bold text-lg text-gray-800">{book.title}</h3>
              <p className="text-gray-500 text-sm">{book.author}</p>
            </div>

            <div className="flex items-center gap-3">
              <span
                className={`px-3 py-1 rounded-full text-xs font-medium 
                ${
                  book.status === "Okundu"
                    ? "bg-green-100 text-green-700"
                    : book.status === "Okunuyor"
                      ? "bg-yellow-100 text-yellow-700"
                      : "bg-gray-100 text-gray-700"
                }`}
              >
                {book.status}
              </span>
              <select
                className="text-sm border border-gray-200 rounded p-1 bg-gray-50 outline-none"
                value={book.status}
                onChange={(e) => onUpdateStatus(book.id, e.target.value)}
              >
                <option value="Okunacak">Okunacak</option>
                <option value="Okunuyor">Okunuyor</option>
                <option value="Okundu">Okundu</option>
              </select>
              <button
                onClick={() => onDelete(book.id)}
                className="text-red-500 hover:text-red-700 text-sm font-medium"
              >
                Sil
              </button>
            </div>
          </div>

          {/* Not Gösterim Alanı */}
          {book.notes && (
            <div className="mt-4 p-3 bg-blue-50 rounded-md border-l-4 border-blue-400">
              <p className="text-sm text-gray-700 italic">
                <span className="font-semibold not-italic text-blue-700">
                  Not:
                </span>{" "}
                {book.notes}
              </p>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

export default BookList;
