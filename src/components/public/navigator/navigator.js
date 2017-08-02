import React from 'react';
import styles from './navigator.css';
import { Layout, Menu, Icon, Row, Col } from 'antd';

const { Header } = Layout;
const SubMenu = Menu.SubMenu;

class navigator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      current: 'mail',
    };
  }
  handleClick = (e) => {
    console.log('click ', `${e.key}点击`);
    switch (e.key) {
      case 'realStuff': this.props.blogFilter(0);
        break;
      case 'note':this.props.blogFilter(1);
        break;
      case 'travel':this.props.blogFilter(2);
        break;
      default:
        break;
    }
    this.setState({
      current: e.key,
    });
  }
  render() {
    return (
      <Layout>
        <Header className={styles.header}>
          <div>
            <Row>
              <Col xs={0} md={3} />
              <Col xs={24} md={18}>
                <div className={styles.logo}>
                  <img src={require('./img/logo-50.png')} height={50} width={50} />
                </div>
                <div className={styles.rightNavigator}>
                  <Menu
                    onClick={this.handleClick}
                    selectedKeys={[this.state.current]}
                    mode="horizontal"
                    style={{ lineHeight: '48px' }}
                  >
                    <Menu.Item key="mail">
                      首页
                    </Menu.Item>
                    <SubMenu
                      title={
                        <span>
                        博客
                      </span>
                    }
                    >
                      <Menu.Item key="realStuff" >
                        <Icon type="book" id={styles.iconWrap} />干货
                      </Menu.Item>
                      <Menu.Item key="note"><Icon type="compass" id={styles.iconWrap} />杂记</Menu.Item>
                      <Menu.Item key="travel"><Icon type="flag" id={styles.iconWrap} />游记</Menu.Item>
                    </SubMenu>
                    <Menu.Item key="alipay">
                      关于
                    </Menu.Item>
                  </Menu>
                </div>

              </Col>
              <Col xs={0} md={3} />
            </Row>
          </div>
        </Header>
      </Layout>
    );
  }
}

navigator.propTypes = {};

export default navigator;
