export interface Shop {
  products: {
    product: {
      description: string;
      inStock: string;
      unitPriceWithoutTax: number;
      taxPercent: number;
    }[];
  };
}
