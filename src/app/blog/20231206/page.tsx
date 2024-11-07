const Post = () => {
    return (
        <main className="flex min-h-screen flex-col justify-center p-24 gap-6 leading-7">
            <p>
                12/6/2023
            </p>
            <p>
                Look at that, I&apos;m back here already. Even though it&apos;s
                just a small 2-day streak, there&apos;s definitely a feeling of
                accomplishment with following through on a consistency goal.
                Hopefully, I can keep this train going for a while!
            </p>
            <p>
                So, let&apos;s start some ideas about this blog. I&apos;ve
                already decided on two large categories for posts:
                refined/edited and casual/unfiltered. The former will likely be
                more tech-related, like thoroughly researched programming
                concepts and personal projects that have come to fruition,
                whereas the latter will be more suitable for just getting ideas
                down on paper and sharing more personal thoughts and anecdotes.
                These two broad categories, in combination, should give me
                enough freedom to write about essentially any topic I want
                without having to worry about tone or relevance.
            </p>
            <p>
                Speaking of topics, while this website will act as my dev
                portfolio and therefore showcase mainly programming-related
                topics, I do want to be able to write about things that
                aren&apos;t inherently technology in nature - for instance, bits
                of wisdom I learn on the job, personal methods I find to
                achieve better work-life balance, or random exciting bits of
                dev news I hear about through media channels. This definitely
                warrants some kind of tagging system in order to organize the
                posts and have users be able to filter on certain topics, so
                that&apos;ll likely be one of the first actual code
                implementations I write for this blog.
            </p>
            <p>
                Now, the textbook dev implementation would be to create some
                CRUD-like system that stores these posts in a database and
                fetches them via an API. However, as I described in my previous
                post, I&apos;m doing my best to avoid over-implementation of
                technologies and have this portfolio be as lightweight and
                focused on frontend interaction as possible. At the end of the
                day, there realistically won&apos;t really be any need for user
                interaction with the data of these posts, so storing each one as
                a separate routed component will simply be easier and cleaner.
                As I also plan (maybe a bit optimistically) to have more
                interactive formatting with these posts as well, beyond the
                standard “text-picture-caption-text” style you see with other
                tech blog sites like Medium, going CRUD-less will allow for a
                higher level of flexibility. Like how cool would it be to have
                posts on special occasions be animated to suit the occasion, or
                have some posts interact with mouse events, or even just have
                text formatting that differs from your typical middle column +
                infinite scroll variety? These are ideas that would be much
                harder if I were just retrieving fetched data and slapping it
                into a generic blog.tsx.
            </p>
            <p>
                That all being said, I should learn how to walk before I try to
                run. At time of writing, the website has only just been
                bootstrapped with create-next-app, and these posts exist purely
                inside a Google Docs folder. The priority at the moment is just
                getting something up and running. Though, whatever
                implementation ends up happening, I hope that the goals
                I&apos;ve set out for myself have been achieved by the time you,
                whoever you may be, are reading this. Let me know how
                I&apos;ve done!
            </p>
            <p>
                That&apos;ll be it for now. See you soon!</p>
            <p>
                -Matt
            </p>
        </main>
    );
};

export default Post;