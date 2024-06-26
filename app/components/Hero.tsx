export const Hero = () => {
  return (
    <div className="bg-[radial-gradient(ellipse_20%_90%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))]">
      <div className="flex justify-center rounded-md">
        <video
          src={
            "https://appxcontent.kaxa.in/uploadvideo2/2024-06-26/harkirat_db/2024-06-26-0.31178257236835916.mp4"
          }
          className="rounded md:max-w-[820px]"
          controls={true}
        />
      </div>
    </div>
  );
};
