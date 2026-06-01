export type Product = {
  id: string;

  name: string;
  sku: string;

  category: "electronics" | "office" | "software" | "food" | "other";

  price: number;

  currency: "USD";

  stock: number;

  status: "active" | "inactive";

  iconKey: string;

  lastUpdated: {
    label: string;
    timestamp: number;
  };
};
