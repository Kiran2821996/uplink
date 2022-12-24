import React, { useState } from "react";
import History from "./components/History";
import { Layout, Menu, theme } from "antd";
import { Route, Routes, useNavigate } from "react-router-dom";

const { Header, Content, Sider } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(["dashboard"]);

  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const navigate = useNavigate();

  const items = [
    {
      key: "dashboard",
      label: "History",
      onClick: () => {
        navigate("/");
      },
    },
  ];

  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={selectedKeys}
          mode="inline"
          items={items}
          selectedKeys={selectedKeys}
        />
      </Sider>
      <Layout className="site-layout">
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        />
        <Content>
          <Routes>
            <Route path="/" element={<History />} />
          </Routes>
        </Content>
      </Layout>
    </Layout>
  );
};
export default App;
