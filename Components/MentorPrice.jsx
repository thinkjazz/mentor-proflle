import { Card, Divider } from 'antd';
import React from 'react';

const MentorPrice = () => (
  <div className="site-card-border-less-wrapper">
    <Card bordered={false}>
      <Divider>Стоимость занятий</Divider>
      <p>Часовое занятие с ментором 1871₽/ час</p>
      <p>Пробные 15 минут Бесплатно</p>
      <p>Дополнительные услуги Разбор проекта по запросу</p>
    </Card>
  </div>
);
export default MentorPrice;
