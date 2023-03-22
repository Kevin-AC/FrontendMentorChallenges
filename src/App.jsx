import React from "react";
import Card from "./components/Card";
import Footer from "./components/Footer";
function App() {
  return (
    <div className="w-full bg-VeryLightGrayishBlue grid place-content-center min-h-screen relative overflow-hidden">
      <img
        src="/images/bg-top.svg"
        className="absolute -top-11 -right-44 z-0 xl:-right-0"
        alt=""
      />
       <img
        src="/images/bg-bottom.svg"
        className="absolute bottom-0 left-0 z-0 xl:-right-0"
        alt=""
      />
      <div className="w-full h-auto mt-14 p-2 z-10 text-center flex flex-col justify-center items-center gap-9 ">
        <h1 className="text-4xl text-GrayishBlue font-bold">Our Pricing</h1>
        <label
          for="switch"
          className="relative cursor-pointer inline-flex items-center gap-4 "
        >
          <p className="text-LightGrayishBlue">Annually</p>
          <input
            id="switch"
            type="checkbox"
            aria-label="toggle"
            className="sr-only peer "
          />
          <span className="toggle"></span>
          <p className="text-LightGrayishBlue">Monthly</p>
        </label>

        <section className="flex flex-col xl:flex-row gap-4 xl:gap-1 xl:items-center">
          <Card
            price={199.99}
            plan="Basic"
            storage="500 GB"
            users="2"
            send="3"
          />
          <Card
            price={249.99}
            plan="Professional"
            storage="1 TB"
            users="5"
            send="10"
          />
          <Card
            price={399.99}
            plan="Master"
            storage="2 TB"
            users="10"
            send="20"
          />
        </section>
        <Footer />
      </div>
      
    </div>
  );
}
export default App;
