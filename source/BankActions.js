import AppDispatcher from './AppDispatcher';
import bankConstants from './constants';

let BankActions = {
  createAccount(){
    AppDispatcher.dispatch({
      type:bankConstants.CREATED_ACCOUNT,
      amount:0
    });
  },

  depositIntoAccount(amount){
    AppDispatcher.dispatch({
      type:bankConstants.DEPOSITED_INTO_ACCOUNT,
      amount:amount
    });
  },

  withdrawFromAccount(amount){
    AppDispatcher.dispatch({
      type:bankConstants.WITHDRAW_FROM_ACCOUNT,
      amount:amount
    });
  }
};

export default BankActions;
