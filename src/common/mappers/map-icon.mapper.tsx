import {
  BoxRegular,
  LaptopRegular,
  DocumentRegular,
  FoodRegular,
} from "@fluentui/react-icons";

export function mapProductIcon(key: string) {
  switch (key) {
    case "box":
      return <BoxRegular />;
    case "laptop":
      return <LaptopRegular />;
    case "document":
      return <DocumentRegular />;
    case "food":
      return <FoodRegular />;
    default:
      return null;
  }
}
