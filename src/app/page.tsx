import MainNav from "./MainNav/MainNav";

const Home = () => {
    return (
        <main className="flex text-5xl min-h-screen flex-col items-center justify-center">
            <div id='landing-frame' className='h-dvh w-dvw flex flex-col items-center justify-center'>
                <span>{'Hi, I\'m Matt!'}</span>
                <span className='mt-64'>WIP - Scroll down for now</span>
            </div>
            <MainNav />
        </main>
    );
};

export default Home;