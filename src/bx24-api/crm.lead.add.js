import axios from 'axios'
import {headRowText, leftColText} from "../store/data";

 const crmLeadAdd = (nam, state, answers) => {
    const [secondName, name, lastName] = nam.split(' ').map((el) => el);

     const description = answers.map((el, ind) => leftColText[ind] + " - " + headRowText[el] + "    \n").join('');
     console.log(description);
    const urlApi = "https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.lead.add.json?" +
        `fields[TITLE]=${nam}&fields[STATUS_ID]=${"NEW"}&fields[NAME]=${name}&fields[SECOND_NAME]=${lastName}&fields[LAST_NAME]=${secondName}&fields[POST]=${state}&fields[SOURCE_DESCRIPTION]=${description}&fields[COMMENTS]=${description}`;
    axios.post(urlApi).then((resp) => console.log(resp));
};
export default  crmLeadAdd;