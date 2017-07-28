import React from 'react';
import { connect } from 'dva';
import styles from './Homepage.css';
import { Tag, Row, Col } from 'antd';
import Navigator from '../../components/public/navigator/navigator.js';
import RightNavHeader from '../../components/public/rightNavHeader/navHeader.js';
import ArticleSelect from '../../components/public/articleSelect/articleSelect';
import data from '../../data.js';

const article = {
  blogTitle: '腾讯传评',
  createTime: '2017-01-23 14:35:31',
  blogReadNum: '234',
  blogThumbnail: 'http://flystation.image.alimmdn.com/blog/blogBackground/tencentBlog.jpg',
};

const Homepage = () => {
  return (
    <div>
      <Navigator />
      <div className={styles.container}>
        <Row>
          <Col xs={0} md={3} />
          <Col xs={24} md={18}>
            <div className={styles.main}>
              <Row gutter={16}>
                <Col span={16}>
                  <div className={styles.wrap}>
                    <ArticleSelect article={article} />
                    {
                      data.data.map((val, index) => {
                        return (<ArticleSelect article={val} />);
                      })
                    }
                  </div>
                </Col>
                <Col span={8}>
                  <div className={styles.rightNav}>
                    <div className={styles.rightNavContainer}>
                      <RightNavHeader iconType={'like-o'} navTitle={'阅读最多'} />
                      <div className={styles.mostReadContent}>
                        lantern访问facebook等国外网站
                      </div>
                      <div className={styles.mostReadContent}>
                        lantern访问facebook等国外网站
                      </div>
                      <div className={styles.mostReadContent}>
                        lantern访问facebook等国外网站
                      </div>
                    </div>
                    <div className={styles.rightNavContainer}>
                      <RightNavHeader iconType={'tag-o'} navTitle={'标签'} />
                      <div className={styles.tagsContainer}>
                        <Tag color="pink" className={styles.tagWrap}>pink</Tag>
                      </div>
                    </div>
                  </div>
                </Col>
              </Row>
            </div>
          </Col>
          <Col xs={0} md={3} />
        </Row>
      </div>
    </div>
  );
};

Homepage.propTypes = {
};

export default connect()(Homepage);
