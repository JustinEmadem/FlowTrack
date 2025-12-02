export interface User {
  firstname: string;
  middlename?: string | null;
  lastname: string;
  email: string;
  address?: string | null;
  bio?: string | null;
  role_id?: number; 
  roles?: Role[]; 
  role?: Role;   
  is_active: boolean;
  password: string;
  password_confirmation: string;
}

export interface UserData {
  id: number;
  firstname: string;
  middlename?: string | null;
  lastname: string;
  email: string;
  phone?: string | null;
  address?: string | null;
  bio?: string | null;
  role_id?: number; 
  roles?: Role[]; 
  role?: Role;   
  is_active: boolean;
  password?: string;
  password_confirmation?: string;
}


export interface Role {
  id: number;       
  name: string;      
  role_id?: number;  
  role_name?: string; 
}