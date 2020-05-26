// General business types
export type BusinessIdType = number;

export type BusinessType = {
  id: BusinessIdType
  title: string
  profit: number
  level: number
  price: number
  gainCapitalDurationMs: number
  isGainingCapital: boolean
  startGainCapitalTimestamp: number | null
  isBought: boolean
};

export type BusinessesByIdType = {
  [key: number]: BusinessType
};


// Reducer types
export type BusinessStateType = {
  count: number
  businessesById: BusinessesByIdType,
  businessesIds: Array<BusinessIdType>
};


// Action types
export type UpdateBusinessPayloadType = {
  business: BusinessType
};


export type GetListOfBusinessesActionType = {
  businessesList: Array<BusinessType>
};

