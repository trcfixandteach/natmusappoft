const initialState = {
  profile: {
    id: null,
    fullName: '',
    email: '',
    phone: '',
    dateOfBirth: '',
    address: '',
    idNumber: '',
    idType: 'NRC',
    employmentStatus: '',
    monthlyIncome: 0,
  },
  statements: [],
  transactions: [],
  loading: false,
  error: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'USER_PROFILE_FETCH_REQUEST':
      return { ...state, loading: true, error: null };
    case 'USER_PROFILE_FETCH_SUCCESS':
      return { ...state, loading: false, profile: action.payload };
    case 'USER_PROFILE_FETCH_FAILURE':
      return { ...state, loading: false, error: action.payload };
    case 'USER_PROFILE_UPDATE':
      return {
        ...state,
        profile: { ...state.profile, ...action.payload },
      };
    case 'STATEMENTS_FETCH_SUCCESS':
      return { ...state, loading: false, statements: action.payload };
    case 'TRANSACTIONS_FETCH_SUCCESS':
      return { ...state, loading: false, transactions: action.payload };
    default:
      return state;
  }
};

export default userReducer;
