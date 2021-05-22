import React from "react";
import styles from "./LandingMessage.module.css";
const LandingMessage = () => (
  <React.Fragment>
    <div className={styles.landingMessage_bg}>
      <h1 className={styles.landingMessage_title}>
        Food, delivered with love!
      </h1>
      <p className={styles.landingMessage}>
        {" "}
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa mollitia
        consequuntur possimus officiis consectetur molestias unde repellat
        repudiandae expedita autem, aliquid animi, vel nisi iusto harum. Quaerat
        nostrum eligendi magni.
      </p>
    </div>
  </React.Fragment>
);

export default LandingMessage;
