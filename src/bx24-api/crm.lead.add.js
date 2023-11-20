import axios from 'axios'
import {headRowText, leftColText} from "../store/data";

 const crmLeadAdd = (nam, state, answers) => {
    const [secondName, name, lastName] = nam.split(' ').map((el) => el);

     const description = answers.map((el, ind) => leftColText[ind] + " - " + headRowText[el] + "\n").join('');
     console.log(description);
    const urlApi = "https://intranet.gctm.ru/rest/1552/9zo6fugaizlbk9mk/crm.lead.add.json?" +
        `fields[TITLE]=${nam}&fields[NAME]=${name}&fields[SECOND_NAME]=${lastName}&fields[LAST_NAME]=${secondName}&fields[POST]=${state}&SOURCE_DESCRIPTION=${description}`;
    axios.post(urlApi).then((resp) => console.log(resp));
};
export default  crmLeadAdd;