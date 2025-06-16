import React from 'react';
import { Spin } from 'antd';

interface LoadingProps {
  tip?: string;
}

const Loading: React.FC<LoadingProps> = ({ tip = 'Loading...' }) => {
  return (
    <div className="flex items-center justify-center min-h-[200px]">
      <Spin tip={tip} size="large" />
    </div>
  );
};

export default Loading; 