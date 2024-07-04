import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import './explorer.css';

function Explorer() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { pathname } = location;
    i18n.loadNamespaces(pathname.replace("tankioarchive/", "").substring(1));
    const arrangement = pathname.replace("tankioarchive/", "tankioarchive/archive/")+"/arrangement.json"
    fetch(arrangement).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        console.log("forEach", data)
        data.content.forEach((itemunit) => {
            let newrow = document.createElement("tr");
            let rowname = document.createElement("td");
            let rowtype = document.createElement("td");
            let rowactions = document.createElement("td");
            rowname.innerText = t(itemunit.name, {ns: pathname.replace("tankioarchive/", "").substring(1)});
            rowtype.innerText = t(itemunit.type);
            if (itemunit.preview !== false) {
                rowactions.innerHTML = `<a href=${itemunit.preview} class="preview"></a>`;
            }
            rowactions.innerHTML += `<a href=${itemunit.url} class="new_tab" target="_blank" rel="noreferrer"></a>`;
            if (itemunit.type === 'explorer.folder') {
                rowactions.innerHTML += `<a href=${itemunit.url} class="folder"></a>`;
            }
            else {
                rowactions.innerHTML += `<a href=${itemunit.url} class="download" download="true"></a>`;
            }
            newrow.appendChild(rowname);
            newrow.appendChild(rowtype);
            newrow.appendChild(rowactions);
            document.querySelector("tbody").appendChild(newrow);
        })
    }).catch(err => {
        console.log("Error Reading data " + err);
    });
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
                    </tbody>
                </table>
            </div>
        </section>
    );
}

export default Explorer