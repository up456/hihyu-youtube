import React from 'react';
import '../css/sideContent.css';

const SideContent = () => {
  return (
    <>
      <article className="side-content">
        <iframe
          className="side-video"
          src="https://www.youtube.com/embed/hnanNlDbsE4"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        ></iframe>
        <ul className="side-texts">
          <li className="side-title">침착맨 삼국지 완전판</li>
          <li className="side-channel">침착맨</li>
          <li className="side-info">조회수 4.5천회 •4일전</li>
          <li className="side-new">새 동영상</li>
        </ul>
      </article>
    </>
  );
};

export default SideContent;
