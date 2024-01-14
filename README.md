# ExpensePal

The ExpensePal is a simple React application that allows users to track their income and expenses.

## Features

- **Transaction Management:**
  - Users can add new transactions, specifying a description and amount.
  - Transactions are categorized as income (positive amount) or expenses (negative amount).

- **Global State Management:**
  - Utilizes React context and the `useReducer` hook to manage global state.
  - Supports adding and deleting transactions, with state updates propagated to components via context.
