export type TProduct = {
  name: string;
  image_url: string;
  logo_url: string;
  category: string;
  views: number;
  start_date: string;
  end_date: string;
  discount?: string | number;
  stars: string | number;
  old_price: string | number;
  disclaimer?: string;
  new_price?: string | number;
};
