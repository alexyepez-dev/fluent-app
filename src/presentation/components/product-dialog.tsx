import { useEffect, useState } from "react";

import {
  Button,
  Dialog,
  DialogActions,
  DialogBody,
  DialogContent,
  DialogSurface,
  DialogTitle,
  Dropdown,
  Field,
  Input,
  Option,
} from "@fluentui/react-components";

import type { Product } from "../../domain/entities/products.entity";

type Props = {
  open: boolean;
  onOpenChange: (value: boolean) => void;
  onSave: (product: Product) => void;
  editing?: Product | null;
};

export const ProductDialog = ({
  open,
  onOpenChange,
  onSave,
  editing,
}: Props) => {
  const [name, setName] = useState("");
  const [sku, setSku] = useState("");
  const [price, setPrice] = useState("");
  const [stock, setStock] = useState("");

  const [category, setCategory] = useState<
    "electronics" | "office" | "software" | "food" | "other"
  >("electronics");

  const [status, setStatus] = useState<"active" | "inactive">("active");

  useEffect(() => {
    setName(editing?.name ?? "");
    setSku(editing?.sku ?? "");
    setPrice(editing?.price?.toString() ?? "");
    setStock(editing?.stock?.toString() ?? "");

    setCategory(editing?.category ?? "electronics");
    setStatus(editing?.status ?? "active");
  }, [editing]);

  const handleSave = () => {
    if (!name.trim()) return;
    if (!sku.trim()) return;

    const product: Product = {
      id: editing?.id ?? crypto.randomUUID(),

      name,
      sku,

      category,

      price: Number(price) || 0,

      currency: "USD",

      stock: Number(stock) || 0,

      status,

      iconKey:
        category === "electronics"
          ? "laptop"
          : category === "food"
            ? "food"
            : "box",

      lastUpdated: {
        label: "now",
        timestamp: Date.now(),
      },
    };

    console.log("Saving product:", product);

    onSave(product);
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={(_, data) => onOpenChange(data.open)}>
      <DialogSurface className="rounded-3xl">
        <DialogBody>
          <DialogTitle>
            {editing ? "Editar Producto" : "Crear Producto"}
          </DialogTitle>

          <DialogContent>
            <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2">
              <Field label="Producto" required>
                <Input
                  value={name}
                  onChange={(_, data) => setName(data.value)}
                  placeholder="MacBook Pro"
                />
              </Field>

              <Field label="SKU" required>
                <Input
                  value={sku}
                  onChange={(_, data) => setSku(data.value)}
                  placeholder="MBP-001"
                />
              </Field>

              <Field label="Precio">
                <Input
                  type="number"
                  value={price}
                  onChange={(_, data) => setPrice(data.value)}
                  placeholder="1999"
                />
              </Field>

              <Field label="Existencias">
                <Input
                  type="number"
                  value={stock}
                  onChange={(_, data) => setStock(data.value)}
                  placeholder="50"
                />
              </Field>

              <Field label="Categorias">
                <Dropdown
                  value={category}
                  selectedOptions={[category]}
                  onOptionSelect={(_, data) => {
                    if (data.optionValue) {
                      setCategory(
                        data.optionValue as
                          | "electronics"
                          | "office"
                          | "software"
                          | "food"
                          | "other",
                      );
                    }
                  }}
                >
                  <Option value="electronics">Electronics</Option>

                  <Option value="office">Office</Option>

                  <Option value="software">Software</Option>

                  <Option value="food">Food</Option>

                  <Option value="other">Other</Option>
                </Dropdown>
              </Field>

              <Field label="Estado">
                <Dropdown
                  value={status}
                  selectedOptions={[status]}
                  onOptionSelect={(_, data) => {
                    if (data.optionValue) {
                      setStatus(data.optionValue as "active" | "inactive");
                    }
                  }}
                >
                  <Option value="active">Active</Option>

                  <Option value="inactive">Inactive</Option>
                </Dropdown>
              </Field>
            </div>
          </DialogContent>

          <DialogActions>
            <Button appearance="secondary" onClick={() => onOpenChange(false)}>
              Cancel
            </Button>

            <Button appearance="primary" onClick={handleSave}>
              {editing ? "Editar" : "Crear"}
            </Button>
          </DialogActions>
        </DialogBody>
      </DialogSurface>
    </Dialog>
  );
};
