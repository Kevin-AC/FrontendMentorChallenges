function OverviewCard({ Image, ViewsLikes, nViews, Percent, Icon }) {
  const ImageSrc = `/images/icon-${Image}.svg`;
  const ImageIcon = `/images/icon-${Icon}.svg`;
  return (
    <div className="w-64 h-auto p-6 bg-DarkDesaturatedBlue(CardBG) rounded-md flex flex-col gap-5">
      <div className="flex justify-between">
        <p className="text-DesaturatedBlue(Text) font-bold">{ViewsLikes}</p>
        <img src={ImageSrc} alt="icon" />
      </div>
      <div className="flex justify-between">
        <p className="text-4xl font-bold text-White(Text)">{nViews}</p>
        <div className="flex gap-1 items-center font-bold">
          <img src={ImageIcon} alt="PercentIcon" />
          {/* <p className="text-white">{Percent}</p> */}
          <p
            className={`${
              Icon == "down" ? "text-BrightRed" : "text-LimeGreen"
            }`}
          >
            {Percent}
          </p>
        </div>
      </div>
    </div>
  );
}
export default OverviewCard;
