import type { Product } from "../../domain/entities/products.entity";

type Props = {
  products: Product[];
};

export const ProductStats = ({ products }: Props) => {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 md:grid-cols-3">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Productos</p>

        <h2 className="mt-2 text-3xl font-bold text-slate-900">
          {products.length}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Productos Activos</p>

        <h2 className="mt-2 text-3xl font-bold text-emerald-600">
          {products.filter((p) => p.status === "active").length}
        </h2>
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
        <p className="text-sm text-slate-500">Pocas existencias</p>

        <h2 className="mt-2 text-3xl font-bold text-red-500">
          {products.filter((p) => p.stock <= 10).length}
        </h2>
      </div>
    </div>
  );
};
