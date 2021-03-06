// Typings
import {
  BusinessType,
  BusinessIdType,
  BusinessByIdType
} from '../typings/business.typings';


type BusinessesMapType = {
  businessById: BusinessByIdType
  businessIds: Array<BusinessIdType>
};


export const formatBusinessListToMap = (
  businessList: Array<BusinessType>
): BusinessesMapType => (
  businessList
    .reduce((acc: BusinessesMapType, business: BusinessType) => ({
      businessById: { ...acc.businessById, [business.id]: business },
      businessIds: [...acc.businessIds, business.id]
    }),
    {
      businessById: {},
      businessIds: []
    })
);
