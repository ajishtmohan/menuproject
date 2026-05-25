import { Link } from "react-router-dom";

const menuLinks = [
  { name: "doctor", to: "/doctor" },
  { name: "treatments", to: "/treatments" },
  { name: "contact", to: "/contact" },
  { name: "consultation", to: "consultation" },
];

function Menu() {
  return (
    <ul className="flex gap-4 uppercase">
      {menuLinks.map((link) => (
        <li>
          <Link to={link.to}>{link.name}</Link>
        </li>
      ))}
    </ul>
  );
}

export default Menu;
