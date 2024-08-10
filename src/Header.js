import { useTranslation } from 'react-i18next';

function Header() {
  const { i18n } = useTranslation();
  const changelanguage = () => {
    if (localStorage.getItem("i18nextLng") === "ru"){
      i18n.changeLanguage("en");
    } else {
      i18n.changeLanguage("ru");
    }
  }

  return (
    <header>
      <a href="/tankioarchive">TO#A</a>
      <button aria-label='Change language' className="setlanguage" onClick={changelanguage}>QЯ</button>
    </header>
  );
}

export default Header;
