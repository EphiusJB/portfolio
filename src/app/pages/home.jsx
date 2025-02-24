import styles from './home.module.css'

export default function Landing(props) {
    

    return (
        <div className='body'>
            
    <main className={styles.main}>
        <div className={styles.left}>
            <div className={styles.intro}>
                <h1>Ephius Mutambo</h1>
                <h3>Full Stack Developer</h3>
                <p>I specialise in frontend and backend development for complex scalable web apps</p>

            </div>
            <div className={styles.menu}>
                <a href="#about" className={styles.menu_item}>
                    <span className={styles.span}></span> <p>ABOUT</p>
                </a>
                <a href="#experience" className={styles.menu_item}>
                    <span className={styles.span}></span> <p>EXPERIENCE</p>
                </a>
                <a href="#project" className={styles.menu_item}>
                    <span className={styles.span}></span> <p>PROJECTS</p>
                </a>
            </div>
            <div className={styles.links}>
                <a href="#" className={styles.social}>
                    <svg viewBox="0 0 20 20" version="1.1"  xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink">
    
                        <title>github [#142]</title>
                        <desc>Created with Sketch.</desc>
                        <defs>
                    
                    </defs>
                        <g id="Page-1" stroke="none" stroke-width="1" fill-rule="evenodd">
                            <g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" >
                                <g id="icons" transform="translate(56.000000, 160.000000)">
                                    <path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]">
                    
                    </path>
                                </g>
                            </g>
                        </g>
                    </svg>
                </a>
                <a href="#" className={styles.social}>
                    <svg fill="#000000" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" 
	 viewBox="-143 145 512 512" xmlSpace="preserve">
<g>
	<path d="M329,145h-432c-22.1,0-40,17.9-40,40v432c0,22.1,17.9,40,40,40h432c22.1,0,40-17.9,40-40V185C369,162.9,351.1,145,329,145z
		 M339,617c0,5.5-4.5,10-10,10h-432c-5.5,0-10-4.5-10-10V185c0-5.5,4.5-10,10-10h432c5.5,0,10,4.5,10,10V617z"/>
	<rect x="-8.5" y="348.4" width="49.9" height="159.7"/>
	<path d="M177.7,346.9c-28.6,0-46.5,15.6-49.8,26.6v-25.1H71.8c0.7,13.3,0,159.7,0,159.7h56.1v-86.3c0-4.9-0.2-9.7,1.2-13.1
		c3.8-9.6,12.1-19.6,27-19.6c19.5,0,28.3,14.8,28.3,36.4v82.6H241v-88.8C241,369.9,213.2,346.9,177.7,346.9z"/>
	<path d="M15.4,273c-18.4,0-30.5,11.9-30.5,27.7c0,15.5,11.7,27.7,29.8,27.7h0.4c18.8,0,30.5-12.3,30.4-27.7
		C45.1,284.9,33.8,273,15.4,273z"/>
</g>
</svg>
                </a>
                <a href="#" className={styles.social}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.9999 5.9246C21.2644 6.25051 20.4744 6.47071 19.6437 6.57025C20.4911 6.06289 21.1411 5.25782 21.4477 4.29948C20.6549 4.76984 19.7767 5.1116 18.8422 5.29481C18.0935 4.49855 17.0277 4 15.8474 4C13.5819 4 11.7445 5.8374 11.7445 8.10464C11.7445 8.42526 11.7815 8.73707 11.8502 9.03832C8.43877 8.86656 5.41666 7.23263 3.39252 4.75046C3.04019 5.35823 2.8376 6.06289 2.8376 6.81335C2.8376 8.23677 3.56252 9.4937 4.66267 10.2292C3.98972 10.2072 3.35729 10.0231 2.80413 9.71567V9.76852C2.80413 11.7565 4.21786 13.4151 6.09577 13.7921C5.75049 13.8855 5.38847 13.9348 5.015 13.9348C4.75075 13.9348 4.49267 13.9102 4.24252 13.8626C4.76485 15.4921 6.27987 16.6795 8.07587 16.7112C6.67095 17.8122 4.90137 18.4684 2.97942 18.4684C2.64823 18.4684 2.32144 18.449 1.99994 18.4112C3.8162 19.5765 5.97246 20.2547 8.28903 20.2547C15.8377 20.2547 19.9644 14.0026 19.9644 8.58029C19.9644 8.40412 19.9599 8.2262 19.952 8.05003C20.7536 7.47045 21.4494 6.74905 21.9982 5.92724L21.9999 5.9246Z" stroke="#000000" stroke-linejoin="round"/>
                        </svg>
                </a>
                <a href="#" className={styles.social}>
                    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M12 18C15.3137 18 18 15.3137 18 12C18 8.68629 15.3137 6 12 6C8.68629 6 6 8.68629 6 12C6 15.3137 8.68629 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16Z" />
                        <path d="M18 5C17.4477 5 17 5.44772 17 6C17 6.55228 17.4477 7 18 7C18.5523 7 19 6.55228 19 6C19 5.44772 18.5523 5 18 5Z" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.65396 4.27606C1 5.55953 1 7.23969 1 10.6V13.4C1 16.7603 1 18.4405 1.65396 19.7239C2.2292 20.8529 3.14708 21.7708 4.27606 22.346C5.55953 23 7.23969 23 10.6 23H13.4C16.7603 23 18.4405 23 19.7239 22.346C20.8529 21.7708 21.7708 20.8529 22.346 19.7239C23 18.4405 23 16.7603 23 13.4V10.6C23 7.23969 23 5.55953 22.346 4.27606C21.7708 3.14708 20.8529 2.2292 19.7239 1.65396C18.4405 1 16.7603 1 13.4 1H10.6C7.23969 1 5.55953 1 4.27606 1.65396C3.14708 2.2292 2.2292 3.14708 1.65396 4.27606ZM13.4 3H10.6C8.88684 3 7.72225 3.00156 6.82208 3.0751C5.94524 3.14674 5.49684 3.27659 5.18404 3.43597C4.43139 3.81947 3.81947 4.43139 3.43597 5.18404C3.27659 5.49684 3.14674 5.94524 3.0751 6.82208C3.00156 7.72225 3 8.88684 3 10.6V13.4C3 15.1132 3.00156 16.2777 3.0751 17.1779C3.14674 18.0548 3.27659 18.5032 3.43597 18.816C3.81947 19.5686 4.43139 20.1805 5.18404 20.564C5.49684 20.7234 5.94524 20.8533 6.82208 20.9249C7.72225 20.9984 8.88684 21 10.6 21H13.4C15.1132 21 16.2777 20.9984 17.1779 20.9249C18.0548 20.8533 18.5032 20.7234 18.816 20.564C19.5686 20.1805 20.1805 19.5686 20.564 18.816C20.7234 18.5032 20.8533 18.0548 20.9249 17.1779C20.9984 16.2777 21 15.1132 21 13.4V10.6C21 8.88684 20.9984 7.72225 20.9249 6.82208C20.8533 5.94524 20.7234 5.49684 20.564 5.18404C20.1805 4.43139 19.5686 3.81947 18.816 3.43597C18.5032 3.27659 18.0548 3.14674 17.1779 3.0751C16.2777 3.00156 15.1132 3 13.4 3Z" />
                        </svg>
                </a>
            </div>
        </div>
        <div id="bg-glow" className={styles.bg_glow}></div>
        <div className={styles.ghost}></div>

        <div className={styles.right}>
            <div id="about" className={styles.about}>
                <h3>ABOUT</h3>
                <p>
                    I'm a developer Who is passionate about crafting dynamic web applications and creating seamless user experiences. With a strong foundation in both front-end and back-end technologies, I thrive on transforming innovative ideas into reality.
                </p>
                <p>
                    Over the past 4 years, I've honed my skills in a variety of programming languages and frameworks, including HTML, CSS, JavaScript, React, Node.js, Express, and MongoDB. My expertise lies in designing and implementing scalable, high-performance applications that meet and exceed client expectations.
                </p>
                <p>
                    When I'm not coding, you can find me gaming, playing chess, and constantly seeking new ways to innovate and stay ahead of industry trends. I'm always eager to learn and grow, and I believe that continuous improvement is key to success in the ever-evolving world of technology.
                </p>
            </div>

            <div id="experience" className={styles.experience}>
                <h2>EXPERIENCE</h2>
                <div className={styles.experience_tile}>
                    <div className={styles.period}>
                        2020 - 2021
                    </div>
                    <div className={styles.work}>
                        <h3>Frontend Developer . Stephyfoundations</h3>
                        <p>
                            Build and maintain components used to construct multiple website's frontend. Work closely with cross-functional teams, including developers, designers, and product manager, to implement and advocate for best practices in web accessibility.
                        </p>
                        <div className={styles.techstack}>
                            <div className={styles.stack}>HTML</div>
                            <div className={styles.stack}>CSS</div>
                            <div className={styles.stack}>JS</div>
                        </div>
                    </div>
                </div>
                <div className={styles.experience_tile}>
                    <div className={styles.period}>
                        2022 - 2023
                    </div>
                    <div className={styles.work}>
                        <h3>Backend Developer . Aeprodigy</h3>
                        <p>Worked on the design and implementation of the database and APIs used in the company's apps. Worked closely with other teams including system designers, frontend developers and project manager to deliver optimal and scalable systems. </p>
                        <div className={styles.techstack}>
                            <div className={styles.stack}>MongoDB</div>
                            <div className={styles.stack}>Express JS</div>
                            <div className={styles.stack}>NodeJS</div>
                            <div className={styles.stack}>GraphQL</div>
                        </div>
                    </div>
                </div>


                <div className={styles.ex_link}>
                    <a href="#" id="explore_link" className={styles.explore_link}> View Full Resume</a>
                </div>
            </div>


            <div id="project" className={styles.project}>
                <h2>PROJECTS</h2>
                <div className={styles.project_tile}>
                        <img src="" alt="" className={styles.project_image}/>
                    <div className={styles.work}>
                        <h3>TBU</h3>
                        <p>
                            The information for this project is still being processed and will be available soon together with the project name
                        </p>
                        <div className={styles.techstack}>
                            <div className={styles.stack}>HTML</div>
                            <div className={styles.stack}>CSS</div>
                            <div className={styles.stack}>JS</div>
                        </div>
                    </div>
                </div>
                <div className={styles.ex_link}>
                    <a href="#" id="explore_link" className={styles.explore_link}> View Full Project Archieve</a>
                </div>
            </div>

        <p className={styles.footer}>
            Loosely designed in <a href="https://www.lunacy.com">Lunacy</a> and coded in <a href="https://code.visualstudio.com">Visual Studio Code</a> by yours truly. Built with React and deployed with <a>Vercel</a>. All text is set in the <a href="https://rsms.me/inter/">Inter</a> typeface.
        </p>
        </div>
        
    </main>
        </div>
    )
}
