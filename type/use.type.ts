export type UserRole = "ADMIN" | "USER" | "TECHNICIAN";

export interface UserCount {
  complaints: number;
  payments: number;
  reviews: number;
}

export interface User {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  avatar: string | null;
  role: "USER" | "TECHNICIAN" | "ADMIN";
  status: "ACTIVE" | "INACTIVE" | "BLOCKED";
  emailVerified: boolean;
  createdAt: string;
  updatedAt: string;
  _count: UserCount;
}

export interface ApiResponse {
  success: boolean;
  message: string;
  data: User[];
}