import axios from 'axios'
import {headRowText, leftColText} from "../store/data";

 const crmLeadAdd = (nam, state, answers) => {
    const [secondName, name, lastName] = nam.split(' ').map((el) => el);

     const description = answers.map((el, ind) => leftColText[ind] + " - " + headRowText[el] + "    \n").join('');
     console.log(description);
    const urlApi = "https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.lead.add.json?" +
        `fields[TITLE]=${nam}&fields[STATUS_ID]=${"NEW"}&fields[NAME]=${name}&fields[SECOND_NAME]=${lastName}&fields[LAST_NAME]=${secondName}&fields[POST]=${state}` +
    `&fields[UF_CRM_1699599951990]=${answers[0]}&fields[UF_CRM_1699599977064]=${answers[1]}&fields[UF_CRM_1699599999778]=${answers[2]}&fields[UF_CRM_1699600032795]=${answers[3]}&fields[UF_CRM_1699600054919]=${answers[4]}&fields[UF_CRM_1699600072362]=${answers[5]}`;
    axios.post(urlApi).then((resp) => console.log(resp));
};
export default  crmLeadAdd;