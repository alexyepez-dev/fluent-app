import type { Product } from "../../domain/entities/products.entity";
import type { ProductRepository } from "../../domain/repositories/product.repository";

export class UpdateProduct {
  constructor(private readonly repo: ProductRepository) {}

  execute(product: Product) {
    return this.repo.update(product);
  }
}
