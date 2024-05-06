import React, { ChangeEvent } from "react";
const styles = require("./Сheckbox.scss");

interface ICheckBox {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void
}

export default function Сheckbox({ checked, onChange }: ICheckBox) {
  return (
    <label className={styles.customCheckbox}>
    <input type="checkbox" checked={checked} onChange={onChange} />
      <span className={styles.checkmark}>
        {checked && (
          <svg
          className={styles.checkmarkIcon}
            width="8"
            height="8"
            viewBox="0 0 8 8"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M2.94899 5.41864L1.14963 3.58088L0 4.75505L2.00133 6.79941L3.17667 8L8 0.952633L6.66793 0L2.94899 5.41864Z"
              fill="white"
            />
          </svg>
        )}
      </span>
    </label>
  );
}
