import React, { useState } from "react";
import {
    Form,
    Input,
    Button,
} from 'antd';
import Page from '../../../components/Page';
import { SetButtons } from '../../../system/utils';

const FormRegister = (props) => {
    const { getFieldDecorator } = props.form;
    const [ isEdit, setIsEdit ] = useState(false);
    const [ disabled, setDisabled ] = useState(false);

    const onClickEdit = () => {
        isEdit ? setIsEdit (false) : setIsEdit(true);
        disabled ? setDisabled(false) : setDisabled(true);
    };
    const onClickDelete = () => {

    };

    const handleSubmit = e => {
        e.preventDefault();
        props.form.validateFieldsAndScroll((err, values) => {
            if (!err) {
                console.log('Received values of form: ', values);
            }
        });
    };
    const action = [
        {
            action_title: isEdit ? 'Cancelar' : 'Editar',
            action_exec: () => onClickEdit(),
        },
        {
            action_title: 'Eliminar',
            action_exec: () => onClickDelete(),
        },
    ];

    const buttons = SetButtons('register', action);
    console.log(buttons);
    return (
        <Page name={'Usuarios'} action={buttons}>
            <Form {...formItemLayout} onSubmit={handleSubmit}>
                <Form.Item label='E-mail'>
                    {getFieldDecorator('email', {
                        rules: [
                            {
                                type: 'email',
                                message: 'The input is not valid E-mail!',
                            },
                            {
                                required: true,
                                message: 'Please input your E-mail!',
                            },
                        ],
                    })(<Input />)}
                </Form.Item>
                <Form.Item
                    label={ <span> Nickname </span> }
                >
                    {getFieldDecorator('nickname', {
                        rules: [ { required: true, message: 'Please input your nickname!', whitespace: true } ],
                    })(<Input />)}
                </Form.Item>

                <Form.Item {...tailFormItemLayout} >
                    <Button type='primary' htmlType='submit'>
                    Register
                    </Button>
                </Form.Item>
            </Form>
        </Page>
    );
};

const formItemLayout = {
    labelCol: {
        xs: { span: 24 },
        sm: { span: 4 },
    },
    wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
    },
};
const tailFormItemLayout = {
    wrapperCol: {
        xs: {
            span: 24,
            offset: 0,
        },
        sm: {
            span: 4,
            offset: 18,
        },
    },
};

export default Form.create({ name: 'register' })(FormRegister);
