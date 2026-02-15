export interface LoginRequestDTO {
  email: string;
  password: string;

}

export interface RegisterRequestDTO {
  businessname: string;
  username: string;
  email: string;
  password: string;
}

export interface User {
  id: string;
  businessname: string;
  businessid: string;
  username: string;
  email: string;
}


export interface AuthResponseDTO {
  token: string;
  user: User;

}
