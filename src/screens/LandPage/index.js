import React, { useState } from 'react';
import { Route } from 'react-router-dom';
import { Layout, Menu, Breadcrumb, Icon } from 'antd';
import FormRegister from '../Notices/FormRegister';
import SideMenu from './SideMenu';
import InfoUser from '../../components/InfoUser';
import Notices from '../Notices';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

const LandPage = () => {
    const [ collapsed, setCollapsed ] = useState(false);

    const onCollapse = collapsed => {
        setCollapsed(collapsed);
    };

    const openItem = (item, key, keyPath) => {
    };

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Sider
                collapsible
                collapsed={collapsed}
                onCollapse={onCollapse}>
                {!collapsed &&
                <div className='sider-logo'>
                    <img src={require('../../assets/trial-version.png')} alt='logo' className={'logo-header'} />
                </div>
                }
                <SideMenu selection={openItem} />
            </Sider>
            <Layout>
                <Header style={{ background: '#fff', padding: 0 }}>
                    <InfoUser/>
                </Header>
                <Content style={{ margin: '0 16px' }}>
                    <Route path={'/notices'} component={Notices} roles={[ 'ADMIN', 'READER' ]} />
                    <Route path={'/new/notice'} component={FormRegister} roles={[ 'ADMIN', 'READER' ]} />
                </Content>
                <Footer style={{ textAlign: 'center' }}>Form</Footer>
            </Layout>
        </Layout>
    );
}


export default LandPage;
