export interface Device {
  id?: number;
  name: string;
  color: string;
  partNumber: string | null;
  userId: number | null;
  categoryId: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
