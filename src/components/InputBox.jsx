import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
  const amountInputID = useId();
  return (
    <div className={`bg-white p-3 rounded-lg text-sm flex `}>
      <div className="w-1/2">
        <label
          htmlFor={amountInputID}
          className="text-black/40 mb-2 inline-block font-semibold"
        >
          {label}
        </label>
        <input
          id={amountInputID}
          pattern="[0-9]*"
          className="outline-none w-full bg-traparent py-1.5 pl-3 font-semibold"
          type="number"
          placeholder="Amount"
          disabled={amountDisable}
          value={amount}
          onChange={(evt) =>
            onAmountChange && onAmountChange(Number(evt.target.value))
          }
        />
      </div>
      <div className="w-1/2 flex flex-wrap justify-end text-right">
        <p className="text-black/40 mb-2 w-full font-semibold">Currency Type</p>
        <select
          className="rounded-lg px-1 py-1 cursor-pointer outline-none bg-[#F39237] font-medium font-sans"
          value={selectCurrency}
          onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
          disabled={currencyDisable}
        >
          {currencyOptions.map((currency) => (
            <option className="font-sans" key={currency} value={currency}>
              {currency.toUpperCase()}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

export default InputBox;
