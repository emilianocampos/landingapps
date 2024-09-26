import React from 'react';


const VideoSection = () => {
  return (
    <section className="video-section prelative text-center white">
      <div className="section-padding video-overlay">
        <div className="container">
      
         
          <div className="video-popup">
            <div className="video-src">
              <div className="iframe-src">
                <iframe
                  src="https://www.youtube.com/embed/Ku52zNnft8k?rel=0&showinfo=0"
                  allowFullScreen
                  title="Video"
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;