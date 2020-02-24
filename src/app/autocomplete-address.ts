export interface AutocompleteAddress {
    id: number;
    longitude: string;
    latitude: string;
    place_name: string;
    Address: string;
    new_address: string;
    alternate_address: string;
    cropped_address: string; // custom property for showing address without place name or start of the address
    address_bn: any;
    city: string;
    area: string;
    postCode: number;
    pType: string;
    subType: string;
    flag: number;
    uCode: string;
    user_id: any;
    created_at: string;
    location: string;
    tags: any;
    thana: string;
    district: string;
    unions: any;
  }

//   {
//     "id": 321518,
//     "longitude": "90.40101010697687",
//     "latitude": "23.712576807847395",
//     "place_name": "House 1/2",
//     "Address": "House 1/2, Dc Ray Road",
//     "new_address": "House 1/2, Dc Ray Road, Babu Bazar, Dhaka",
//     "alternate_address": "House 1/2 Dc Ray Road Babu Bazar",
//     "address_bn": null,
//     "city": "Dhaka",
//     "area": "Babu Bazar",
//     "postCode": 1100,
//     "pType": "Residential",
//     "subType": "HOUSE",
//     "flag": 1,
//     "uCode": "ESJS4186",
//     "user_id": null,
//     "created_at": "2018-05-01 22:30:47",
//     "location": "23.712576807847395,90.40101010697687",
//     "tags": null,
//     "thana": "Bangshal",
//     "district": "Dhaka",
//     "unions": null
//   }