import axios from 'axios'
import {headRowText, leftColText} from "../store/data";

 const  crmLeadAdd = async (nam, state, answers) => {
    const [secondName, name, lastName] = nam.split(' ').map((el) => el);

    const description = answers.map((el, ind) => leftColText[ind] + " - " + headRowText[el] + "    \n").join('');
    console.log(description);
    const contactsCreateRequestString = "https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.contact.add?" +
        `fields[STATUS_ID]=${"NEW"}&fields[NAME]=${lastName !== undefined ? secondName + " " + name + " " + lastName : name + " " + secondName}&fields[POST]=${state}`;
    const contactsCreateRequestStringGCTM = `https://intranet.gctm.ru/rest/1552/sqjno5st2nedtafg/crm.contact.add?` +
        `fields[STATUS_ID]=${"NEW"}&fields[NAME]=${lastName !== undefined ? secondName + " " + name + " " + lastName : name + " " + secondName}&fields[POST]=${state}`;
     let contactId;

     await axios.post(contactsCreateRequestString).then((resp) => resp.data.result).then((data) => {
         contactId = data
     });
     console.log("contactId");
     console.log(contactId);
     const dealCreateRequestStringGCTM = `https://intranet.gctm.ru/rest/1552/sqjno5st2nedtafg/crm.deal.add?fields[CONTACT_ID]=${contactId}` +
         `&fields[TITLE]=${name + " " + secondName + " " + 'прошел тест'}\`&fields[UF_CRM_1699599951990]=${answers[0]}&fields[UF_CRM_1699599977064]=${answers[1]}&fields[UF_CRM_1699599999778]=${answers[2]}&fields[UF_CRM_1699600032795]=${answers[3]}&fields[UF_CRM_1699600054919]=${answers[4]}&fields[UF_CRM_1699600072362]=${answers[5]}\``;
     const dealCreateRequestString = `https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.deal.add?fields[CONTACT_ID]=${contactId}\`&fields[UF_CRM_1699599951990]=${answers[0]}&fields[UF_CRM_1699599977064]=${answers[1]}&fields[UF_CRM_1699599999778]=${answers[2]}&fields[UF_CRM_1699600032795]=${answers[3]}&fields[UF_CRM_1699600054919]=${answers[4]}&fields[UF_CRM_1699600072362]=${answers[5]}\`` +
         `&fields[TITLE]=${name + " " + secondName + " " + 'прошел тест'}`;

     await axios.post(dealCreateRequestString).then((resp) => {
         console.log(resp)
     });


};
export default  crmLeadAdd;