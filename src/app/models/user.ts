export interface Roles {
    normal?: boolean;
    admin?: boolean;
  }

export interface UserInterface {
    id?: string;
    name?: string;
    email?: string;
    password?: string;
    roles: Roles;
  }