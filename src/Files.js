import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Files(){
    const { t, i18n } = useTranslation();
    const location = useLocation();
    const { pathname } = location;
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null)
    const [namespace] = useState(pathname.endsWith("/") ? pathname.replace("tankioarchive/", "").substring(1).slice(0, -1) : pathname.replace("tankioarchive/", "").substring(1))
    const [entriesPath] = useState(pathname.replace("tankioarchive/", "tankioarchive/archive/")+"/arrangement.json")

    useEffect(() => {
        i18n.loadNamespaces(namespace);
        //console.log("Namespace "+namespace+" is loaded!")
        const fetchData = async () => {
            try {
                const response = await fetch(entriesPath);
                if (!response.ok) {
                    throw new Error('Network response was not ok.');
                }
                const importedEntries = await response.json();
                setData(importedEntries);
                setLoading(false);
            } catch (error) {
                setError(error.message);
                setLoading(false);
            }
        };
        fetchData()
    }, [entriesPath, namespace, i18n]);

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
                {loading ? (null) : error ? (null) : 
                    <tbody>{data.content.map(
                        (item) => (
                            <tr key={data.content.indexOf(item)}>
                                <td>{t(item.name, { ns: namespace })}</td>
                                <td>{t(item.type)}</td>
                                <td>
                                    {item.preview !== false 
                                        ? <a aria-label="Open preview" href={item.preview} className="preview"></a> 
                                        : null
                                    }
                                    <a aria-label="Open item description in new tab" href={item.url} className="new_tab" target="_blank" rel="noreferrer"></a>
                                    {item.type === 'explorer.folder' 
                                        ? <a aria-label="Open folder" href={item.url} className="folder"></a> 
                                        : <a aria-label="Download file" href={item.url} className="download" download="true"></a>
                                    }
                                </td>
                            </tr>
                        )
                    )}</tbody>
                }
            </table>
        </div>
    );
}

export default Files