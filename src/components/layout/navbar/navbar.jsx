import ThemeBtn from "../../ui/theme-btn";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-20 bg-dark-navy text-white">
      <div className="flex max-w-7xl mx-auto items-center justify-between gap-10 py-2 px-1 lg:px-0">
        <div className="font-semibold">
          <h1>Good Health & </h1>
          <span>Well-Being Forum</span>
        </div>
        <div className="flex gap-2">
          <p>nav item</p>
          <p>nav item</p>
          <p>nav item</p>
        </div>
        <div className="flex gap-4">
          <ThemeBtn />
          <p>signup</p>
        </div>
      </div>
    </nav>
  );
}
