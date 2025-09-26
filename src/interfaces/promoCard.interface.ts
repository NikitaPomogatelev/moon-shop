export interface PromoCard {
  id: number;
  discount: string;
  expireDate: string;
  views: number;
  title: string;
  company: {
    name: string;
    address: string;
    logo: string;
  };
  image: string;
}
