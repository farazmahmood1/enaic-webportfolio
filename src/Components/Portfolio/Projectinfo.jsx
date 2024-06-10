import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from '../Sourcefiles/Images/eniac2.png'
import mainLogo from "../Sourcefiles/Images/hover-img.png";
import AllProjects from "../Sourcefiles/AllProjects";

const Projectinfo = () => {
    const { id } = useParams();
    const project = AllProjects.find((tm) => tm.id === parseInt(id));

    const [logoSize, setLogoSize] = useState(0);
    const [backgroundColor, setBackgroundColorx] = useState('rgb(0, 0, 0)');



    const [windowDimensions, setWindowDimensions] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    });

    useEffect(() => {
        const handleResize = () => {
            setWindowDimensions({
                width: window.innerWidth,
                height: window.innerHeight
            });
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);


    useEffect(() => {
        const handleScroll = () => {
            const scrollValue = window.scrollY;
            const maxScroll = document.documentElement.scrollHeight - window.innerHeight;
            // Calculate the desired background color based on the scroll value
            const redValue = Math.round((scrollValue / maxScroll) * 1100);
            const newBackgroundColor = `rgb(${redValue}, ${redValue}, ${redValue})`;
            setBackgroundColorx(newBackgroundColor);
        };

        // Attach the scroll event listener when the component mounts
        window.addEventListener('scroll', handleScroll);

        // Clean up the scroll event listener when the component unmounts
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);


    var mybutton = document.getElementById("myBtn");
    window.onscroll = function () {
        scrollFunction();
    };
    function scrollFunction() {
        if (
            document.body.scrollTop > 400 ||
            document.documentElement.scrollTop > 400
        ) {
            mybutton = "block";
        } else {
            mybutton = "none";
        }
    }
    function topFunction() {
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    }

    useEffect(() => {
        topFunction();
    }, []);

    useEffect(() => {
        // for logo styles on the main start
        const handleScroll = () => {
            setLogoSize(window.scrollY);
        };
        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);


    const getTransformStyle = () => {
        const scale = 1 + logoSize * 0.01;
        return { transform: `scale(${scale})` };
    };

    const getOpacityStyle = () => {
        const opacity = 1 - logoSize / window.innerHeight;
        return { opacity };
    };

    const shouldHideImage = logoSize > 550;

    //   const userScreen =  windowDimensions.width < 1750 && windowDimensions.height < 746 ? 'white' : backgroundColor; 

    const userScreen = windowDimensions.width < 750 ? 'white' : backgroundColor;
    const dynamicFontColor = windowDimensions.width < 750 ? 'black' : 'white';


    return (
        <div>
            {/* navbar */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
                    <div className="container">
                        {/* <a className="navbar-brand">
                            <img src={Logo} style={{ height: '50px', width: "110px" }} alt="" />
                        </a> */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarCollapse"
                            aria-controls="navbarCollapse"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="fa fa-bars" />
                        </button>
                        <div
                            className="collapse navbar-collapse has-dropdown"
                            id="navbarCollapse"
                        >
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item ">
                                    <Link to="/" className="nav-link js-scroll-trigger">
                                        Home
                                    </Link>
                                </li>

                                <li className="nav-item ">
                                    <Link to='/Web-Portfolio' className="nav-link js-scroll-trigger">
                                        Projects
                                    </Link>
                                </li>

                                <li className="nav-item ">
                                    <Link
                                        to="/ContactUs"
                                        state={{
                                            subject: "Premium",
                                            message:
                                                "Describe the requirements required for your project ...",
                                        }}
                                        className="nav-link"
                                    >
                                        Contact
                                    </Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            {/* main content */}
            {/* className="main-background" */}
            {/* minHeight: '100vh'  */}
            <div style={{ background: userScreen }}>
                <div className="main-section-info">
                    <div className="center-block">
                        <div className="col-lg-6 mx-auto">
                            <p style={{ fontSize: "30px", color: dynamicFontColor }} className="mt-0 mb-0">
                                <b>{project.project_name}</b>
                            </p>
                            <p
                                style={{
                                    color: dynamicFontColor,
                                    fontSize: "56px",
                                    fontWeight: "300",
                                    lineHeight: "120%",
                                }}
                                className="mt-0 mb-0"
                            >
                                {project.main_heading}
                            </p>
                        </div>
                    </div>
                    {
                        windowDimensions.width > 750 ?
                            <img
                                src={mainLogo}
                                className="logo-style"
                                alt=""
                                style={{
                                    ...getTransformStyle(),
                                    ...getOpacityStyle(),
                                    display: shouldHideImage ? "none" : "initial",
                                }}
                            /> : null
                    }

                </div>

                <div style={{ marginTop: "80px", paddingBottom: "100px" }}>
                    <div className="container">
                        <div className="">
                            <div className="center-block">
                                <div className="row justify-content-center">
                                    <div className="col-lg-4">
                                        <h1>THE CHALLENGE</h1>
                                    </div>
                                    <div className="col-lg-5">
                                        <p>{project.challange}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div>
                </div>
            </div>
            <div className="container" style={{ paddingBottom: "100px" }}>
                <div className="">
                    <div className="center-block">
                        <div className="row justify-content-center">
                            <div className="col-lg-4">
                                <h1>THE SOLUTION</h1>

                                <p>{project.solution}</p>
                                {
                                    project.project_link !== "" ?
                                        <a className="btn btn-secondary btn-circled mb-2" href={project.project_link} target="_blank">
                                            View Project <i className="fa-solid fa-link" />
                                        </a> : null
                                }

                            </div>
                            <div className="col-lg-5">
                                <img loading="lazy" src={project.image_url} className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projectinfo;
