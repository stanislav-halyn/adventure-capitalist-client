// Typings
import {
  BusinessType,
  BusinessIdType,
  BusinessesByIdType
} from '../typings/business.typings';


type BusinessesMapType = {
  businessesById: BusinessesByIdType
  businessesIds: Array<BusinessIdType>
};


export const formatBusinessesListToMap = (
  businessesList: Array<BusinessType>
): BusinessesMapType => (
  businessesList
    .reduce((acc: BusinessesMapType, business: BusinessType) => ({
        businessesById: { ...acc.businessesById, [business.id]: business },
        businessesIds: [...acc.businessesIds, business.id]
      }),
      {
        businessesById: {},
        businessesIds: []
      }
    )
);
