import Header from "./main-header";

const Layout = (props) => {
  return (
    <>
      <Header></Header>
      <main>{props.children}</main>
    </>
  );
};

export default Layout;
