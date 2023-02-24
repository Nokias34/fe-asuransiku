import {
  AppstoreOutlined,
  BarChartOutlined,
  CloudOutlined,
  ShopOutlined,
  TeamOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
  PieChartOutlined,
  DesktopOutlined,
  FileOutlined,
} from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { Button, Space, Table, Tag } from 'antd';
import React from 'react';
const { Header, Content, Footer, Sider } = Layout;
  function getItem(label, key, icon, children) {
    return {
      key,
      icon,
      children,
      label,
    };
  }
  const items = [
    getItem('Penanggungan', 'sub1', <UserOutlined />, [
      getItem('Kebakaran', '1'),
      getItem('Gempa Bumi', '2'),
      getItem('Kendaraan Bermotor', '3'),
      getItem('Kecelakaan Diri', '4'),
      getItem('Kesehatan', '5'),
    ]),
  ];
export default function DashboardUser() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const columns = [
    {
      title: 'No Polis',
      dataIndex: 'nomor_polis',
      key: 'nomor_polis',
    },
    {
      title: 'Jenis Penanggungan',
      dataIndex: 'jenis_penanggungan',
      key: 'jenis_penanggungan',
    },
    {
      title: 'No Invoice',
      dataIndex: 'nomor_invoice',
      key: 'nomor_invoice',
    },
    {
      title: 'Status',
      dataIndex: 'status_pembayaran',
      key: 'status_pembayaran',
    },
    {
      title: '',
      key: 'action',
      render: () => (
        <Space size="middle">
          <Button >Lihat Rincian</Button>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: '1',
      nomor_polis: 'ABC12345',
      jenis_penanggungan: 'Asuransi Kebakaran',
      nomor_invoice: 'ZXC9766',
      status_pembayaran: 'Belum Dibayar',
      
    },
    {
      key: '2',
      nomor_polis: 'DEF12345',
      jenis_penanggungan: 'Asuransi Kebakaran',
      nomor_invoice: 'LKJ891273',
      status_pembayaran: 'Sudah Dibayar',
     
    },
    {
      key: '3',
      nomor_polis: 'GHI12345',
      jenis_penanggungan: 'Asuransi Kebakaran',
      nomor_invoice: 'JIKS78126',
      status_pembayaran: 'Sudah Dibayar',
    
    },
  ];
  return (
    <Layout hasSider>
      <Sider
        style={{
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: 'rgba(255, 255, 255, 0.2)',
          }}
        />
       <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
      </Sider>
      <Layout
        className="site-layout"
        style={{
          marginLeft: 200,
        }}
      >
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content
          style={{
            margin: '0',
            overflow: 'initial',
          }}
        >
          <div
            style={{
              padding: 24,
              textAlign: 'center',
              background: colorBgContainer,
            }}
          >
            <p>long content</p>

           <Table columns={columns} dataSource={data} />
            
          </div>
        </Content>
      </Layout>
    </Layout>
  );
}