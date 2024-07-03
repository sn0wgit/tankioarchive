import { useTranslation } from 'react-i18next';
function Intro() {
  const { t } = useTranslation();

  return (
    <section className="intro">
      <h1 className="logo">TANKI ONLINE<br/>ARCHIVE</h1>
      <h2 className="desc">
        {t("intro.desc")}
      </h2>
      <p><b>{t("intro.biggest")}</b>{t("intro.paragraph")}</p>
      <div className="cards">
        <div className="card">
          <div className="card-img card-img__tnk"></div>
          <span>{t("intro.card1")}</span>
        </div>
        <div className="card">
          <div className="card-img card-img__tar"></div>
          <span>{t("intro.card2")}</span>
        </div>
        <div className="card">
          <div className="card-img card-img__media"></div>
          <span>{t("intro.card3")}</span>
        </div>
        <div className="card">
          <div className="card-img card-img__www"></div>
          <span>{t("intro.card4")}</span>
        </div>
      </div>
    </section>
  );
}

export default Intro;
