export class Category implements ICategory {

  public name: String;

  constructor(name:String) {
    this.name = name;
  }
}

export interface ICategory {
  name :String;

}
export class Subcategory implements Isub {
  public name: string;
  public code: string;
  public image: string;
  constructor( name:string,code:string,image:string) {

    this.name = name;
    this.code = code;
    this.image = image;
  }
}
export interface Isub {
  name :string;
  code:string;
  image:string

}
export class Product implements Ipro {
  public name: string;
  public desc: string;
  public price: number;
  public code: string;
  public image: string;
  public image1: string;
  public image2: string;
  constructor( name:string,desc:string,price:number,code:string,image:string,image1:string,image2:string) {

    this.name = name;
    this.desc = desc;
    this.price = price;
    this.code = code;
    this.image = image;
    this.image1 = image;
    this.image2 = image;
  }
}
export interface Ipro {
  name :string;
  desc: string;
  price: number;
  code:string;
  image:string;
  image1:string;
  image2:string;


}

