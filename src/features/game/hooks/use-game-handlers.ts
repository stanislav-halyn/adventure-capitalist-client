// Modules
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { updateUserInfo } from '../actions/user-info.actions';
import { updateBusiness, getBusinessList } from '../actions/business.actions';

// Typings
import { UpdateUserInfoServerResponseType } from '../typings/user-info.typings';
import {
  UpdateBusinessServerResponseType,
  GetBusinessListServerResponseType
} from '../typings/business.typings';

// Utils
import { subscribeTo, unsubscribe } from '../../../utils/socket.utils';

// Constants
import { GameActions } from '../constants/game-actions.constants';


export default () => {
  const dispatch = useDispatch();


  const updateUserInfoHandler = useCallback((response: UpdateUserInfoServerResponseType) => {
    dispatch(updateUserInfo(response.data));
  }, [dispatch]);


  const updateBusinessInfoHandler = useCallback((response: UpdateBusinessServerResponseType) => {
    dispatch(updateBusiness(response.data));
  }, [dispatch]);


  const getBusinessListHandler = useCallback((response: GetBusinessListServerResponseType) => {
    dispatch(getBusinessList(response.data));
  }, [dispatch]);


  useEffect(() => {
    subscribeTo(GameActions.UPDATE_USER_INFO, updateUserInfoHandler);
    subscribeTo(GameActions.UPDATE_BUSINESS_INFO, updateBusinessInfoHandler);
    subscribeTo(GameActions.GET_BUSINESS_LIST, getBusinessListHandler);


    return () => {
      unsubscribe(GameActions.UPDATE_USER_INFO, updateUserInfoHandler);
      unsubscribe(GameActions.UPDATE_BUSINESS_INFO, updateBusinessInfoHandler);
      unsubscribe(GameActions.GET_BUSINESS_LIST, getBusinessListHandler);
    };
  }, [dispatch]);
};
