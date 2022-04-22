export interface Device {
  id?: number;
  Name: string;
  Color: string;
  PartNumber: string | null;
  UserId: number | null;
  CategoryId: number | null;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}
