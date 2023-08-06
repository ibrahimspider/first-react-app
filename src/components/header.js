export default function Header() {
  return (
    <header className="p-4 bg-slate-600 text-white">
      <div className="flex justify-between items-center">
        <div className="font-semibold text-lg">
          <a href="s">React App</a>
        </div>
        <div>
          <ul className="flex">
            <li className="px-2">
              <a href="s">Home</a>
            </li>
            <li className="px-2">
              <a href="s">About</a>
            </li>
            <li className="px-2">
              <a href="s">Contact</a>
            </li>
            <li className="px-2">
              <a href="s">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
