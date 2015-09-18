var Calculator = (function () {
      var amount = 0;
      return {
            plus: function (number) {
                  amount += number;
                  console.log(amount);
                  return this;
            },
            minus: function (number) {
                  amount -= number;
                  console.log(amount);
                  return this;
            },
            multiply: function (number) {
                  amount *= number;
                  console.log(amount);
                  return this;
            },
            divide: function (number) {
                  amount /= number;
                  console.log(amount);
                  return this;
            },
            value: function () {
                  var total = amount;
                  return total;
            }
      }
} ());


