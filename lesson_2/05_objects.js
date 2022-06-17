// New object with unpaid property
let invoices = {
  unpaid: [],
};

// New add method
invoices.add = function (name, amount) {
  this.unpaid.push({ name, amount });
}

// New totalDue method
invoices.totalDue = function () {
  return this.unpaid.reduce((acc, obj) => acc + obj.amount, 0);
}

// Test methods
invoices.add('Due North Development', 250);
invoices.add('Moonbeam Interactive', 187.50);
invoices.add('Slough Digital', 300);
console.log(invoices.totalDue());

// New paid property
invoices.paid = [];
invoices.payInvoice = function (name) {
  let unpaid = [];
  for (let i = 0; i < this.unpaid.length; i += 1) {
    let invoice = this.unpaid[i];
    if (invoice.name === name) {
      this.paid.push(invoice);
    } else {
      unpaid.push(invoice);
    }
  }

  this.unpaid = unpaid;
}

// New totalPaid method
invoices.totalPaid = function () {
  return this.paid.reduce((acc, obj) => acc + obj.amount, 0);
}

// Test new methods
invoices.payInvoice("Due North Development");
invoices.payInvoice("Slough Digital");

console.log(invoices.totalPaid());
console.log(invoices.totalDue());