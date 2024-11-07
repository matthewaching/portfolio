const Post = () => {
    return (
        <main className="flex min-h-screen flex-col justify-center p-24 gap-6 leading-7">
            <p>
                {'11/6/2024'}
            </p>
            <p>
                {'Well... it\'s been a while.'}
            </p>
            <p>
                {
                    'About a year has passed since I last touched this portfolio. ' +
                    'To put it simply, life\'s been eventful! The 2024 cliff notes:'
                }
            </p>
            <ul className="list-disc list-inside">
                <li>{'Met my very first professional mentee and now great friend, Gabe'}</li>
                <li>{'Bought a Glove80 ergonomic keyboard and started learning Vim'}</li>
                <li>{'Witnessed the April 8th total solar eclipse in Dallas with Anthony, April, Zack, & Jennifer, the last in the continental US until 8/23/44'}</li>
                <li>{'Moved into an apartment on my own for the very first time in my life'}</li>
                <li>{'Appointed as team lead for my work project\'s Alpha release product teardown'}</li>
                <li>{'Attended React HTX and gave my first presentation in August, talking about React 19'}</li>
                <li>{'Attended Houston Code & Coffee after connecting through React HTX'}</li>
                <li>{'Attended Houston Robotics Group after connecting through Houston Code & Coffee'}</li>
                <li>{'Took some much needed R&R with a 2-week trip to Seattle to visit Zack and Jennifer'}</li>
                <li>{'Went to the 50th Annual Renaissance Festival with friends from HRB'}</li>
                <li>{'Gave my second presentation for React HTX in October, talking about Server-Side React'}</li>
                <li>{'Promoted to Software Development Supervisor!'}</li>
            </ul>
            <p>
                {
                    'So yeah, a lot\'s happened. But with life settling down a bit ' +
                    'and a new chapter of my life starting, I\'m wanting to revisit ' +
                    'this portfolio as a way to more creatively express myself ' +
                    'and get excited about web development again. Will I actually ' +
                    'keep at it this time? I sure hope so.'
                }
            </p>
            <p>
                {
                    'Before I go, I want to record one artistic idea that\'s been ' +
                    'floating in my head for a minute that I\'d like to actualize: ' +
                    'a landing page inspired by my recent hike of Reflection Lake ' +
                    'in Seattle. The page could serve as the entry point for my ' +
                    'portfolio page and depict an in-nature lake scene (art style ' +
                    'undecided, possibly pixelated?) with my greeting message ' +
                    '("Hi, I\'m Matt!") floating above the water. A reflection of ' +
                    'the text would then display along the water surface (might ' +
                    'be doable with CSS but could also just do a synchronized ' +
                    'HTML element). Initials colors would be bright, but when ' +
                    'the page is scrolled, we could gradient into darker shades ' +
                    'to really evoke those "bottom of the ocean" vibes. Some ' +
                    'other brainstormy next-step ideas: a sun to add realism to ' +
                    'reflection and serve as dark mode toggle, plunge/surfacing ' +
                    'animations as page is scrolled, page navigation at the ' +
                    'bottom in the form of bubbles/chests/fish. '
                }
            </p>
            <p>
                {'And with that, thoughts are recorded! I\'ll see you next time.'}</p>
            <p>
                {'-Matt'}
            </p>
        </main>
    );
};

export default Post;