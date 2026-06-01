import {
  DataGrid,
  DataGridHeader,
  DataGridRow,
  DataGridHeaderCell,
  DataGridBody,
  DataGridCell,
} from "@fluentui/react-components";
import { columns } from "../../common/components/columns";
import type { Product } from "../../domain/entities/products.entity";

type Props = {
  products: Product[];
  onDelete: (id: string) => void;
  onEdit: (data: Product) => void;
};

export const ProductGrid = ({ products, onDelete, onEdit }: Props) => {
  return (
    <DataGrid
      items={products}
      columns={columns(onEdit, onDelete)}
      getRowId={(p) => p.id}
    >
      <DataGridHeader>
        <DataGridRow>
          {({ renderHeaderCell }) => (
            <DataGridHeaderCell>{renderHeaderCell()}</DataGridHeaderCell>
          )}
        </DataGridRow>
      </DataGridHeader>

      <DataGridBody<Product>>
        {({ item, rowId }) => (
          <DataGridRow key={rowId}>
            {({ renderCell }) => (
              <DataGridCell>{renderCell(item)}</DataGridCell>
            )}
          </DataGridRow>
        )}
      </DataGridBody>
    </DataGrid>
  );
};
