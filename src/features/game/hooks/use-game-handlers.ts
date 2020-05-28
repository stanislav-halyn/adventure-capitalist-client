// Modules
import { useEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';

// Actions
import { getUserInfo } from '../actions/user-info.actions';
import { getBusinessInfo, getBusinessList } from '../actions/business.actions';

// Typings
import { GetUserInfoServerResponseType } from '../typings/user-info.typings';
import {
  GetBusinessServerResponseType,
  GetBusinessListServerResponseType,
  GameErrorServerResponseType
} from '../typings/business.typings';

// Utils
import { subscribeTo, unsubscribe } from '../../../utils/socket.utils';

// Constants
import { GameActions } from '../constants/game-actions.constants';


export default () => {
  const dispatch = useDispatch();


  const getUserInfoHandler = useCallback((response: GetUserInfoServerResponseType) => {
    dispatch(getUserInfo(response.data));
  }, [dispatch]);


  const getBusinessInfoHandler = useCallback((response: GetBusinessServerResponseType) => {
    dispatch(getBusinessInfo(response.data));
  }, [dispatch]);


  const getBusinessListHandler = useCallback((response: GetBusinessListServerResponseType) => {
    dispatch(getBusinessList(response.data));
  }, [dispatch]);


  const gameErrorHandler = useCallback((response: GameErrorServerResponseType) => {
    alert(response.data.error);
  }, []);


  useEffect(() => {
    subscribeTo(GameActions.GET_USER_INFO, getUserInfoHandler);
    subscribeTo(GameActions.GET_BUSINESS_INFO, getBusinessInfoHandler);
    subscribeTo(GameActions.GET_BUSINESS_LIST, getBusinessListHandler);
    subscribeTo(GameActions.ERROR, gameErrorHandler);


    return () => {
      unsubscribe(GameActions.GET_USER_INFO, getUserInfoHandler);
      unsubscribe(GameActions.GET_BUSINESS_INFO, getBusinessInfoHandler);
      unsubscribe(GameActions.GET_BUSINESS_LIST, getBusinessListHandler);
      unsubscribe(GameActions.ERROR, gameErrorHandler);
    };
  }, [dispatch]);
};
