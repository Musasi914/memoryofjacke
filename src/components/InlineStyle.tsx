import styles from "./inlineStyle.module.css";

export default function InlineStyle() {
  return (
    <div className={styles.div}>
      <p>inline style</p>
      <button>Fight</button>
    </div>
  );
}
