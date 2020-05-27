// Utils
import { emit } from '../../../utils/socket.utils';

// Constants
import { GameActions } from '../constants/game-actions.constants';

// Typings
import { BusinessIdType } from '../typings/business.typings';


type EmitBusinessChangePayloadType = {
  businessId: BusinessIdType
};


export const emitUpdateUserInfo = (): void => {
  emit(GameActions.GET_USER_INFO);
}


export const emitGetBusinessList = (): void => {
  emit(GameActions.GET_BUSINESS_LIST);
}


export const emitBuyBusiness = (payload: EmitBusinessChangePayloadType): void => {
  emit(GameActions.BUY_BUSINESS, payload);
}


export const emitUpgradeBusiness = (payload: EmitBusinessChangePayloadType): void => {
  emit(GameActions.UPGRADE_BUSINESS, payload);
}


export const emitGainCapital = (payload: EmitBusinessChangePayloadType): void => {
  emit(GameActions.GAIN_CAPITAL, payload);
}
