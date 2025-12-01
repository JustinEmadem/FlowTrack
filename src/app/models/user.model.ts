export interface User {
  firstname: string;
  middlename?: string | null;
  lastname: string;
  email: string;
  address?: string | null;
  bio?: string | null;
  role_id?: number; 
  role?: Role;
  is_active: boolean;
  password: string;
  password_confirmation: string;
}

export interface Role {
  role_id: number;
  role_name: string;
}