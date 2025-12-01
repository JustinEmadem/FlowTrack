export interface User {
  firstname: string;
  middlename?: string | null;
  lastname: string;
  email: string;
  address?: string | null;
  bio?: string | null;
  is_active: boolean;
  password: string;
  password_confirmation: string;
}
