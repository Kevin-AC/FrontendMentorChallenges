import React, { useRef } from 'react';
function Toggle() {
  const buttonRef=useRef(null)
  function handleClick() {
    console.log('hola');
  }
  return (
    <section className="flex justify-between my-4">
      <p className="text-DesaturatedBlue(Text) font-bold ">Dark Mode</p>
      <label
        ref={buttonRef}
        onClick={handleClick}
        class="relative inline-flex items-center cursor-pointer"
      >
        <input type="checkbox" value="" class="sr-only peer" />
        <div class="w-12 h-6  peer-focus:outline-none rounded-full peer dark:bg-ToggleBlue peer-checked:after:translate-x-full  after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-VeryDarkBlue(BG) peer-checked:after:bg-White(BG)  after:rounded-full after:h-5 after:w-5 after:transition-all  peer-checked:bg-ToggleL"></div>
      </label>
    </section>
  );
}
export default Toggle;
