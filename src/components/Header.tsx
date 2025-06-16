import React from 'react';
import { Layout, Menu } from 'antd';
import { Link, useLocation } from 'react-router-dom';
import { HomeOutlined, BarChartOutlined } from '@ant-design/icons';

const { Header: AntHeader } = Layout;

const Header: React.FC = () => {
  const location = useLocation();
  const menuItems = [
    {
      key: '/',
      icon: <HomeOutlined />,
      label: <Link to="/">Home</Link>,
    },
    {
      key: '/chart-maker',
      icon: <BarChartOutlined />,
      label: <Link to="/chart-maker">Chart Maker</Link>,
    },
  ];
  return (
    <AntHeader className="bg-white shadow-sm">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-primary">
            <Link to="/">Excel Chart Maker</Link>
          </div>
          <Menu
            mode="horizontal"
            selectedKeys={[location.pathname]}
            items={menuItems}
            className="border-0"
          />
        </div>
      </div>
    </AntHeader>
  );
};
export default Header; 