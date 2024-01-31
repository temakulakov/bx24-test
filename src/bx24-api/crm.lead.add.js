import axios from 'axios'
import {headRowText, leftColText} from "../store/data";

 const  crmLeadAdd = async (nam, state, answers) => {
    const [secondName, name, lastName] = nam.split(' ').map((el) => el);


    const uf1 = [
        159,
        161,
        163,
        165
    ];
     const uf2 = [
         167,
         169,
         171,
         173
     ];
     const uf3 = [
         175,
         177,
         179,
         181
     ];
     const uf4 = [
         183,
         185,
         187,
         189
     ];
     const uf5 = [
         191,
         193,
         195,
         197
     ];
     const uf6 = [
         199,
         201,
         203,
         205
     ];

    const description = answers.map((el, ind) => leftColText[ind] + " - " + headRowText[el] + "    \n").join('');
    console.log(description);
    const contactsCreateRequestString = "https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.contact.add?" + `fields[STATUS_ID]=${"NEW"}&fields[NAME]=${lastName !== undefined ? secondName + " " + name + " " + lastName : name + " " + secondName}&fields[POST]=${state}`;
    // const contactsCreateRequestStringGCTM = `https://intranet.gctm.ru/rest/1552/sqjno5st2nedtafg/crm.contact.add?` +
    //     `fields[STATUS_ID]=${"NEW"}&fields[NAME]=${lastName !== undefined ? secondName + " " + name + " " + lastName : name + " " + secondName}&fields[POST]=${state}`;
     let contactId;

     await axios.post(contactsCreateRequestString).then((resp) => resp.data.result).then((data) => {
         contactId = data
         console.log(contactsCreateRequestString)
     });
     console.log("contactId");
     console.log(contactId);
     // const dealCreateRequestStringGCTM = `https://intranet.gctm.ru/rest/1552/sqjno5st2nedtafg/crm.deal.add?fields[CONTACT_ID]=${contactId}` +
     //     `&fields[TYPE_ID]=2&fields[STAGE_ID]=1&fields[TITLE]=${name + " " + secondName + " " + 'прошел тест'}\`&fields[UF_CRM_1699599951990]=${answers[0]}&fields[UF_CRM_1699599977064]=${answers[1]}&fields[UF_CRM_1699599999778]=${answers[2]}&fields[UF_CRM_1699600032795]=${answers[3]}&fields[UF_CRM_1699600054919]=${answers[4]}&fields[UF_CRM_1699600072362]=${answers[5]}`;

     const dealCreateRequestString = `https://gagawa.bitrix24.ru/rest/9/imsk3z7t8hjyhtc2/crm.deal.add?fields[CONTACT_ID]=${contactId}` + `&fields[TYPE_ID]=1&fields[CATEGORY_ID]=1&fields[STAGE_ID]=C1:NEW&fields[TITLE]=${name + " " + secondName + " " + 'прошел тест'}` + `&fields[UF_CRM_1699599951990]=${uf1[answers[0] - 1]}&fields[UF_CRM_1699599977064]=${uf2[answers[1] - 1]}&fields[UF_CRM_1699599999778]=${uf3[answers[2] - 1]}&fields[UF_CRM_1699600032795]=${uf4[answers[3] - 1]}&fields[UF_CRM_1699600054919]=${uf5[answers[4] - 1]}&fields[UF_CRM_1699600072362]=${uf6[answers[5] - 1]}`;


     await axios.post(dealCreateRequestString).then((resp) => {
         console.log(resp);
         console.log("answers[0]" + uf1[answers[0]]);
         console.log("answers[0]" + uf2[answers[1]]);
         console.log("answers[0]" + answers[2]);
         console.log("answers[0]" + answers[3]);
         console.log("answers[0]" + answers[4]);
         console.log("answers[0]" + answers[5]);
         console.log(dealCreateRequestString)
     }).catch((e) => {
         console.log(e)
     });


};
export default  crmLeadAdd;