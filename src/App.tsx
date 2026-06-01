import { useState } from "react";
import { Button } from "@fluentui/react-components";
import type { Product } from "./domain/entities/products.entity";
import { useProducts } from "./presentation/hooks/use-products.hook";
import { ProductDialog } from "./presentation/components/product-dialog";
import { ProductGrid } from "./presentation/components/product-grid";
import { ProductStats } from "./presentation/components/product-stats";

export const App = () => {
  const { products, create, update, remove } = useProducts();

  const [open, setOpen] = useState(false);
  const [editing, setEditing] = useState<Product | null>(null);

  const handleSave = async (product: Product) => {
    if (editing) {
      await update(product);
    } else {
      await create(product);
    }

    setEditing(null);
    setOpen(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-slate-100 to-slate-200">
      <div className="mx-auto max-w-7xl p-6">
        {/* HEADER */}
        <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h1 className="text-4xl font-bold tracking-tight text-slate-900">
              Gestión de productos
            </h1>

            <p className="mt-2 text-slate-500">
              Gestiona tu inventario de forma eficiente y segura.
            </p>
          </div>

          <Button
            appearance="primary"
            size="large"
            onClick={() => {
              setEditing(null);
              setOpen(true);
            }}
          >
            Nuevo Producto
          </Button>
        </div>

        {/* STATS */}
        <ProductStats products={products} />

        {/* GRID */}
        <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-xl">
          <div className="mb-6">
            <h2 className="text-xl font-semibold text-slate-900">Productos</h2>

            <p className="text-sm text-slate-500">
              Lista de productos registrados.
            </p>
          </div>

          <ProductGrid
            products={products}
            onDelete={remove}
            onEdit={(product) => {
              setEditing(product);
              setOpen(true);
            }}
          />
        </div>

        {/* DIALOG */}
        <ProductDialog
          open={open}
          editing={editing}
          onOpenChange={(value) => {
            setOpen(value);

            if (!value) {
              setEditing(null);
            }
          }}
          onSave={handleSave}
        />
      </div>
    </div>
  );
};
