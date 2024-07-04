import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';

import './explorer.css';

function Explorer() {
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { pathname } = location;

    console.log(pathname);
    const arrangement = pathname.replace("tankioarchive/", "tankioarchive/archive/")+"/arrangement.json"
/*  fetch(arrangement).then(response => {
        console.log(response);
        return response.json();
    }).then(data => {
        data.content.forEach(element => {
            let newrow = document.createElement("tr");
            let name = document.createElement("td");
            let type = document.createElement("td");
            let actions = document.createElement("td");
            if (element.type === "folder"){
                type.innerHTML = '{t("explorer.folder")}';
                actions.innerHTML = '<a href="'+element.url+'" class="folder"></a><a href="'+element.url+'" class="new_tab" target="_blank"></a>';
            } else {
                type.innerHTML = '{t("explorer.file")}';
                actions.innerHTML = '<a href="'+element.url+'" class="new_tab" target="_blank"></a>';
            }
            if (element.preview !== false){
                actions.innerHTML += '<a href="'+element.url+'" class="preview-btn" target=""></a>';
            }
            name.innerHTML = element.id;
            newrow.appendChild(name);
            newrow.appendChild(type);
            newrow.appendChild(actions);
            document.querySelector("tbody").appendChild(newrow)
        });
    }).catch(err => {
        console.log("Error Reading data " + err);
    });  */
    /*
    {Object.keys(data.content).map((unit) => (
        <tr key={unit}>
            <td>{t({unit.id})}</td>
            <td>{data.content[unit]}</td>
        </tr>
    ))}
    */
    i18n.loadNamespaces(pathname.replace("tankioarchive/", ""));
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