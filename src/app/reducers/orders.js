import {
  FetchOrdenrsNewAttem,
  FetchOrdersNewSuccess,
  FetchOrderNewFail,
  FetchOrderDOneAttemp,
  FetchOrderDoneSuccess,
  FetchOrderDoneFail,
  FetchOrderInprogressAttemp,
  FetchOrderInprogressSuccess,
  FetchOrderInprogressFail,
  CreateNewOrderAttemp,
  CreateNewOrderSuccess,
  CreateNewOrderFail
} from "../actions/types";

const initialState = {
  newOrdersLoading: false,
  doneOrdersLoading: false,
  inProgressOrderLoading: false,
  createOrderLoading: false,
  newOrders: [],
  doneOrders: [],
  inProgressOrders: []
};

export default (state = initialState, action) => {
  switch (action.type) {
    case FetchOrdenrsNewAttem:
      return {
        ...state,
        newOrdersLoading: true,
        doneOrdersLoading: false,
        inProgressOrderLoading: false
      };

    case FetchOrdersNewSuccess:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        inProgressOrderLoading: false,
        createOrderLoading: false,
        newOrders: action.payload
      };

    case FetchOrderNewFail:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        inProgressOrderLoading: false,
        createOrderLoading: false
      };
    case FetchOrderDOneAttemp:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: true,
        inProgressOrderLoading: false,
        createOrderLoading: false
      };

    case FetchOrderDoneSuccess:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        inProgressOrderLoading: false,
        createOrderLoading: false,

        doneOrders: action.payload
      };

    case FetchOrderDoneFail:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        inProgressOrderLoading: false,
        createOrderLoading: false
      };
    case FetchOrderInprogressAttemp:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        inProgressOrderLoading: true,
        createOrderLoading: false
      };

    case FetchOrderInprogressSuccess:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        inProgressOrderLoading: false,
        createOrderLoading: false,

        inProgressOrders: action.payload
      };

    case FetchOrderInprogressFail:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        createOrderLoading: false,
        inProgressOrderLoading: false
      };
    case CreateNewOrderAttemp:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        createOrderLoading: true,
        inProgressOrderLoading: false
      };
    case CreateNewOrderSuccess:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        createOrderLoading: false,
        inProgressOrderLoading: false
      };
    case CreateNewOrderFail:
      return {
        ...state,
        newOrdersLoading: false,
        doneOrdersLoading: false,
        createOrderLoading: false,
        inProgressOrderLoading: false
      };

    default:
      return state;
  }
};
