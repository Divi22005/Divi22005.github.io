 const customers = [
      { card: "1234567890", pin: "1234", name: "John", balance: 1000 },
      { card: "1234567891", pin: "2345", name: "Cathy", balance: 1500 },
    ];

    let currentCustomer = null;

    const login = () => {
      const card = document.getElementById("card").value;
      const pin = document.getElementById("pin").value;
      const msg = document.getElementById("msg");
      const box = document.getElementById("login-box");

      const customer = customers.find(c => c.cart === card && c.pin === pin);

      if (customer) {
        currentCustomer = customer;
        box.innerHTML = `
          <h2>Welcome, ${customer.name}!</h2>
          <div id="action-box">
            <p>Balance: $<span id="balance">${customer.balance}</span></p>
            <select id="action" onchange="toggleRecipientField()">
              <option value="deposit">Deposit</option>
              <option value="withdraw">Withdraw</option>
              <option value="transfer">Fund Transfer</option>
            </select>
            <div id="recipient-box" style="display: none;">
          <input type="text" id="recipient" placeholder="Recipient Card Number" />
        </div>
            <input type="number" id="amount" placeholder="Enter amount" />
            <button onclick="handleTransaction()">Submit</button>
            <button onclick="logout()">Logout</button>
            <div id="msg"></div>
          </div>
        `;
      } else {
        msg.textContent = "Invalid card number or PIN!";
      }
    };

    const handleTransaction = () => {
      const action = document.getElementById("action").value;
      const amount = parseFloat(document.getElementById("amount").value);
      const msg = document.getElementById("msg");

      if (action === "transfer") {
  const recipientCard = document.getElementById("recipient").value;
  const recipient = customers.find(c => c.cart === recipientCard);

  if (!recipient) {
    msg.textContent = "Recipient not found!";
    return;
  }

  if (recipient.cart === currentCustomer.cart) {
    msg.textContent = "Cannot transfer to your own account!";
    return;
  }

  if (amount > currentCustomer.balance) {
    msg.textContent = "Insufficient balance for transfer!";
    return;
  }

  currentCustomer.balance -= amount;
  recipient.balance += amount;
  msg.textContent = `Transfer successful! $${amount} sent to ${recipient.name}`;
}

      if (isNaN(amount) || amount <= 0) {
        msg.textContent = "Please enter a valid amount!";
        return;
      }

      if (action === "deposit") {
        currentCustomer.balance += amount;
        msg.textContent = `Deposit successful! New balance: $${currentCustomer.balance}`;
      } else if (action === "withdraw") {
        if (amount > currentCustomer.balance) {
          msg.textContent = "Insufficient balance!";
          return;
        }
        currentCustomer.balance -= amount;
        msg.textContent = `Withdrawal successful! New balance: $${currentCustomer.balance}`;
      }

      document.getElementById("balance").textContent = currentCustomer.balance;
    };

    const logout = () => {
      const box = document.getElementById("login-box");
      box.innerHTML = `
        <h2>Login</h2>
        <input type="text" id="card" placeholder="Card Number" />
        <input type="password" id="pin" placeholder="PIN" />
        <button onclick="login()">Login</button>
        <div id="msg"></div>
      `;
      currentCustomer = null;
    };

    const toggleRecipientField = () => {
  const action = document.getElementById("action").value;
  const recipientBox = document.getElementById("recipient-box");
  recipientBox.style.display = action === "transfer" ? "block" : "none";
};