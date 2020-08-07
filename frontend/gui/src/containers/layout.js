import React from "react";

import { Layout, Menu, Breadcrumb } from 'antd';
import { UserOutlined, LaptopOutlined, NotificationOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'


const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;

const CustomLayout = (props) => {
    return (
          <Layout className="layout">
            <Header>
              <div className="logo" />
              <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']}>
                <Menu.Item key="1">nav 1</Menu.Item>
                <Menu.Item key="2">nav 2</Menu.Item>
                <Menu.Item key="3">nav 3</Menu.Item>
              </Menu>
            </Header>
            <Content style={{ padding: '0 50px' }}>
              <Breadcrumb style={{ margin: '16px 0' }}>
                <Breadcrumb.Item><Link to='/' >Home</Link></Breadcrumb.Item>
                <Breadcrumb.Item><Link to='/' >articles</Link></Breadcrumb.Item>
              </Breadcrumb>
              <div className="site-layout-content">Content {props.children} </div>
            </Content>
          </Layout>

    );
}

export default CustomLayout;


