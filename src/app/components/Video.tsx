

export default function Video() {
  return (
    <div className="container mx-auto px-4 relative">
      <div className="w-full aspect-w-16 aspect-h-9">
        <iframe
          className="w-full aspect-video md:aspect-aspect-w-16 aspect-h-9 pt-6"
          src="https://www.youtube.com/embed/zgovnOsxnR4?autoplay=1&mute=1&loop=1"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}



