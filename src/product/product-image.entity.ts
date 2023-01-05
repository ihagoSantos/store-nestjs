export class ProductImageEntity {
  url: string;
  description: string;

  constructor(url: string, description: string) {
    this.url = url;
    this.description = description;
  }
}
