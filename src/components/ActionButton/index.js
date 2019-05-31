import React from "react";
import { Button, Icon } from "antd";

const ActionButton = ({ props }) => {
    const items = {
        className: props.className,
        exec: props.action ? props.action.action_exec : '',
        icon: props.icon,
        label: props.action ? props.action.action_title : '',
    };

    return (
        <div className={`${items.className} mr-2 `}>
            <Button size='large' className='' onClick={items.exec}>
                <span className={ 'd-flex align-items-center' }><Icon className={'mr-1'} type={items.icon}/> {items.label} </span>
            </Button>
        </div>
    )
}

export default ActionButton;
