import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useLoadNamespace } from './useLoadNamespace';
import { useImportFileEntries } from './useImportFileEntries';

function Files(){
    const { t } = useTranslation();
    const location = useLocation();
    const { pathname } = location;
    const namespace = pathname.endsWith("/") ? pathname.replace("tankioarchive/", "").substring(1).slice(0, -1) : pathname.replace("tankioarchive/", "").substring(1)
    console.log(namespace)
    const arrangement = pathname.replace("tankioarchive/", "tankioarchive/archive/")+"/arrangement.json"
    console.log(useLoadNamespace(namespace));
    useImportFileEntries(arrangement, namespace)
    return (
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
                </tbody>
            </table>
        </div>
    );
}

export default Files