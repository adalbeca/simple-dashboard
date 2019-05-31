import React from 'react';
import { Table } from 'antd';
import Page from '../../components/Page';
import { SetButtons, compareByAlph } from "../../system/utils";

const Notices = (props) => {

    const gotoDetail = (r) => {
        props.history.push('/detail/notice/' + r);
    };

    const onChange = (pagination, filters, sorter) => {
        console.log('params', pagination, filters, sorter);
    };

    const notice = [
        {
            id: '01',
            notice: 'ninguna'
        },
        {
            id: '02',
            notice: 'otra'
        },
    ];

    const columns = [ {
        title: 'ID',
        dataIndex: 'id',
        sortDirections: [ 'descend' ],
    },
    {
        title: 'Notice',
        dataIndex: 'notice',
        defaultSortOrder: 'descend',
    }
    ];

    const action = [
        {
            action_title: 'Nuevo Noticia',
            action_exec: () => props.history.push('/new/notice')
        },
    ];

    const buttons = SetButtons('noticias', action);

    return (
        <Page name={'Noticias'} action={buttons}>
            <Table rowKey={record => record.id} className={'mt-2'} columns={columns} dataSource={notice}
                onChange={onChange}/>
        </Page>
    )
}
export default Notices;
