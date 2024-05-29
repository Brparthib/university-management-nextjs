"use client";

import { Breadcrumb, Layout, theme } from "antd";

const { Header, Content, Footer } = Layout;

const Contents = ({ children }: { children: React.ReactNode }) => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Content style={{ minHeight: "100vh", color: "black" }}>{children}</Content>
  );
};

export default Contents;
