import React, { useState } from "react";
import bg from "../assets/bg.jpeg";
import useCurrencyInfo from "../hooks/useCurrencyInfo";
import Input from "../components/input";

export default function CurrencyConvertor() {
  const [amount, setAmount] = useState(0);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedCurrency, setConvertedCurrency] = useState(0);

  const currencyInfo = useCurrencyInfo(from);
  const options = Object.keys(currencyInfo); 

  const swap = function () {
    setFrom(to);
    setTo(from);
    setAmount(convertedCurrency);
    setConvertedCurrency(amount);
  };

  const convert = function () { 
    setConvertedCurrency(amount * currencyInfo[to]);
  };
  return (
    <section
      className="flex justify-center items-center h-screen w-screen bg-cover bg-no-repeat bg-center"
      style={{
        backgroundImage: `url(${bg})`,
      }}
    >
      <div className="max-w-[500px] flex flex-col  w-[95%] bg-[#2616ff0e] backdrop-blur-sm border-2 border-gray-300  px-7 py-8 rounded-lg">
        <h1 className="mb-5 text-3xl text-white font-semibold font-Roboto text-center">
          Currency Convertor
        </h1>
        <Input
          label={"From"}
          amount={amount}
          onAmountChange={(currency) => setAmount(currency)}
          currencyOption={options}
          onCurrencyChange={(currency) => setFrom(currency)}
          selectCurrency={from}
        />
        <button className="px-4 py-1 -mt-3 -mb-3 text-base text-white font-semibold font-Roboto rounded-lg relative z-10 bg-blue-500 border-2 border-white w-fit self-center hover:-skew-x-12" onClick={swap}>
          swap
        </button>
        <Input
          label={"To"}
          amount={convertedCurrency}
          onAmountChange={(currency) => setConvertedCurrency(currency)}
          amountDisable={true}
          currencyOption={options}
          onCurrencyChange={(currency) => setTo(currency)}
          selectCurrency={to}
        />
        {/* calculate btn */}
        <button
          className="w-full p-3 rounded-md bg-blue-100 text-blue-600 hover:opacity-70 font-bold text-base font-Roboto mt-5"
          onClick={convert}
        >
          Calculate
        </button>
      </div>
    </section>
  );
}
