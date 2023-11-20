import axios from 'axios'
import {detailes} from "../store/data";

 const crmLeadAdd = (nam, state, answers) => {
    const [secondName, name, lastName] = nam.split(' ').map((el) => el);
    // console.log("name-" + name);
    // console.log("secondName-" + secondName);
    // console.log("lastName-" + lastName);
    // console.log("state-" + state);
    // console.log("answers-" + answers);
    const urlApi = "https://intranet.gctm.ru/rest/1552/9zo6fugaizlbk9mk/crm.lead.add.json?" +
        `fields[NAME]=${name}&fields[SECOND_NAME]=${secondName}&fields[LAST_NAME]=${lastName}&fields[POST]=${state}&SOURCE_DESCRIPTION=${answers}`;
    axios.post(urlApi).then((resp) => console.log(resp));
};
export default  crmLeadAdd;