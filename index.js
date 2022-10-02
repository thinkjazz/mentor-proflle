import React from 'react';
import ReactDOM from 'react-dom';
import MentorBio from './Components/MentorBio.jsx';
import MentorHelp from './Components/MentorHelp.jsx';
import WorkExperience from './Components/WorkExperience.jsx';
import MentorPhotoBlock from './Components/MentorPhotoBlock.jsx';
import MentorPrice from './Components/MentorPrice.jsx';
import { Card, Space } from 'antd';
import { Col, Row } from 'antd';

ReactDOM.render(
  <div>
    <Row gutter={[16, 16]}>
      <Col span={8}>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <MentorPhotoBlock />

          <MentorPrice />
        </Space>
      </Col>

      <Col span={16}>
        <Space direction="vertical" size="large" style={{ display: 'flex' }}>
          <Card>
            <MentorBio />
          </Card>
          <Card>
            <MentorHelp />
          </Card>
          <Card>
            <WorkExperience />
          </Card>
        </Space>
      </Col>
    </Row>
  </div>,
  document.getElementById('container')
);
