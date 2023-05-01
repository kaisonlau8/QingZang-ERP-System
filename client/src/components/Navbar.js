import React from 'react';

const Navbar = () => {
  return (
    <header className="w-full h-[8.15vh] bg-nav">
      <div className="flex items-center justify-center h-full">
        <img
          src="https://cdn.insticker.cn/chinaRailway.png"
          alt=""
          className="w-9 h-9 mr-4"
          style={{ width: '36px', height: '36px' }}
        />
        <h1
          className="text-32 text-title font-bold font-microsoft-yahei"
        >
          青藏铁路用内燃机车牵引重量计算系统
        </h1>
      </div>
    </header>
  );
};

export default Navbar;
