import Toggle from "./components/Toggle";
import Card from "./components/Card";
import OverviewCard from "./components/OverviewCard";

function App() {
  return (
    <div className="w-screen h-auto grid place-content-center bg-VeryDarkBlue(BG)">
      <div className="w-375 p-6 grid gap-5">
        <section className=" font-bold grid gap-3 pb-4 border-b border-DesaturatedBlue(Text)">
          <h1 className="text-white text-2xl">Social Media Dashboard</h1>
          <p className="text-DesaturatedBlue(Text)">Total Followwers: 23,004</p>
        </section>
        <Toggle />
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
        <div className=" font-bold my-4">
          <h1 className="text-white text-2xl">Overview - Today</h1>
        </div>
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
  );
}
export default App;
