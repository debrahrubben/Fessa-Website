import { Button, Modal } from 'antd';

const CustomModal = ({ open, handleOk, handleCancel, loading }) => {
  const renderModalContent = () => {
    return (
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <div style={{ flex: 1, marginRight: '10px' }}>
          <a href="https://apps.knust.edu.gh/students">
            <img
              src="https://i.pinimg.com/originals/23/45/c5/2345c5c02303b4e1373f5a7aa81ef1b9.png"
              alt=""
              style={{ width: '100%', height: '100%' }}
            />
          </a>
        </div>
        <div style={{ flex: 1 }}>
          <a href="https://myclass.knust.edu.gh/login/index.php">
            <img
              src="https://cdn.mfidie.com/wp-content/uploads/2022/08/20220816_110209.jpg"
              alt=""
              style={{ width: '100%' }}
            />
          </a>
        </div>
      </div>
    );
  };

  const renderModalFooter = () => {
    return [
      <Button
        key="link-portal"
        href="https://apps.knust.edu.gh/students"
        type="primary"
        loading={loading}
        onClick={handleOk}
        style={{ backgroundColor: '#17223A' }}
      >
        Student Portal
      </Button>,
      <Button
        key="link-classroom"
        href="https://myclass.knust.edu.gh/login/index.php"
        type="primary"
        loading={loading}
        onClick={handleOk}
        style={{ backgroundColor: '#17223A' }}
      >
        Virtual Classroom
      </Button>,
    ];
  };

  return (
    <Modal
      open={open}
      onOk={handleOk}
      onCancel={handleCancel}
      footer={renderModalFooter()}
    >
      {renderModalContent()}
    </Modal>
  );
};

export default CustomModal;
