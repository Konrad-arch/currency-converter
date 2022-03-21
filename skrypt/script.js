{
  const RatEUR = 4.57;
  const RatUSD = 4.08;

  const formElement = document.querySelector(".js-form");
  const amountElement = document.querySelector(".js-amount");
  const currencyElement = document.querySelector(".js-currency");
  const resultElement = document.querySelector(".js-result");

  formElement.addEventListener("submit", (event) => {
    event.preventDefault();

    const currency = currencyElement.value;
    const amount = parseFloat(amountElement.value);

    let result;

    switch (currency) {
      case "EUR":
        result = amount / RatEUR;
        break;

      case "USD":
        result = amount / RatUSD;
        break;
    }

    {
      resultElement.innerHTML = `Wynik: ${amount.toFixed(
        2
      )} PLN = <strong> ${result.toFixed(2)} ${currency} </strong>`;
    }
  });
}
