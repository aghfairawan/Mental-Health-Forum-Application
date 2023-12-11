import ThemeBtn from "../../ui/theme-btn";

export default function Navbar() {
  return (
    <nav className="sticky top-0 w-full z-20 bg-red-500">
      <div className="flex max-w-7xl mx-auto items-center justify-evenly gap-10 px-4 py-2">
        <div>Logo</div>
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
