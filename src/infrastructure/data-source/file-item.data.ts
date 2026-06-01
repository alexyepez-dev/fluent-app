import type { FileItem } from "../../domain/entities/products.entity";

export const FileItemData: FileItem[] = [
  {
    id: "1",
    file: { label: "Meeting notes", iconKey: "document" },
    author: { label: "Max Mustermann", status: "available" },
    lastUpdated: { label: "7h ago", timestamp: 1 },
    lastUpdate: { label: "Edited", iconKey: "edit" },
  },
];
