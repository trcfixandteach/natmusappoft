# NATMUS Loan Mobile App

## Overview
NATMUS is a comprehensive mobile loan application for Zambia, providing fast, reliable, and secure loan services.

## Features

### Authentication
- User registration and login
- OTP verification
- Secure authentication flow

### Loan Management
- Browse available loan products
- Apply for loans with flexible terms
- View active and completed loans
- Track repayment progress
- Payment history tracking

### Payments
- Multiple payment methods (Mobile Money, Bank Transfer)
- Real-time payment processing
- Payment receipts and records

### User Profiles
- Detailed user information
- Transaction history and statements
- Account settings and preferences
- Security settings (2FA, Biometric login)

### Additional Features
- Promo codes and discounts
- Monthly statements
- Transaction history
- Push notifications
- Customer support

## Project Structure

```
natmus-loan-app/
├── src/
│   ├── screens/
│   │   ├── auth/
│   │   │   ├── LoginScreen.js
│   │   │   ├── RegisterScreen.js
│   │   │   └── OTPScreen.js
│   │   ├── dashboard/
│   │   │   └── DashboardScreen.js
│   │   ├── loans/
│   │   │   ├── LoanSelectionScreen.js
│   │   │   ├── LoanDetailsScreen.js
│   │   │   ├── LoanApplicationScreen.js
│   │   │   ├── MyLoansScreen.js
│   │   │   └── LoanStatusScreen.js
│   │   ├── statements/
│   │   │   ├── StatementsScreen.js
│   │   │   └── TransactionHistoryScreen.js
│   │   ├── payment/
│   │   │   └── PaymentScreen.js
│   │   ├── profile/
│   │   │   ├── ProfileScreen.js
│   │   │   └── SettingsScreen.js
│   │   ├── promo/
│   │   │   └── PromoCodeScreen.js
│   │   └── SplashScreen.js
│   └── redux/
│       ├── slices/
│       │   ├── loanSlice.js
│       │   ├── userSlice.js
│       │   └── paymentSlice.js
│       └── store.js
├── App.js
├── index.js
├── index.html
└── package.json
```

## Installation

1. Clone the repository:
```bash
git clone https://github.com/Trcfixandteach/Natmusappoft.git
```

2. Install dependencies:
```bash
npm install
```

3. Run the application:
```bash
# For iOS
npm run ios

# For Android
npm run android

# For Web
npm run web
```

## Technologies Used

- React Native
- React Navigation
- Redux & Redux Thunk
- React Native Vector Icons
- Expo

## Color Scheme

- Primary Green: #2E7D32
- Dark Green: #1B5E20
- Light Green: #E8F5E9
- Accent Orange: #FF9800
- Error Red: #FF6B6B
- Success: #4CAF50

## API Integration Points

The app is ready to integrate with the following API endpoints:

- User Authentication
- Loan Products
- Loan Applications
- Payment Processing
- User Profiles
- Transaction History
- Statements

## Security Features

- Secure authentication
- OTP verification
- Two-factor authentication support
- Biometric login support
- Encrypted transactions
- Secure storage for sensitive data

## Future Enhancements

- Live chat support
- Video KYC verification
- Advanced analytics dashboard
- Loan calculator tools
- Referral program
- Loan top-up features
- Integration with payment gateways

## Contributing

Contributions are welcome! Please create a new branch for your feature and submit a pull request.

## License

This project is proprietary to NATMUS Financial Services.

## Support

For support, contact: support@natmus.zm

## Version History

### v1.0.0 (2026-05-29)
- Initial release
- Core loan application features
- User authentication
- Payment processing
- Transaction history
