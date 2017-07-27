import React from 'react';
import { connect } from 'dva';
import styles from './Homepage.css';
import { Menu, Icon, Row, Col } from 'antd';
import Navigator from '../../components/public/navigator/navigator.js';

const Homepage = () => {
  return (
    <div>
      <Navigator />
      <div className={styles.container}>
        <Row>
          <Col span={3} />
          <Col span={18}>
            <Row gutter={16}>
              <Col span={16}>
                <div className={styles.wrap}>
                   <div className={styles.articleContainer}>
                     <div className={styles.titleContainer}>
                       <div className={styles.titleWrap}>
                         <p className={styles.title}>lantern访问facebook等国外网站</p>
                         <p className={styles.subTitle}>2017-01-21 22:22:21 阅读量:25</p>
                       </div>
                     </div>
                     <div className={styles.thumbnail}>
                       <img src='http://flystation.image.alimmdn.com/blog/blogBackground/lantern.png' height={125} width={200}/>
                     </div>
                   </div>
                </div>
              </Col>
              <Col span={8}>
                <div className="rightNav">

                </div>
              </Col>
            </Row>
          </Col>
          <Col span={3} />
        </Row>
      </div>
    </div>
  );
};

Homepage.propTypes = {
};

export default connect()(Homepage);
