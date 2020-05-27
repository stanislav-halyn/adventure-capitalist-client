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
  businessList: Array<BusinessType>
};

export type GameErrorPayloadType = {
  error: string
};

// Server response types
export type GetBusinessServerResponseType = ServerResponseType<UpdateBusinessPayloadType>;

export type GetBusinessListServerResponseType = ServerResponseType<GetBusinessListPayloadType>;

export type GameErrorServerResponseType = ServerResponseType<GameErrorPayloadType>;

