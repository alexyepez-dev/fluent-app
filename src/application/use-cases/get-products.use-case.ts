import type { ProductRepository } from "../../domain/repositories/product.repository";

export class GetProducts {
  constructor(private readonly repo: ProductRepository) {}

  execute() {
    return this.repo.getAll();
  }
}
