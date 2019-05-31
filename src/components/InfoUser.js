import React, { useState } from 'react';
import { Button, Col, Popover, Row } from 'antd';


const InfoUser = (props) => {
    const [ userProfile, setUserProfile ] = useState({
        name: 'Demo',
        profile: 'SuperAdmin'
    });

    const handleLogout = () => {
        props.history.replace('/login');
    };

    const getLogoutContent = () => {
        return (
            <div>
                <a type='dashed'
                    href={'#action'}
                    icon='poweroff'
                    size='large'
                    onClick={(e) => {
                        handleLogout()
                    }}>
                    Logout
                </a>
            </div>
        )
    }

    return (
        <Row>
            <Col span={22} className='d-flex justify-content-end align-items-center rw-line-height height-55'>
                <div>
                    <Popover placement='bottom'
                        title=''
                        className='header-user-container d-flex flex-row align-items-center '
                        content={getLogoutContent()}
                        trigger='click'>
                        <Button type='normal'
                            shape='circle'
                            icon='user'
                            className='mr-2 d-flex justify-content-center'
                            size='large' htmlType='button'/>
                        <label className='flex-column d-flex'>
                            <span className='header-user-name'>{userProfile.name}</span>
                            <span className='header-user-company padd'>{userProfile.profile}</span>
                        </label>
                    </Popover>
                </div>
            </Col>
        </Row>
    )
}
export default InfoUser;
