import Button from "./button";

function Nav() {
    return (
        <div className='w-full grid place-items-center text-Neutral-100' >
            <h1 className=' font-bold text-3xl'>Extensions List</h1>
            <div className='flex  justify-around p-4 w-full te'>
                <Button title={'All'} />
                <Button title={'Active'}/>
                <Button title={'Inactive'}/>
            </div>
        </div>
    );
}

export default Nav;