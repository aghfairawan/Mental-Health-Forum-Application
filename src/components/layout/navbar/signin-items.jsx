import { Dropdown, Avatar } from "flowbite-react";
import LogoutBtn from "../../ui/logout.btn";

export default function DropdownNavItems() {
  return (
    <Dropdown arrowIcon={false} inline label={<Avatar alt="User settings" rounded placeholderInitials="U" className="hover:opacity-80" />} className="dark:bg-sub-dark w-32 ">
      <>
        <Dropdown.Item href="/login">Login</Dropdown.Item>
        <Dropdown.Item href="/register">Register</Dropdown.Item>
        <Dropdown.Divider />
        <Dropdown.Item>
          <LogoutBtn />
        </Dropdown.Item>
      </>
    </Dropdown>
  );
}
