import  { useState } from 'react';
import { Button, Modal } from 'antd';
import { FloatButton } from 'antd';
import { BookOutlined } from '@ant-design/icons';

const Externalsite = () => {
  const [loading, setLoading] = useState(false);
  const [open, setOpen] = useState(false);

  const showModal = () => {
    setOpen(true);
  };

  const handleOk = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setOpen(false);
    }, 3000);
  };

  const handleCancel = () => {
    setOpen(false);
  };

  return (
    <>
      <FloatButton type="primary" onClick={showModal} 
      icon={<BookOutlined />}
    
      style={{ right: 54,}}>
      <span className="material-icons">
school
</span>
        Access Student Portal / Virtual classroom
      </FloatButton>
      <Modal
        visible={open} // Use "visible" instead of "open"
        onOk={handleOk}
        onCancel={handleCancel}
        footer={[
          <Button key="back" onClick={handleCancel}>
            Return
          </Button>,
          <Button
            key="link-portal"
            href="https://apps.knust.edu.gh/students"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Student Portal
          </Button>,
          <Button
            key="link-classroom"
            href="https://myclass.knust.edu.gh/login/index.php"
            type="primary"
            loading={loading}
            onClick={handleOk}
          >
            Virtual Classroom
          </Button>,
        ]}
      >
        <div style={{ display: 'flex' }}>
          <div style={{ flex: 1, marginRight: '10px' }}>
            <img
              src="https://i.pinimg.com/originals/23/45/c5/2345c5c02303b4e1373f5a7aa81ef1b9.png"
              alt=""
              style={{ width: '100%', height:'100%', }}
            />
          </div>
          <div style={{ flex: 1 }}>
            <img
              src="https://cdn.mfidie.com/wp-content/uploads/2022/08/20220816_110209.jpg"
              alt=""
              style={{ width: '100%' }}
            />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Externalsite;
