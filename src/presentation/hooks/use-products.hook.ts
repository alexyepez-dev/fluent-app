import { ProductRepositoryImpl } from "./../../infrastructure/repositories/product.repository-impl";
import { useEffect, useState } from "react";
import type { Product } from "../../domain/entities/products.entity";
import { GetProducts } from "../../application/use-cases/get-products.use-case";
import { CreateProduct } from "../../application/use-cases/create-product.use-case";
import { UpdateProduct } from "../../application/use-cases/update-product.use-case";
import { DeleteProduct } from "../../application/use-cases/delete-product.use-case";

const repo = new ProductRepositoryImpl();

export const useProducts = () => {
  const [products, setProducts] = useState<Product[]>([]);

  const load = async () => {
    const data = await new GetProducts(repo).execute();
    setProducts(data);
  };

  const create = async (data: Product) => {
    await new CreateProduct(repo).execute(data);
    await load();
  };

  const update = async (data: Product) => {
    await new UpdateProduct(repo).execute(data);
    await load();
  };

  const remove = async (id: string) => {
    await new DeleteProduct(repo).execute(id);
    await load();
  };

  useEffect(() => {
    load();
  }, []);

  return {
    products,
    create,
    update,
    remove,
  };
};
