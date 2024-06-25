// types 

export interface Product {
    id: number;
    name: string;
    price: string;
    href: string;
    rating: number;
    reviewCount: number;
    imageSrc: string;
    imageAlt: string;
    animation: string;
    colors: Color[];
    sizes: Size[];
  }
  

  export interface Color {
    name: string;
    bgColor: string;
    selectedColor: string;
  }
  
  
  export interface Size {
    name: string;
    inStock: boolean;
  }
  