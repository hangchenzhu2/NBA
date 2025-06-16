import React from 'react';
import { Button, Card, Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { UploadOutlined, CopyOutlined, BarChartOutlined, PieChartOutlined, RadarChartOutlined, LineChartOutlined } from '@ant-design/icons';

const Home: React.FC = () => {
  const features = [
    { icon: <UploadOutlined className="text-3xl text-primary" />, title: 'Upload Excel Files', description: 'Upload your Excel files directly or paste data from your spreadsheet' },
    { icon: <CopyOutlined className="text-3xl text-primary" />, title: 'Paste Data', description: 'Simply copy and paste your data from Excel or any spreadsheet' },
    { icon: <BarChartOutlined className="text-3xl text-primary" />, title: 'Multiple Chart Types', description: 'Create various chart types including bar, line, pie, and more' }
  ];
  const chartTypes = [
    { icon: <PieChartOutlined className="text-2xl" />, title: 'Pie Charts', description: 'Create beautiful pie and donut charts' },
    { icon: <BarChartOutlined className="text-2xl" />, title: 'Bar Charts', description: 'Visualize data with horizontal and vertical bar charts' },
    { icon: <LineChartOutlined className="text-2xl" />, title: 'Line Charts', description: 'Show trends and patterns with line charts' },
    { icon: <RadarChartOutlined className="text-2xl" />, title: 'Radar Charts', description: 'Compare multiple variables with radar charts' }
  ];
  return (
    <div className="space-y-12">
      <section className="text-center py-12">
        <h1 className="text-4xl font-bold mb-4">Excel Chart Maker - Create Beautiful Charts from Excel Data</h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">Transform your Excel data into stunning visualizations with our easy-to-use chart maker</p>
        <Link to="/chart-maker">
          <Button type="primary" size="large" className="btn-primary">Start Creating Charts</Button>
        </Link>
      </section>
      <section className="py-8">
        <h2 className="text-2xl font-bold text-center mb-8">Key Features</h2>
        <Row gutter={[24, 24]}>
          {features.map((feature, index) => (
            <Col xs={24} sm={8} key={index}>
              <Card className="h-full text-center">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </Card>
            </Col>
          ))}
        </Row>
      </section>
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold text-center mb-8">Supported Chart Types</h2>
          <Row gutter={[24, 24]}>
            {chartTypes.map((chart, index) => (
              <Col xs={24} sm={12} md={6} key={index}>
                <Card className="h-full">
                  <div className="text-primary mb-4">{chart.icon}</div>
                  <h3 className="text-lg font-semibold mb-2">{chart.title}</h3>
                  <p className="text-gray-600">{chart.description}</p>
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      </section>
    </div>
  );
};

export default Home; 