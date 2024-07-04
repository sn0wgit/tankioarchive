import { useTranslation } from 'react-i18next';
import { Outlet, Link } from "react-router-dom";
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
        <Link to="./garage-items/">
          <div className="card">
            <div className="card-img card-img__tnk"></div>
            <span>{t("intro.card1")}</span>
          </div>
        </Link>
        <Link to="./tar-libraries/">
          <div className="card">
            <div className="card-img card-img__tar"></div>
            <span>{t("intro.card2")}</span>
          </div>
        </Link>
        <Link to="./media/">
        <div className="card">
          <div className="card-img card-img__media"></div>
          <span>{t("intro.card3")}</span>
        </div>
        </Link>
        <Link to="./old-websites/">
        <div className="card">
          <div className="card-img card-img__www"></div>
          <span>{t("intro.card4")}</span>
        </div>
        </Link>
      </div>
      <Outlet />
    </section>
  );
}

export default Intro;
