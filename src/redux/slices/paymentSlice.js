const initialState = {
  payments: [],
  currentPayment: null,
  loading: false,
  error: null,
};

const paymentReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'PAYMENT_PROCESS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'PAYMENT_PROCESS_SUCCESS':
      return {
        ...state,
        loading: false,
        payments: [...state.payments, action.payload],
        currentPayment: action.payload,
      };
    case 'PAYMENT_PROCESS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'PAYMENTS_FETCH_SUCCESS':
      return { ...state, loading: false, payments: action.payload };
    default:
      return state;
  }
};

export default paymentReducer;
