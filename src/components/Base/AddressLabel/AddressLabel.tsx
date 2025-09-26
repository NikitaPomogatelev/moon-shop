import styles from "./AddressLabel.module.css";

interface AddressLabelProps {
  address: string;
}

export const AddressLabel = ({ address }: AddressLabelProps) => {
  return (
    <div className={styles["shop-item__address-group"]}>
      <span className={styles["shop-item__address-icon"]}>
        <img src="/locate.svg" width={20} height={20} alt="Иконка локации" />
      </span>
      <address>{address}</address>
    </div>
  );
};
