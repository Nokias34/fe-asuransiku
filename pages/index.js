import Head from 'next/head'
import LandingPage from '@/components/landingpage/landingpage';
import { AntDesignOutlined } from '@ant-design/icons'; 
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout; 

export default function Home() {
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  
  return (
    <>
      <Head>
        <title>Login</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      
      <Layout className="layout">
      <Header>
        <div className="logo" />
        <Menu
          theme="dark"
          mode="horizontal"
        />
      </Header>
      <Content
        style={{
          
        }}
      >
        <div
          className="site-layout-content"
          style={{
            background: colorBgContainer,
          }}
        >
          
          <div id="logo">
          <AntDesignOutlined 
          style={{ fontSize: '150px', color: '#08c', verticalAlign: 'middle'}}
          />
          </div>

          <div id="login">
            <LandingPage />
          </div>

      </div>
      </Content>
      <Footer
        style={{
          textAlign: 'center',
        }}
      >
        MRP @2023
      </Footer>
    </Layout>
    </>
  )
}
