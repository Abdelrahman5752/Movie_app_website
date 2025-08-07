export interface Movie {
  id?: number;
  title: string;
  release_date: string;
  genre: string;
  price: number;
  description?: string;
  created_at?: string;
  updated_at?: string;
}

export interface MovieFormData {
  title: string;
  release_date: string;
  genre: string;
  price: string;
  description: string;
}