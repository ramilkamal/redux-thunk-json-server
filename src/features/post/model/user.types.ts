export type User = {
  id: number;
  name: string;
  email: string;
  phone: string;
};

export type UserState = {
  user: User | null;
  status: 'idle' | 'loading' | 'success' | 'failed';
  error: string | null | undefined;
};
