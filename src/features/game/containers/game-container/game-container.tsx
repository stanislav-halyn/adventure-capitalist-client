// Modules
import React from 'react';
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

// Typings
import { RootReducerStateType } from '../../../../store';


type GameContainerProps = PropsFromRedux;


const GameContainer = ({
  businessIds,
  businessById,
  userCapital
}: GameContainerProps) => {
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
