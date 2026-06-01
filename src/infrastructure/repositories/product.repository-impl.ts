import type { Product } from "../../domain/entities/products.entity";
import type { ProductRepository } from "../../domain/repositories/product.repository";

let ProductData: Product[] = [
  {
    id: "1",
    name: "Laptop Dell XPS 13",
    sku: "DELL-XPS-13",
    category: "electronics",
    price: 1200,
    currency: "USD",
    stock: 10,
    status: "active",
    iconKey: "laptop",
    lastUpdated: {
      label: "Today",
      timestamp: Date.now(),
    },
  },
  {
    id: "2",
    name: "iPhone 15 Pro",
    sku: "APPLE-IPHONE-15-PRO",
    category: "electronics",
    price: 999,
    currency: "USD",
    stock: 25,
    status: "active",
    iconKey: "smartphone",
    lastUpdated: {
      label: "Today",
      timestamp: Date.now(),
    },
  },
  {
    id: "3",
    name: "Samsung Galaxy S24",
    sku: "SAMSUNG-S24",
    category: "electronics",
    price: 899,
    currency: "USD",
    stock: 18,
    status: "active",
    iconKey: "smartphone",
    lastUpdated: {
      label: "Today",
      timestamp: Date.now(),
    },
  },
  {
    id: "4",
    name: "MacBook Air M2",
    sku: "APPLE-MBA-M2",
    category: "electronics",
    price: 1100,
    currency: "USD",
    stock: 7,
    status: "active",
    iconKey: "laptop",
    lastUpdated: {
      label: "Today",
      timestamp: Date.now(),
    },
  },
  {
    id: "5",
    name: "Sony WH-1000XM5 Headphones",
    sku: "SONY-WH1000XM5",
    category: "electronics",
    price: 399,
    currency: "USD",
    stock: 30,
    status: "active",
    iconKey: "headphones",
    lastUpdated: {
      label: "Today",
      timestamp: Date.now(),
    },
  },
];

export class ProductRepositoryImpl implements ProductRepository {
  async getAll() {
    return [...ProductData];
  }

  async create(product: Product) {
    ProductData.push(product);
  }

  async update(product: Product) {
    ProductData = ProductData.map((p) => (p.id === product.id ? product : p));
  }

  async delete(id: string) {
    ProductData = ProductData.filter((p) => p.id !== id);
  }
}
