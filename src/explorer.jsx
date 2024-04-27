import Breadcrumb from './breadcrumb.jsx'
import './App.css'

function Explorer() {
    let explorerName = "Name"
    let explorerType = "Type"
    let explorerActions = "Actions"
    let agentlanguage = navigator.language
    if (agentlanguage.indexOf('ru') > -1) {
        explorerName = "Название"
        explorerType = "Тип"
        explorerActions = "Действия"
    }
    return(
        <>
            <div class="window">
                <Breadcrumb />
                <table class="files">
                    <thead>
                        <tr>
                            <th>{explorerName}</th>
                            <th>{explorerType}</th>
                            <th>{explorerActions}</th>
                        </tr>
                    </thead>
                </table>
            </div>
        </>
    )
}

export default Explorer