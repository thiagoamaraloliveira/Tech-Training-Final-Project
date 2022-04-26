export interface ICategory {
  id: number;
  name: string;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

export interface ICategoryOptions {
  id: number;
  name: string;
}
