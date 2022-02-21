import React from 'react';
import '../css/mainContent.css';

const MainContent = () => {
  return (
    <>
      <div id="main-content">
        <div className="video-box">
          <iframe
            id="main-video"
            src="https://www.youtube.com/embed/yuHUVT4oLtg"
            title="YouTube video player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          ></iframe>
        </div>
        <div className="hashtag">#자유형, 자유형롤링</div>
        <div className="title">
          자유형! 이것만 연습해도 롤링을 잘 할 수 있지요! (지상 교정 프로그램)
        </div>
      </div>
    </>
  );
};

export default MainContent;
