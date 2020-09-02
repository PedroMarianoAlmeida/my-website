import Layout from "../../../components/all-pages/Layout";

import { Col } from 'reactstrap'

const FreeContent = () => {
    return (
        <Layout seo={{ title: "Article - Free Dev Content | Pedro Programmer", description: "A compile of free content about programming", author: "Pedro Almeida" }}>

            <Col xs='12' className="mt-2 d-flex justify-content-center">
                <h1 className="text-center">Where to start your journey to learn Web Development?</h1>
            </Col>

            <Col xs='12' className="d-flex justify-content-center">
                <h4 className="text-center">(without spend money)</h4>
            </Col>

            <Col xs='12' className='mt-2'>
                <h2>Why do this and not go direcly to a formal study?</h2>
                <p>For those who use the technology, it looks like magic how an app or website work, so create something like this should be very excitement, right?</p>
                <p>In reality, programming demands a lot of patience, organization, study, research, and resilience. Besides the tech involved in work is constantly changing, so to keep your skills useful, the programmer needs to be in a constant process of relearning.</p>
                <p>In my humble opinion, all this effort pays off. Because I think it is awesome making part of the field who are level up the quality of life of all humanity. But to like the technology is totally different to like to actually programming.</p>
                <p>So... when the subject is Programming,  I do not recommend diving headfirst, but cautiously entering with one foot at a time</p>

                <h2>The Material </h2>
                <p>After this "Disclaimer", let jump to the fun part!</p>

                <h6 className="mt-5">Choose a study field:</h6>
                <ul>
                    <li>
                        <strong><a href="https://careerkarma.com/" target="_blank">Carrer Karma</a></strong>: 
                        <p>In section "Programs - Career Path" they explain many of the fields englobed in this profession generically called "Programmer". There you can know a notion of what with one does. According your advance in studies, the entire website will become relevant for you.</p>
                    </li>

                    <li>
                        <strong><a href="https://online-learning.harvard.edu/course/cs50-introduction-computer-science" target="_blank">CS50</a></strong>:
                        <p>It's an Introduction to Computer Science course ministered by Harvard... and it's free and available online (they charge only if you want to get certificated of conclusion)</p>
                        <p>In this course, they cover many aspects and different program languages</p>
                        <p>In their youtube channel, I found <a href="https://www.youtube.com/watch?v=zFenJJtAEzE&list=PLhQjrBD2T383Xfn0zECHrOTpfOSlptPAB" target="_blank">this complete playlist</a>, but there is a lot more of material available in theirs website and youtube channel</p>
                    </li>
                </ul>

                <h6 className="mt-5">Mobile Apps</h6>
                <ul>
                    <li>
                        <strong><a href="https://getmimo.com/" target="_blank">Mimo</a></strong>: 
                        <p>It is a good front door to Web Development</p>
                        <p>Your content is very well organized and don't allow to jump steps (it's a common mistake of new programmers try to do this and gets frustrated later)</p>
                    </li>
                    <li>
                        <strong><a href="https://www.sololearn.com/" target="_blank">Sololearn</a></strong>:
                        <p>It is another excellent app, and your content doesn't limit in Web Development, covering several programming languages and complementary technologies.</p>
                        <p>Besides the theoretical modules, they have a challenge mode, then you have to write the code to fulfill the requirements. And they have a question and answer mode too where you have to compete with other students, it is really fun.</p>
                    </li>
                </ul>

                <h6 className="mt-5">Code practice</h6>
                <ul>
                    <li>
                        <strong><a href="https://app.codesignal.com/" target="_blank">Codesignal</a></strong>: 
                        <p>It is like the "challenge mode" of Sololearn, but way too harder (begins easy but escalates quickly). That platform is used to job interview, so be capable of making its exercises is a really good sign. </p>
                    </li>

                    <li>
                        <strong><a href="https://www.hackerrank.com/" target="_blank">Hacker Rank</a></strong>: 
                        <p>It is another website for a code challenge (used in job interviews too). They have a good way to keep the user engaged with everyday code programs. So they release one theoretical content and a challenge related to these subjects for a sequential number of days.</p>
                    </li>
                </ul>

                <h6 className="mt-5">Time to dig deep in Web Development</h6>
                <p>If you survive to all the content above, is a strong indicator that you are really committed to becoming a Profissional Programmer, congrats!</p>
                <ul>
                    <li>
                        <strong><a href="https://www.freecodecamp.org/">freeCodeCamp</a></strong>
                        <p>It is simply a complete online free bootcamp, I need to say anything else? =D</p>                    
                    </li>
                    <li>
                        <strong><a href="https://scrimba.com/">Scrimba</a></strong>
                        <p>Their courses utilize a methodology that I didn't see elsewhere. Looks like a video (with the buttons play and pause, the voice of instructor explaining, etc) but anytime you want you can pause the video and change the code on the screen and test what you want. Then you play again and everything comes back to normal. It is really impressive.</p>
                    </li>
                    <li><strong>Note:</strong> Don't abandon the apps and challenges that you didn't finish (and revisit sometimes what you already studied to help in fixed in memory)</li>
                </ul>   

                <h6 className="mt-5">None of the category above, but totally worth it</h6>
                <ul>
                    <li>
                        <strong><a href="https://www.youtube.com/channel/UCW5YeuERMmlnqo4oq8vwUpg">Net Ninja</a></strong>
                        <p>If you want to learn while building fun and practical things, the Net Ninja is an excellent youtube channel for you, but enter with focus and be careful to not get lost among all technologies, libraries e frameworks playlists.</p>
                    </li>
                    <li>
                        <strong><a href="https://github.com/danistefanovic/build-your-own-x">Buid your own X</a></strong>
                        <p>Its a repository with several materials with explaining how to build a lot of things (from Game to Cryptocurrency)</p>
                    </li>

                    <li>
                        <strong>Koan Path</strong>
                        <p>It is some archives that you download and runs in your text editor.</p>
                        <p>The files have fields to fill with the correct value and test if it's correct. These tests encompass a lot of concepts about the referred programming language.</p>    
                        <p>Here are the <a href="https://github.com/liammclennan/JavaScript-Koans">JavaScript Koans</a> and <a href="http://rubykoans.com/">Ruby Koans</a></p>
                    </li>
                </ul>

                <h2>A shortcut</h2>
                <p>All this material above is about free self-learning in programming (in some of the indications there are paid materials, but only if you liked the free material and think it is worth it). But maybe in the middle of the way you want to speed up the process, or do you tried to make something but doesn't work and you don't know anyone to take a look and see where did you go wrong. It is totally normal.</p>
                <p>For these cases exists all the paid content. They can provide:</p>
                <ul>
                    <li>Regular classes where you can ask something and the professor answer immediately</li>
                    <li>Facilitates to meet other programmers at the same level that you to talk about code (and one learn with the other)</li>
                    <li>Mentors to help you and evaluate your code skills.</li>
                    <li>Facilitates your network</li>
                </ul>

                <p>So paid courses are a shortcut in this journey. If you are considering this possibility <strong>it's time to go back to <a href="https://careerkarma.com/" target="_blank">Carrer Karma</a> and research the perfect Bootcamp for you!</strong></p>

            </Col>


        </Layout>
    )
}

export default FreeContent;