import {
  BoxRegular,
  LaptopRegular,
  PhoneRegular,
  HeadphonesRegular,
  FoodRegular,
  DocumentRegular,
  ShoppingBagRegular,
} from "@fluentui/react-icons";

export function mapProductIcon(key: string) {
  switch (key) {
    case "laptop":
      return <LaptopRegular />;
    case "smartphone":
      return <PhoneRegular />;
    case "headphones":
      return <HeadphonesRegular />;
    case "food":
      return <FoodRegular />;
    case "box":
      return <BoxRegular />;
    case "document":
      return <DocumentRegular />;
    case "bag":
      return <ShoppingBagRegular />;
    default:
      return null;
  }
}
