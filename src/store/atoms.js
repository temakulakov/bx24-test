import {atom} from 'recoil';
export const testFormState = atom({
    key: 'testFormState',
    default: [
       0, 0, 0, 0, 0, 0
    ]
});

export const testFormErrorState = atom({
    key: 'testFormErrorState',
    default: []
});

export const inputFormState = atom({
    key: 'inputFormState',
    default: {
        fio: "",
        state: "",
        error: false,
    }
});



export const stepFormState = atom({
    key: 'stepFormState',
    default: 0,
});