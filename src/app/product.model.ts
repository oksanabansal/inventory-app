export class Product {
  public imageUrl: string;

  constructor(
    public sku: string,
    public name: string,
    imageUrl: string,
    public department: string[],
    public price: number) {
    this.imageUrl = imageUrl;
  }
}
