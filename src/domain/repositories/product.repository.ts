import type { Product } from "../entities/products.entity";

export interface ProductRepository {
  getAll(): Promise<Product[]>;
  create(item: Product): Promise<void>;
  update(item: Product): Promise<void>;
  delete(id: string): Promise<void>;
}
