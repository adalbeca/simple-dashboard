import React from 'react';
import { Menu, Icon } from 'antd';
import { Link } from 'react-router-dom';
import { LinksRoutes } from '../../system/listRoutes';


const SideMenu = (props) => {

    const CODE_USER = 'SAD';
    const routes = LinksRoutes.list.filter((e) => e.rol.some(key => key === CODE_USER));
    const path = window.location.pathname;
    return (
        <Menu theme='dark' defaultSelectedKeys={[ '1' ]} mode='inline'
            onClick={props.selection}>
            {
                routes.map((e) => {
                    const icon = <Icon type={e.icon} className={`icons-sidemenu`}/>;
                    const classActive = path === e.to ? 'ant-menu-item-selected' : '';
                    return (
                        <Menu.Item key={e.key} className={classActive}>
                            <Link to={e.to} className='opacity-small d-flex align-items-center'>
                                {icon}
                                <span>{e.text}</span>
                            </Link>
                        </Menu.Item>
                    )
                })
            }
        </Menu>
    )
};

export default SideMenu;
