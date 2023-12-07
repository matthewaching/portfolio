import Image from 'next/image'

const Post = () => {
    return (
        <main className="flex min-h-screen flex-col justify-center p-24 gap-6">
            <p className="leading-8">
                12/5/2023
            </p>
            <p className="leading-8">
                Hello world!
            </p>
            <p className="leading-8">
                I have decided, by some random burst of motivation, to redo my
                entire portfolio page and blog after a much-needed hiatus. I was
                largely unhappy with the way my last portfolio page turned out;
                it definitely served its purpose as my first website but felt
                more like an exercise in Astro rather than a representation of
                me. That&apos;s why, going into this new website, the first
                decision I&apos;ve made is to put the app ahead of the tech and not try to force a certain tech stack.
            </p>
            <p className="leading-8">
                With this in mind, my new portfolio website is only going to
                have one guarantee: it will be built on Next.js. This is driven
                by my love for the framework and the transformative effect it
                has on the React developer experience, and so it is only fitting
                that a website that is meant to be a portrayal of my developer
                self uses the technology I have the most passion for.
            </p>
            <p className="leading-8">
                On the flip side of this, there are many technologies this
                website will likely not use. There will probably not be a
                dedicated backend, outside of utilizing Vercel Serverless
                Functions and the API directory of Next.js. Given the fact that
                a portfolio is almost entirely about user interaction and data
                display, this makes sense and, in turn, means that there will
                probably be no CRUD implementation or database layer of any sort
                (we&apos;re going MPA style!), no authentication, no complex
                GraphQL or tRPC layer... You get the idea.
            </p>
            <p className="leading-8">
                Instead, these will saved be for other personal projects, where
                their implementation will be more intentional and appropriate.
                While I still aim to realize the many web app ideas I have
                floating around in my head, I think it would be a good idea for
                me to also get in the habit of spinning up projects on the fly
                in order to sandbox and experiment with technologies I may be
                unfamiliar with and interested in. This will allow me to create
                scenarios that let the technologies in question shine while also
                having the side benefit of the code being easily replicable in
                other projects (such as my portfolio).
            </p>
            <p className="leading-8">
                THAT being said, &quot;do more projects&quot; is... ambitious.
                As much as I love coding, I also love my many other hobbies (
                climbing, cooking, gaming, cello-ing, etc ) and want to dedicate
                portions of my life to those as well. I tend to be very
                &quot;all-or-nothing&quot; with my motivations, so perhaps
                it&apos;d be a good personal exercise for me to dial down my
                expectations and lower the hypothetical commitment this
                project(s) will take - maybe something like 1 commit/day will
                suffice, no matter how small. In addition, getting better at
                asynchronous idea recording (which really is just a big brain
                way to say &quot;jot stuff down in notes on phone&quot;) will
                make it a lot easier to be able to sit down as time permits and
                jump straight into coding rather than have to try to
                spontanteously brainstorm ideas.
            </p>
            <p className="leading-8">
                As a final note to this inaugural post, I will be approaching
                this whole blog idea with a certain amount of intentionality,
                namely by separating my usual heavily-proofread and polished
                report-style posts from these stream-of-consciousness personal
                blog posts. By purposefully accomodating this sort of content,
                I&apos;ll be able to see a much more unfiltered portrayal of the
                thoughts going on in my head, not too much unlike journaling.
                Also, being able to push out content without needing to sit here
                and think too much about presentation will help reduce the
                amount of time this overall process takes. Time is money, after
                all.
            </p>
            <p className="leading-8">
                If you&apos;ve made it this far, thank you for stopping by and
                sticking around! While this whole blog is meant to be mostly a
                motivational thing for myself, I hope that my words and insight
                were of some interest to you.
            </p>
            <p className="leading-8">
                See you around!
            </p>
            <p className="leading-8">
                -Matt
            </p>
        </main>
    );
};

export default Post;