function Card({ Social, FollowersN, Subscribers, Today, image, icon }) {
  const imageSrc = `/images/icon-${image}.svg`;
  const iconImage = `/images/icon-${icon}.svg`;
  return (
    <div
      className={`borde ${
        image == "facebook"
          ? "bg-Facebook"
          : image == "twitter"
          ? "bg-Twitter"
          : image == "instagram"
          ? "bg-gradient-to-r from-Instagram1 to-Instagram2"
          : "bg-BrightRed"
      }`}
    >
      <div className="CardStyle">
        <div className="flex gap-2">
          <img src={imageSrc} alt="icon" />
          <p className="text-DarkGrayishBlue(Text) dark:text-DesaturatedBlue(Text) font-bold">
            {Social}
          </p>
        </div>
        <p className="text-6xl font-bold text-VeryDarkBlue(Text) dark:text-White(Text)">
          {FollowersN}
        </p>
        <p className="text-center font-light  tracking-[4px] text-DarkGrayishBlue(Text) dark:text-DesaturatedBlue(Text) ">
          {Subscribers}
        </p>
        <div className="flex items-center gap-1 font-bold">
          <img src={iconImage} width="10" alt="icon" />
          <p
            className={` ${
              icon == "down" ? "text-BrightRed" : "text-LimeGreen"
            }`}
          >
            {Today} Today
          </p>
        </div>
      </div>
    </div>
  );
}
export default Card;
