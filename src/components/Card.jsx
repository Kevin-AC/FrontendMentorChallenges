function Card({ price, plan, storage, users, send }) {
  
  
  return (
    <div
      className={` w-[328px] h-[440px] px-6 py-6 rounded-xl flex flex-col justify-center gap-7
      ${
        plan == "Professional"
          ? "bg-gradient-to-t from-LinearGradient2 to-LinearGradient1 xl:h-[480px] "
          : "bg-white "
      }
      `}
    >
      <p
        className={`text-base ${
          plan == "Professional"
            ? "text-VeryLightGrayishBlue"
            : "text-GrayishBlue"
        }`}
      >
        {plan}
      </p>
      <div className="flex items-center justify-center">
        <p className={`text-3xl ${
          plan == "Professional"
            ? "text-VeryLightGrayishBlue"
            : "text-DarkGrayishBlue"
        }`}>$</p>
      <p
        className={`text-6xl ${
          plan == "Professional"
            ? "text-VeryLightGrayishBlue"
            : "text-DarkGrayishBlue"
        }`}
      >
        {price}
      </p>

      </div>
      
      <div
        className={`border-t border-b py-1 ${
          plan == "Professional"
            ? "text-VeryLightGrayishBlue"
            : "text-GrayishBlue"
        } `}
      >
        <p className=" border-b py-4 ">{storage} Storage</p>
        <p className=" border-b py-4">{users} Users Allowed</p>
        <p className=" py-4">Send up to {send} GB</p>
      </div>
      <button
        className={`uppercase rounded-lg h-12 hover:from-white hover:to-white hover:text-LinearGradient2 hover:border border-GrayishBlue  ${
          plan == "Professional"
            ? "bg-white hover:bg-[hsl(237.3,64.16%,66.08%)] border-white text-LinearGradient2 hover:text-white"
            : "bg-gradient-to-r from-LinearGradient1 to-LinearGradient2 text-VeryLightGrayishBlue"
        }`}
      >
        Learn More
      </button>
    </div>
  );
}
export default Card;
