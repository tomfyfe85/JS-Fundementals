const bankAccount = {
    // simple value attributes
    accountNumber: 376782676,
    accountSortCode: 999999,
  
    // we can attach functions too (so they act like 'methods'):
    getBalance: () => {
      return 100;
    }
  };
   bankAccount.getBalance();
  100