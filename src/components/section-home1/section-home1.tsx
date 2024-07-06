import styles from './section-home1.module.scss';
import IMGSeta from '../../assets/seta.png';
import IMGMulher from '../../assets/mulher.svg';
const SectionHome = () => {
  return (
    <section className={styles.section}>
      <div className={styles.containerSection}>
        <div className={styles.ladoEsquerdo}>
          <div className={styles.texto}>
            <h1>Aprenda cada vez mais e Renda na sua vida.</h1>
          </div>
          <div className={styles.imgSeta}>
            <img src={IMGSeta} alt="Seta" />
          </div>
        </div>
        <div className={styles.ladoDireito}>
          <img src={IMGMulher} alt="Mulher IMG" />
        </div>
      </div>
    </section>
  );
};

export default SectionHome;
