function Card({ Social, FollowersN, Subscribers, Today, image, icon }) {
  const imageSrc = `./src/images/icon-${image}.svg`;
  const iconImage = `./src/images/icon-${icon}.svg`;
  return (
    <div className="w-326 h-218 rounded-md bg-DarkDesaturatedBlue(CardBG) border-t-4 border-Facebook flex flex-col items-center justify-center gap-4 ">
      <div className="flex gap-2">
        <img src={imageSrc} alt="icon" />
        <p className=" text-DesaturatedBlue(Text) font-bold">{Social}</p>
      </div>
      <p className="text-6xl font-bold text-White(Text)">{FollowersN}</p>
      <p className="text-center font-light  tracking-[4px] text-DesaturatedBlue(Text) ">
        {Subscribers}
      </p>
      <div className="flex items-center gap-1 font-bold">
        <img src={iconImage} width="10" alt="icon" />
        <p
          className={` ${icon == "down" ? "text-BrightRed" : "text-LimeGreen"}`}
        >
          {Today} Today
        </p>
       
      </div>
    </div>
  );
}
export default Card;
