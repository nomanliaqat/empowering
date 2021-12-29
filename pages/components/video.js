const Video = () => {
  return (
    <div className="row youtube-video video-main">
      <div className="col-sm-12 col-md-6 offset-md-3 offset-lg-3">
        <div className="embed-responsive embed-responsive-4by3 w-100">
          <iframe
            className="embed-responsive-item"
            width="100%"
            height={450}
            src="https://player.vimeo.com/video/546971743?rel=0&muted=1&loop=1&autoplay=1&api=1"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Video;
