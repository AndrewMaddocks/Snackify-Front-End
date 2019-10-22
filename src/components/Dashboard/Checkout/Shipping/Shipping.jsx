import React from "react";
import styles from "./shipping.module.scss";

const Shipping = props => {
  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Shipping Details</h2>
      <form>
        <div className={styles.formContainer}>
          <label className={styles.label} htmlFor="attention">
            Attention
          </label>
          <input
            className={styles.textInput}
            type="text"
            name="attention"
            id="attention"
            placeholder="Appleseed Corp"
          />

          <label className={styles.label} htmlFor="attention">
            Address Line 1
          </label>
          <input
            className={styles.textInput}
            type="text"
            name="address1"
            id="address1"
            placeholder="Appleseed Corp"
          />

          <label className={styles.label} htmlFor="attention">
            Address Line 2
          </label>
          <input
            className={styles.textInput}
            type="text"
            name="address2"
            id="address2"
            placeholder="(555) 555-0123"
          />

          <label className={styles.label} htmlFor="city">
            City
          </label>
          <input
            className={styles.textInput}
            type="text"
            name="city"
            id="city"
            placeholder="City"
          />
          <label className={styles.label} htmlFor="state">
            State
          </label>
          <input
            className={styles.textInput}
            type="text"
            name="state"
            id="state"
            placeholder="State"
          />
        </div>
      </form>
    </div>
  );
};

export default Shipping;
