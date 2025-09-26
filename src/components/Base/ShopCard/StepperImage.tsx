import styles from "./ShopCard.module.css";

interface StepperImage {
  imageBigUrl: string;
}

const StepperImage = ({ imageBigUrl }: StepperImage) => {
  return (
    <div className={styles["image-stepper__wrapp"]}>
      <img src={imageBigUrl} alt="Изображение степпера" />

      <div className={styles["image-stepper__slider"]}>
        <span className={styles["active"]}></span>
        <span></span>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default StepperImage;
