
import { Card, Space, Row, Col } from 'antd';

const Course = ({ courses }) => (
  <div className="app-container" style={{ padding: '90px 5px 5px' }}>
    <style>{`
      .app-container {
        display: flex;
        align-items: center;
        background: rgb(17, 50, 91);
        justify-content: center;
      }

      .custom-card {
        width: 100%;
        background: linear-gradient(to right, rgba(20, 30, 48), rgba(36, 59, 85));
        color: white;
        border: 1px solid white;
        border-radius: 8px;
        padding: 16px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
        transition: transform 0.3s ease;
      }

      .custom-card:hover {
        transform: translateY(-4px);
      }
    `}</style>

    <Space>
      <Row gutter={[16, 16]}>
        {courses.map((course, index) => (
          <Col key={index} xs={12} sm={12} md={12} lg={12} xl={12}>
             <a href={course.Link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
            <Card
              className="custom-card"
              size="small"
              title={<span style={{ color: 'white' }}>{course.code}</span>}
            >
              <p style={{ color: 'white' }}>{course.title}</p>
            </Card>
            </a>
          </Col>
        ))}
      </Row>
    </Space>
  </div>
);

export default Course;
