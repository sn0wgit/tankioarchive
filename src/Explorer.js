import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import './explorer.css';

function Explorer() {
  const { t } = useTranslation();
  const location = useLocation();
  const { pathname } = location;

  function getFolderData(){
    console.log(pathname);
    return location.pathname;
  }

  return (
    <section className="explorer">
        <div className="window">
            <table className="files">
                <thead>
                    <tr>
                        <th>{t("explorer.name")}</th>
                        <th>{t("explorer.type")}</th>
                        <th>{t("explorer.actions")}</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{getFolderData()}</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </section>
  );
}

export default Explorer