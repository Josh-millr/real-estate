import {
  useContext,
  Image,
  Box,
  Icon,
  Flex,
  ScrollMenu,
  VisibilityContext,
  FaArrowAltCircleLeft,
  FaArrowAltCircleRight,
} from "../../utils/exports";

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginRight="1">
      <Icon
        as={FaArrowAltCircleLeft}
        onClick={() => scrollPrev()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Flex justifyContent="center" alignItems="center" marginLeft="1">
      <Icon
        as={FaArrowAltCircleRight}
        onClick={() => scrollNext()}
        fontSize="2xl"
        cursor="pointer"
        d={["none", "none", "none", "block"]}
      />
    </Flex>
  );
};

export default function ImageSrollbar({ data }) {
  return (
    <ScrollMenu
      LeftArrow={LeftArrow}
      RightArrow={RightArrow}
      style={{ overflow: "hidden" }}
    >
      {data.map(({id, url}) => (
        <Box
          key={id}
          width="910px"
          itemId={id}
          overflow="hidden"
          p="1"
        >
          <Image
            placeholder="blur"
            blurDataURL={url}
            src={url}
            width={1000}
            height={500}
            sizes="(max-width: 500px) 100px, (max-width: 1023px) 400px, 1000px"
            alt="carousel image"
          />
        </Box>
      ))}
    </ScrollMenu>
  );
}
