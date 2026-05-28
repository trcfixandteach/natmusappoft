const initialState = {
  availableLoans: [],
  myLoans: [],
  selectedLoan: null,
  loanApplication: {
    amount: 0,
    term: 'monthly',
    interest: 0,
    totalRepayment: 0,
    promoCode: null,
    discount: 0,
  },
  loading: false,
  error: null,
};

const loanReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOANS_FETCH_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOANS_FETCH_SUCCESS':
      return { ...state, loading: false, availableLoans: action.payload };
    case 'LOANS_FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'MY_LOANS_FETCH_SUCCESS':
      return { ...state, loading: false, myLoans: action.payload };
    case 'LOAN_SELECT':
      return { ...state, selectedLoan: action.payload };
    case 'LOAN_APPLICATION_UPDATE':
      return {
        ...state,
        loanApplication: {
          ...state.loanApplication,
          ...action.payload,
        },
      };
    case 'LOAN_APPLICATION_SUBMIT_REQUEST':
      return { ...state, loading: true, error: null };
    case 'LOAN_APPLICATION_SUBMIT_SUCCESS':
      return { ...state, loading: false, error: null };
    case 'LOAN_APPLICATION_SUBMIT_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default loanReducer;
