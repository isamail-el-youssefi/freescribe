export default function Header() {
  return (
    <header className="flex items-center justify-between p-4 gap-4">
      <h1>
        Free<span className="text-blue-700">Scribe</span>
      </h1>
      <button className="flex items-center gap-2 bg-white px-3 py-2 rounded-xl shadow-lg shadow-blue-500/10 ">
        <p>New</p>
        <i className="fa-solid fa-plus"></i>
      </button>
    </header>
  );
}
