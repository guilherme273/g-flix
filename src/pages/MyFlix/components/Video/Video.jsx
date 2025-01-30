import "./VideoStyle.css";
function Video({ movieId }) {
  return (
    <div className="div-video">
      <iframe
        width="1000"
        height="500"
        src={`https://www.youtube.com/embed/${movieId}`}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}

export default Video;
