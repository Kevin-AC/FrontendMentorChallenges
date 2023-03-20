import React, { useEffect } from "react";
import Card from "./components/Card";
import OverviewCard from "./components/OverviewCard";
import Footer from "./components/Footer";
function App() {
  const [darkToggle, setDarkToggle] = React.useState(true);
  useEffect(() => {
    document.body.classList.toggle("dark", darkToggle);
  }, [darkToggle]);

  return (
    <main
      className={`w-full min-h-screen p-4 grid place-items-center bg-White(BG) dark:bg-VeryDarkBlue(BG) ${
        darkToggle && "dark"
      }`}
    >
      <div className=" max-w-7xl flex flex-col gap-5 ">
        <section className="p-4 md:flex md:justify-between  md:items-center md:px-[100px]">
          <div className=" font-bold grid gap-3 pb-4 ">
            <h1 className="text-VeryDarkBlue(Text) dark:text-white text-2xl xl:text-3xl">
              Social Media Dashboard
            </h1>
            <p className="text-DarkGrayishBlue(Text) dark:text-DesaturatedBlue(Text)">
              Total Followwers: 23,004
            </p>
          </div>

          <div className="flex justify-between items-center md:gap-4 my-4">
            <p className="text-DarkGrayishBlue(Text) dark:text-White(Text) font-bold ">
              Dark Mode
            </p>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                onClick={() => setDarkToggle(!darkToggle)}
                className="sr-only peer"
              />
              <div className="w-12 h-6  peer-focus:outline-none rounded-full bg-gradient-to-r from-ToggleGreen to-ToggleBlue peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-VeryDarkBlue(TopBGPattern) peer-checked:after:bg-White(BG)  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-ToggleL peer-checked:hover:bg-ToggleGreen"></div>
            </label>
          </div>
        </section>

        <div className="flex flex-col gap-5 items-center md:flex-wrap md:flex-row md:justify-center ">
          <Card
            Social="@nathanf"
            FollowersN="1987"
            Subscribers="FOLLOWERS"
            Today="12"
            image="facebook"
            icon="up"
          />
          <Card
            Social="@nathanf"
            FollowersN="1044"
            Subscribers="FOLLOWERS"
            Today="99"
            image="twitter"
            icon="up"
          />
          <Card
            Social="@realnathanf"
            FollowersN="11k"
            Subscribers="FOLLOWERS"
            Today="1099"
            image="instagram"
            icon="up"
          />
          <Card
            Social="Nathan F."
            FollowersN="8239"
            Subscribers="SUBSCRIBERS"
            Today="144"
            image="youtube"
            icon="down"
          />
        </div>

        <div className=" font-bold my-4 md:px-[100px]">
          <h1 className="text-VeryDarkBlue(Text) dark:text-white text-2xl">
            Overview - Today
          </h1>
        </div>
        <div className="flex flex-col gap-5 items-center md:flex-row md:flex-wrap md:justify-center ">
          <OverviewCard
            Image="facebook"
            Icon="up"
            ViewsLikes="Page Views"
            nViews="87"
            Percent="3%"
          />
          <OverviewCard
            Image="facebook"
            Icon="down"
            ViewsLikes="Likes"
            nViews="52"
            Percent="2%"
          />
          <OverviewCard
            Image="instagram"
            Icon="up"
            ViewsLikes="Likes"
            nViews="5462"
            Percent="2257%"
          />
          <OverviewCard
            Image="instagram"
            Icon="up"
            ViewsLikes="Profile Views"
            nViews="52k"
            Percent="1375%"
          />
          <OverviewCard
            Image="twitter"
            Icon="up"
            ViewsLikes="Retweets"
            nViews="117"
            Percent="303%"
          />
          <OverviewCard
            Image="twitter"
            Icon="up"
            ViewsLikes="Likes"
            nViews="507"
            Percent="553%"
          />
          <OverviewCard
            Image="youtube"
            Icon="down"
            ViewsLikes="Likes"
            nViews="107"
            Percent="19%"
          />
          <OverviewCard
            Image="youtube"
            Icon="down"
            ViewsLikes="Total Views"
            nViews="1407"
            Percent="12%"
          />
        </div>
      </div>
      <Footer />
    </main>
  );
}
export default App;
