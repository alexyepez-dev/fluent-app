import type { ProductRepository } from "../../domain/repositories/product.repository";

export class DeleteProduct {
  constructor(private readonly repo: ProductRepository) {}

  execute(id: string) {
    return this.repo.delete(id);
  }
}
