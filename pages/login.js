import Head from 'next/head'
import LandingPage from '@/components/landingpage/landingpage';
import { AntDesignOutlined } from '@ant-design/icons'; 
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { signIn, getCsrfToken } from 'next-auth/react';
import { useRouter } from 'next/router';

const { Header, Content, Footer, Sider } = Layout; 

export default function Login({ csrfToken }) {
 const router = useRouter();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const onSubmit = async (values) =>{
    const res = await signIn('credentials', {
        redirect: false,
        email: values.email,
        password: values.password,
        callbackUrl: `${window.location.origin}`,
      });
      if (res.url) router.push(res.url);
  }
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
            <LandingPage onSubmit={onSubmit} />
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

// export async function getServerSideProps(context) {
//     return {
//       props: {
//         csrfToken: await getCsrfToken(context),
//       },
//     };
//   }