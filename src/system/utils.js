import React from 'react';
import ActionButton from '../components/ActionButton';
import { buttonConfiguration } from './buttonsRoles';


export const compareByAlph = (a, b) => {
    if (a > b) {
        return 1;
    }
    if (a < b) {
        return -1;
    }
    return 0;
};


export const SetButtons = (page, actions) => {
    let count=0;
    const CODE_USER = 'SAD';
    return buttonConfiguration.map(button => {
        if (button.roles.some(code => code === CODE_USER && button.component.some(item => item === page))) {
            const action=actions[ count ];
            const merge={ ...button, action };
            count ++;
            console.log("MER", merge);
            return <ActionButton key={count} props={merge} />
        } else {
            return false
        }
    })
};
