
import styles from '@/styles/Home.module.css'
import { AntDesignOutlined } from '@ant-design/icons'; 
import { Breadcrumb, Layout, Menu, theme } from 'antd';

const { Header, Content, Footer, Sider } = Layout; 

export default function LayoutAja() {
    const {
      token: { colorBgContainer },
    } = theme.useToken();
    
    return (
      <>
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
            
            {/* <div id="logo">
            <AntDesignOutlined 
            style={{ fontSize: '150px', color: '#08c', verticalAlign: 'middle'}}
            />
            </div>
  
            <div id="login">
              <LandingPage />
            </div> */}
  
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