interface DecodeJwtType {
  id: number;
  username: string;
  email: string;
  iat: number;
  isAdmin: boolean;
}

export default DecodeJwtType;
