export class Product{
  id:number
  name:string
  description:string
  price:number
  imageUrl:string


  constructor(id:number,name:string,description='',price=0,imageUrl='https://i.pinimg.com/originals/08/05/a8/0805a8f92d5f8a31a15587859b965264.png'){
      this.id=id;
      this.name=name;
      this.description=description
      this.price=price

      this.imageUrl=imageUrl

    }
}
