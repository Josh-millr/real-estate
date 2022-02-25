import {
  Link,
  MenuLink,
  FcMenu,
  FcHome,
  FcAbout,
  BsSearch,
  FiKey,
  Menu,
  MenuButton,
  MenuList,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "../../utils/exports";

const Navbar = () => {
  const links = [
    {
      to: "/",
      icon: <FcHome />,
      placeholder: "Home",
    },
    {
      to: "/search",
      icon: <BsSearch />,
      placeholder: "Search",
    },
    {
      to: "/search?purpose=for-sale",
      icon: <FcAbout />,
      placeholder: "Buy Property",
    },
    {
      to: "/search?purpose=for-rent",
      icon: <FiKey />,
      placeholder: "Rent Property",
    },
  ];
  return (
    <Flex p="2" borderBottom="1px" borderColor="gray.100">
      <Box fontSize="3xl" color="blue.400" fontWeight="bold">
        <Link href="/" paddingLeft="2">
          Rental
        </Link>
      </Box>
      <Spacer />
      <Box>
        <Menu>
          <MenuButton
            as={IconButton}
            icon={<FcMenu />}
            variant="outlined"
            color="red.400"
          />
          {}
          <MenuList>
            {links.map(({ to, icon, placeholder }, key) => (
              <MenuLink
                key={key}
                to={to}
                iconLable={icon}
                label={placeholder}
              />
            ))}
          </MenuList>
        </Menu>
      </Box>
    </Flex>
  );
};

export default Navbar;
