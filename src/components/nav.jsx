import Button from "./button";

function Nav({onAllClick,onActiveClick,onInactiveClick}) {
    return (
        <div className=' w-full md:w-2/3 flex flex-col lg:flex-row gap-5 justify-between items-center text-Neutral-900 dark:text-Neutral-100' >
            <h1 className=' font-bold text-4xl text-center w-auto'>Extensions List</h1>
            <div className='flex place-content-center gap-4  w-auto'>
                <Button onClick={onAllClick} title={'All'} />
                <Button onClick={onActiveClick} title={'Active'}/>
                <Button onClick={onInactiveClick} title={'Inactive'}/>
            </div>
        </div>
    );
}

export default Nav;