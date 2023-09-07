import React from "react";

export default function Input({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOption = [],
  selectCurrency = "usd",
  amountDisable,
  currencyDisable,
}) {
  return (
    <div className="bg-white rounded-lg px-4 py-3 pb-6 flex z-0 justify-between items-center">
      <div className="flex flex-col gap-2">
        <label
          htmlFor={label}
          className="text-base text-gray-500 font-semibold font-Roboto"
        >
          {label}
        </label>
        <input
          className="text-lg text-gray-700 font-medium font-sans"
          type="number"
          id={label}
          name={label}
          placeholder="Amount"
          value={amount}
          onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
          disabled={amountDisable}
        />
      </div>
      <div className="flex flex-col gap-2">
        <label
          htmlFor="currency"
          className="text-base text-gray-500 font-semibold font-Roboto"
        >
          currency
        </label>
        <select
          name="currency"
          id="currency"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOption.map((el, idx) => (
            <option
              className="text-lg text-gray-700 font-medium font-sans"
              value={el}
              key={idx}
            >
              {el}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}
