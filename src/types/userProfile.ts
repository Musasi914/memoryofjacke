export type UserProfileProps = {
  id: number;
  name: string;
  username?: string;
  email: string;
  address: string;
  phone?: string;
  website?: string;
  company?: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
};
