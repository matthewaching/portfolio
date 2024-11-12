import MainNav from "./MainNav/MainNav";

const Home = () => {
    return (
        <main className="flex text-5xl min-h-screen flex-col items-center justify-center">
            <div id='landing-frame' className='h-dvh w-dvw flex flex-col items-center justify-center'>
                <span className='pb-2'>{'Hi, I\'m Matt!'}</span>
                <div className='relative pb-2 scale-y-[-1]' id='reflection'>
                    <span>{'Hi, I\'m Matt!'}</span>
                    <div className='fixed top-0 left-0 w-full h-full bg-gradient-to-b via-inherit to-[rgba(0,0,0,0)]' />
                </div>
                <span className='mt-64'>WIP - Scroll down for now</span>
            </div>
            <MainNav />
        </main>
    );
};

export default Home;