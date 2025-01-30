import Video from "../Video/Video";

import "./ContainerAssistirStyle.css";
function ContainerAssistir({ movieId }) {
  return (
    <>
      <section className="container-video">
        <Video movieId={movieId} />
      </section>
    </>
  );
}

export default ContainerAssistir;
