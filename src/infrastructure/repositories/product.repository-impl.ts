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
