export default function ContentVideo() {
  return (
    <div className="flex shrink-0 h-[calc(100vh-110px-104px)] rounded-[20px] overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src="https://www.youtube.com/embed/tYyPdH32faE?si=heerM3KnIDqdfrZJ"
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowfullscreen
      ></iframe>
    </div>
  );
}
