import { Card, Space } from 'antd';

const App = () => (
  <div style={{ background: 'rgb(17, 50, 91)', color: 'white' }}>
    <Space direction="vertical" size={16}>
      <div style={{ paddingTop: '90px' }}>
        <Card
          size="small"
          title={<span style={{ color: 'white' }}>course code</span>}
          style={{
            width: 300,
            background: 'linear-gradient(to right, rgba(20, 30, 48), rgba(36, 59, 85))',
          }}
        >
          <p style={{ color: 'white' }}>mathematics</p>
        </Card>
      </div>
    </Space>
  </div>
);

export default App;
