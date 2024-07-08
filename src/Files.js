import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useLoadNamespace } from './useLoadNamespace';

function importFileEntries(EntriesPath, namespace){
    const { t } = useTranslation();
    fetch(EntriesPath).then(response => {
        return response.json();
    }).then(data => {
        data.content.forEach((itemunit) => {
            let newrow = document.createElement("tr");
            let rowname = document.createElement("td");
            newrow.appendChild(rowname);
            rowname.innerText = t(itemunit.name, {ns: namespace});
            let rowtype = document.createElement("td");
            newrow.appendChild(rowtype);
            rowtype.innerText = t(itemunit.type);
            let rowactions = document.createElement("td");
            newrow.appendChild(rowactions);
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
            document.querySelector("tbody").appendChild(newrow);
        })
    }).catch(err => {
        console.log("Error Reading data " + err);
    })
}

function Files(){
    const { t } = useTranslation();
    const location = useLocation();
    const { pathname } = location;
    let namespace = pathname.replace("tankioarchive/", "").substring(1)
    if (pathname.endsWith("/")){
        namespace = namespace.slice(0, -1)
    }
    const arrangement = pathname.replace("tankioarchive/", "tankioarchive/archive/")+"/arrangement.json"
    console.log(useLoadNamespace(namespace));
    importFileEntries(arrangement, namespace);
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