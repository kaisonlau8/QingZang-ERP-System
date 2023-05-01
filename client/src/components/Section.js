import React from 'react';

const Section = ({ number }) => {
  return (
    <section className="bg-bg">
      <h2 className="text-xl text-white">
        Section {number}
      </h2>
      {/* 在此处添加各部分的具体内容 */}
    </section>
  );
};

export default Section;
