import { Link, MenuItem } from "../../utils/exports";

export const MenuLink = ({ to, iconLable, label }) => {
  return (
    <Link href={to} passHref>
      <MenuItem icon={iconLable}>{label}</MenuItem>
    </Link>
  );
};
