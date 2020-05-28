// Modules
import React, { useEffect } from 'react';
import { connect, ConnectedProps } from 'react-redux';

// Components
import UserInfoBlock from '../../components/user-info-block';
import BusinessList from '../../components/business-list';

// Selectors
import {
  selectBusinessIds,
  selectBusinessById
} from '../../selectors/business.selectors';
import { selectUserInfoCapital } from '../../selectors/user-info.selectors';

// Hooks
import useGameHandlers from '../../hooks/use-game-handlers';

// Utils
import { emitUpdateUserInfo, emitGetBusinessList } from '../../utils/game-socket-emitter.utils';

// Typings
import { RootReducerStateType } from 'typings/store';


type GameContainerProps = PropsFromRedux;


const GameContainer = ({
  businessIds,
  businessById,
  userCapital
}: GameContainerProps) => {
  // Connect game sockets handlers
  useGameHandlers();


  useEffect(() => {
    emitUpdateUserInfo();
    emitGetBusinessList();
  }, []);


  return (
    <div>
      <UserInfoBlock userCapital={userCapital} />

      <BusinessList
        businessIds={businessIds}
        businessById={businessById}
        userCapital={userCapital} />
    </div>
  );
};


const mapStateToProps = (state: RootReducerStateType) => ({
  businessIds: selectBusinessIds(state),
  businessById: selectBusinessById(state),
  userCapital: selectUserInfoCapital(state)
});

const connector = connect(mapStateToProps);

type PropsFromRedux = ConnectedProps<typeof connector>;

export default connector(GameContainer);
