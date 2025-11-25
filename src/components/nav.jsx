import Button from "./button";

function Nav() {
    return (
        <div className='w-full grid place-items-center text-Neutral-900 dark:text-Neutral-100 pt-8' >
            <h1 className=' font-bold text-4xl'>Extensions List</h1>
            <div className='flex place-content-center gap-4 p-4 w-full te'>
                <Button title={'All'} />
                <Button title={'Active'}/>
                <Button title={'Inactive'}/>
            </div>
        </div>
    );
}

export default Nav;