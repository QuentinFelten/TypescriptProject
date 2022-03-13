export interface Buy {
  product: {
    description: string;
    inStock: string;
    unitPriceWithoutTax: number;
    taxPercent: number;
    allergy: string;
  };
  quantity: number;
}
