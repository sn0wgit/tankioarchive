import { useTranslation } from 'react-i18next';
function useLoadNamespace(namespace) {
    const { i18n } = useTranslation();
    i18n.loadNamespaces(namespace);
    return "Namespace "+namespace+" is loaded!"
}

export { useLoadNamespace };