import Button from "./button";

function Nav() {
    return (
        <div className='w-full grid place-items-center text-Neutral-100' >
            <h1 className=' font-bold text-3xl'>Extensions List</h1>
            <div className='flex  justify-around p-4 w-full te'>
                <Button title={'All'} className={'hover:bg-Red-500 hover:text-Neutral-900'}/>
                <Button title={'Active'} className={'hover:bg-Red-500 hover:text-Neutral-900'} />
                <Button title={'Inactive'} className={'hover:bg-Red-500 hover:text-Neutral-900'} />
            </div>
        </div>
    );
}

export default Nav;