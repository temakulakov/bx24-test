import {atom} from 'recoil';
export const testFormState = atom({
    key: 'testFormState',
    default: JSON.parse(localStorage.getItem('testFormState')) ? JSON.parse(localStorage.getItem('testFormState')) : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0 ,0]
});

export const testFormErrorState = atom({
    key: 'testFormErrorState',
    default: []
});

export const inputFormState = atom({
    key: 'inputFormState',
    default: {
        fio: JSON.parse(localStorage.getItem('inputFormState'))?.fio ? JSON.parse(localStorage.getItem('inputFormState')).fio : "",
        state: JSON.parse(localStorage.getItem('inputFormState'))?.state ? JSON.parse(localStorage.getItem('inputFormState')).state : "",
        error: JSON.parse(localStorage.getItem('inputFormState'))?.error ? JSON.parse(localStorage.getItem('inputFormState')).error : false,
    }
});



export const stepFormState = atom({
    key: 'stepFormState',
    default: JSON.parse(localStorage.getItem('stepFormState')) ? JSON.parse(localStorage.getItem('stepFormState')) : 0,
});