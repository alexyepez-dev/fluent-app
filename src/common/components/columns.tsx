import {
  Button,
  createTableColumn,
  TableCellLayout,
} from "@fluentui/react-components";
import { EditRegular, DeleteRegular } from "@fluentui/react-icons";
import type { Product } from "../../domain/entities/products.entity";
import { mapProductIcon } from "../mappers/map-icon.mapper";

export const columns = (
  onEdit: (data: Product) => void,
  remove: (id: string) => void,
) => [
  createTableColumn<Product>({
    columnId: "name",
    compare: (a, b) => a.name.localeCompare(b.name),
    renderHeaderCell: () => "Producto",
    renderCell: (p) => (
      <TableCellLayout media={mapProductIcon(p.iconKey)}>
        {p.name}
      </TableCellLayout>
    ),
  }),

  createTableColumn<Product>({
    columnId: "sku",
    compare: (a, b) => a.sku.localeCompare(b.sku),
    renderHeaderCell: () => "SKU",
    renderCell: (p) => p.sku,
  }),

  createTableColumn<Product>({
    columnId: "price",
    compare: (a, b) => a.price - b.price,
    renderHeaderCell: () => "Precio",
    renderCell: (p) => (
      <span className="font-semibold text-emerald-600">
        {p.currency} {p.price}
      </span>
    ),
  }),

  createTableColumn<Product>({
    columnId: "stock",
    compare: (a, b) => a.stock - b.stock,
    renderHeaderCell: () => "Existencias",
    renderCell: (p) => (
      <span
        className={`rounded-full px-3 py-1 text-xs font-semibold ${
          p.stock > 10
            ? "bg-green-100 text-green-700"
            : "bg-red-100 text-red-700"
        }`}
      >
        {p.stock}
      </span>
    ),
  }),

  createTableColumn<Product>({
    columnId: "actions",
    renderHeaderCell: () => "Acciones",
    renderCell: (p) => (
      <div style={{ display: "flex", gap: 8 }}>
        <Button icon={<EditRegular />} onClick={() => onEdit(p)} />
        <Button icon={<DeleteRegular />} onClick={() => remove(p.id)} />
      </div>
    ),
  }),
];
