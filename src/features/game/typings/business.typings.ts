// Utils
import { ServerResponseType } from '../utils/typings.utils';


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

export type BusinessByIdType = {
  [key: number]: BusinessType
};


// Reducer types
export type BusinessStateType = {
  count: number
  businessById: BusinessByIdType,
  businessIds: Array<BusinessIdType>
};


// Action types
export type UpdateBusinessPayloadType = {
  business: BusinessType
};


export type GetBusinessListPayloadType = {
  businessesList: Array<BusinessType>
};

// Server response types
export type UpdateBusinessServerResponseType = ServerResponseType<UpdateBusinessPayloadType>;

export type GetBusinessListServerResponseType = ServerResponseType<GetBusinessListPayloadType>;

