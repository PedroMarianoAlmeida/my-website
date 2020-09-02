import Layout from "../../../components/all-pages/Layout";

import { Col } from 'reactstrap'

const Projects = () => {
    return (
        <Layout seo={{ title: "Article - Functions | Pedro Programmer", description: "An article about functions in JavaScript for begginers", author: "Pedro Almeida" }}>

            <Col xs='12' className="mt-2 d-flex justify-content-center">
                <h1 className="text-center">Functions in JavaScript</h1>
            </Col>

            <Col xs='12' className="my-2">
                <h2>Here's what you need to know to understand this article:</h2>
                <ul>
                    <li>Fundamentals of JavaScript (variables, operator, etc)</li>
                    <li>Loops and fork (if, for, while, etc)</li>
                    <li>Fundamentals of HTML (and how to work with HTML and JavaScript together at browser)</li>
                </ul>
            </Col>

            <Col xs='12' >
                <h2 id="theory">What are functions?</h2>
                <p className="text-justify">Functions are a piece of code that doens't follow the regular flow of the program (top to bottom). When the compiler sees a function, all code inside it is ignored and the program starts the reading again right after the end of the function.</p>
                <p>But when you want this code to run, you have to call it (or invoke, it is the same thing). Then the program enters the function and executes like a regular code, and after it ends, the program comes back to the line of the calling.</p>
                <h2>Practice time:</h2>
                <p>In this exercise, my goal is to dynamically change the text in HTML, I strongly recommend that you write the code in our own text editor and test each step of the process (the new parts of code will be in bold).</p>

                <ul>
                    <li>First lets write some inicial code to work:
                        <div className="container border border-secondary d-bolck m-4 bg-light">
                            <code><strong>
                                <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">My first text</h1>'}</div>

                                    <div className="ml-3"> {'<script>'}

                                        <div className="ml-3 my-2">let text = document.getElementById("my-text");</div>
                                        {'</script>'} </div>
                                    {'</body>'} </div>
                                    </strong>
                            </code>
                        </div>
                    </li>


                    <li>Now if I want to change this text, I can write just one more line of code

                        <div className="container border border-secondary d-bolck m-4 bg-light">
                            <code>
                                <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">My first text</h1>'}</div>

                                    <div className="ml-3"> {'<script>'}

                                        <div className="ml-3 mt-2">let text = document.getElementById("my-text");</div>
                                        <div className="ml-3 mb-2"><strong>text.innerHTML = "Modified Text";</strong></div>
                                        {'</script>'} </div>
                                    {'</body>'} </div>
                            </code>
                        </div>
                    </li>

                    <li><p>Let's do the same thing using a function?</p>
                        <p>First I will wrap the "modified text" command in a function</p>

                        <div className="container border border-secondary d-bolck m-4 bg-light">
                            <code>
                                <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">My first text</h1>'}</div>

                                    <div className="ml-3"> {'<script>'}

                                        <div className="ml-3 my-2">let text = document.getElementById("my-text");</div>
                                        <div className="ml-3 mt-2"><strong>{'function changeText(){'}</strong>
                                            <div className="ml-3">text.innerHTML = "Modified Text";</div>
                                            <strong>{'}'}</strong></div>
                                        {'</script>'} </div>
                                    {'</body>'} </div>
                            </code>
                        </div>
                    </li>

                    <li><p>Did you test? What happened?</p>
                        <p>Exactly, nothing happened... do you know why? <a href="#theory">Click here</a> to go back to the explanation of the function and try to figure out</p>
                        <p>As you may notice, I write the function but I never call it, so let's do this right now:</p>

                        <div className="container border border-secondary d-bolck m-4 bg-light">
                            <code>
                                <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">My first text</h1>'}</div>

                                    <div className="ml-3"> {'<script>'}

                                        <div className="ml-3 my-2">let text = document.getElementById("my-text");</div>
                                        <div className="ml-3 mt-2">{'function changeText(){'}
                                            <div className="ml-3">text.innerHTML = "Modified Text";</div>
                                            {'}'}</div>
                                        <div className="ml-3 my-2"><strong>changeText()</strong></div>
                                        {'</script>'} </div>
                                    {'</body>'} </div>
                            </code>
                        </div>
                    </li>

                    <li><p>Yes, it is that simple... to call a function you have to write its name and one pair of parentheses "()" right after. Now everything is working again.</p>
                        <p>Theses parenthesis also serve to enter with some data to use inside the function. It is called "arguments" <small>(actually, when the function is written we determine "Arguments" and when I call it and pass data the correct name is "Parameter", but this is not relevant right now)</small>.</p>
                        <p>Let's pass the new text of the element as an argument.</p>

                        <div className="container border border-secondary d-bolck m-4 bg-light">
                            <code>
                                <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">My first text</h1>'}</div>

                                    <div className="ml-3"> {'<script>'}

                                        <div className="ml-3 my-2">let text = document.getElementById("my-text");</div>
                                        <div className="ml-3 mt-2">{'function changeText('}<strong>newText</strong>{'){'}
                                            <div className="ml-3">text.innerHTML = <strong>newText</strong>;</div>
                                            {'}'}</div>
                                        <div className="ml-3 my-2">changeText(<strong>"My new text"</strong>)</div>
                                        {'</script>'} </div>
                                    {'</body>'} </div>
                            </code>
                        </div>
                    </li>

                    <li><p>Pretty awesome, isn't it? Now any text inside the parentheses when the function is called is inserting in the place.</p>
                        <p>And even the element itself can be a argument.</p>

                        <div className="container border border-secondary d-bolck m-4 bg-light">
                            <code>
                                <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">My first text</h1>'}</div>

                                    <div className="ml-3"> {'<script>'}

                                        <div className="ml-3 my-2">let text = document.getElementById("my-text");</div>
                                        <div className="ml-3 mt-2">{'function changeText('}<strong>element,</strong>{' newText){'}
                                            <div className="ml-3"><strong>element</strong>.innerHTML = newText;</div>
                                            {'}'}</div>
                                        <div className="ml-3 my-2">changeText(<strong>text</strong>, "My new text"<strong>)</strong></div>
                                    {'</script>'} </div>
                                {'</body>'} </div>                        
                            </code>
                        </div>
                    </li>  
                </ul>

                <h2 className="mt-4">Why you should use functions?</h2>
                <p className="text-justify">In this particular case, maybe it looks like the code became more complex after inserting a function, so why use it?</p>               
                <p>Better than explain, let me show it to you:</p>
                <ul>
                <li>
                        <p>Now that you understand how functions work, let's increase the complexity of the code and do the same thing we did before</p>
                        <p>But this time there are two elements, and we will change two properties in each one</p>
                        
                        <div className="container border border-secondary d-bolck m-4 bg-light">
                            <code>
                            <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">My first text</h1>'}</div>
                                    <div className="ml-3 mb-2"><strong>{'<h2 id="my-other-text">My other text</h2>'}</strong></div>                       
                                        
                                    <div className="ml-3"> {'<script>'}
                                        <div className="ml-3 mt-2">let text = document.getElementById("my-text");</div>
                                        <div className="ml-3 mb-2"><strong>let otherText = document.getElementById("my-other-text");</strong></div>
                                        <div className="ml-3 mb-2">text.innerHTML = "First: Blue Text";</div>
                                        <div className="ml-3 mb-2"><strong>text.style.color = "blue";</strong></div>
                                        <div className="ml-3 mb-2"><strong>otherText.innerHTML = "Second: Red Text";</strong></div>
                                        <div className="ml-3 mb-2"><strong>otherText.style.color = "red";</strong></div>
                                        {'</script>'} </div>
                                {'</body>'} </div>                       
                            </code>
                        </div>                        
                    </li>


                <li>Now using function with arguments</li>
                    <div className="container border border-secondary d-bolck m-4 bg-light">
                        <code>
                        <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">My first text</h1>'}</div>
                                    <div className="ml-3 mb-2">{'<h2 id="my-other-text">My other text</h2>'}</div>                       
                                    
                                    <div className="ml-3"> {'<script>'}
                                    <div className="ml-3 mt-2">let text = document.getElementById("my-text");</div>
                                    <div className="ml-3 mb-2">let otherText = document.getElementById("my-other-text");</div>
                                    
                                    <strong>
                                            <div className="ml-3 my-2">{'function changeTextAndColor(element, newText, color){'}
                                                <div className="ml-3 mt-2">element.innerHTML = newText;</div>
                                                <div className="ml-3 mt-2">element.style.color = color;</div>
                                            {'}'}</div>                                    
                                        
                                        <div className="ml-3 mb-2">changeTextAndColor(text, "First: Blue Text", "blue");</div>
                                        <div className="ml-3 mb-2">changeTextAndColor(otherText, "Second: Red Text", "red");</div>
                                    </strong>
                                    {'</script>'} </div>
                                {'</body>'} </div>                      
                        </code>
                    </div>

                    <li>Which code do you think is easier to read and understand... and change? And if there were more actions to do or more elements to contemplate, which code would became the biggest?</li>
                    </ul>

                    <h2 className="mt-4">Conclusion</h2>
                <p>Functions are a powerful tool for many purposes. Just to name a few:</p>
                <ul>
                    <li>Avoid repetitions on your code (this is the DRY principle - Don't repeat yourself - you will hear a lot this expression)</li>
                    <li>Separate one part of your code to do a specific task, so if you have any problems in this specific task, you will know where to find the problem (this is called "Debugging" - another term very used)</li>
                    <li>And if this part of the code is working you don't have to worry HOW this function works anymore. You will just call it and expect it to do what you want (this is called "Abstraction" - and guess what? Yes... a term largely used in programming)</li>
                    <li>In web development, many times one function is called when the user does something in the browser. Do you want to see an example?
                        <div className="container border border-secondary d-bolck m-4 bg-light">
                            <code>
                            <div>{'<body>'}
                                    <div className="ml-3 mb-2">{'<h1 id="my-text">Original text</h1>'}</div>
                                    <div className="ml-3 mb-2">{'<button onclick="changeText()">Original text</button>'}</div>                      
                                        
                                    <div className="ml-3"> {'<script>'}
                                        <div className="ml-3 mt-2">let text = document.getElementById("my-text");</div>                                        
                            
                                            <div className="ml-3 my-2">{'function changeText(){'}
                                                <div className="ml-3 mt-2">text.innerHTML = newText;</div>
                                           {' }'}</div>                                                                          
                              {'</script>'} </div>
                                {'</body>'} </div>                       
                            </code>
                        </div>  
                    </li>
                </ul>
                <p className='mt-3'><strong>This is only an introduction to the theme, functions are a key piece in JavaScript, we will dig more into this in future articles.</strong></p>
            </Col>



        </Layout >
    );
}

export default Projects;