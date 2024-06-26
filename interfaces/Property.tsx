import ILocation from './Location';
import IRates from './Rates';
import ISellerInfo from './SellerInfo';

export default interface IProperty {
  _id: string;
  owner: string;
  title: string;
  type: string;
  description: string;
  location: ILocation;
  beds: number;
  toilets: number;
  square_feet: number;
  amenities: string[];
  rates: IRates;
  seller_info: ISellerInfo;
  images: string[];
  is_featured: boolean;
  createdAt: string;
  updatedAt: string;
}
