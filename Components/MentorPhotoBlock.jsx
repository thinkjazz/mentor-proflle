import React from 'react';
import 'antd/dist/antd.css';
import '../assets/style.css';
import { CloudUploadOutlined } from '@ant-design/icons';
import { Card, Tag, Space, Typography, Button, Col, Row, Divider } from 'antd';

const { Text } = Typography;

const MentorPhotoBlock = () => (
  <Card
    hoverable
    cover={
      <img
        alt="example"
        src="https://i1.sndcdn.com/avatars-000288873036-ix0cdf-t500x500.jpg"
      />
    }
  >
    <Divider>Работа с ментором</Divider>
    <div>
      <Space direction="vertical" size="small" style={{ display: 'flex' }}>
        <Row>
          <Col span={24}>
            {' '}
            <Button type="primary" size="large" block>
              Оставить заявку
            </Button>
          </Col>
        </Row>
      </Space>
    </div>
  </Card>
);

export default MentorPhotoBlock;
