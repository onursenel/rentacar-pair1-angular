export interface UpdateModelRequest {
    brandId:    number;
    name:       string;
    modelYear:  number;
    imageUrl:   string;
    dailyPrice: number;
    brand: Brand;
  }


  
  interface Brand {
    id: number;
    name : string;
  }



  