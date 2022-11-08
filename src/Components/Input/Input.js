import React from "react";
function Input({
  placeholder,
  option,
  type,
  name,
  handleForm,
  className,
  inputValue,
}) {
  return (
    <>
      {option ? (
        <div
          className={`${className} border d-flex flex-row justify-content-between rounded-5px bg-transparent`}
          style={{ border: "1px solid rgb(133, 133, 133)" }}
        >
          <input
            className={`noBorder`}
            style={{ padding: "8px" }}
            required
            type={type}
            name={name}
            value={inputValue}
            onChange={handleForm}
            placeholder={placeholder}
          />
          <button className="showBtn p-1">show</button>
        </div>
      ) : (
        <input
          className={`${className} rounded-5px bg-transparent`}
          value={inputValue}
          type={type}
          name={name}
          onChange={handleForm}
          placeholder={placeholder}
          style={{ padding: "8px", border: "1px solid rgb(133, 133, 133)" }}
        />
      )}
    </>
  );
}

export default Input;
