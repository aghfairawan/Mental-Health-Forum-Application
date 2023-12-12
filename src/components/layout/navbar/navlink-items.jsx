import { NavLink } from "react-router-dom";

export default function NavLinks() {
  return (
    <>
      <NavLink className="hover:opacity-80" to="">
        Home
      </NavLink>
      <NavLink className="hover:opacity-80" to="">
        Articles
      </NavLink>
      <NavLink className="hover:opacity-80" to="">
        Contact
      </NavLink>
      <NavLink className="hover:opacity-80" to="">
        Feedback
      </NavLink>
    </>
  );
}
