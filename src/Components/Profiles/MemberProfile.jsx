import React, { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import Logo from '../Sourcefiles/Images/eniac2.png'
import bg from "../Sourcefiles/Images/97011 (1).jpg";
import teammembers from "../Sourcefiles/TeamMembers";

const MemberProfile = () => {
    const { id } = useParams();
    const teammember = teammembers.find((tm) => tm.id === parseInt(id));

    useEffect(() => {
        topFunction();
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

    return (
        <div>
            {/* navbar */}
            <div>
                <nav className="navbar navbar-expand-lg navbar-dark trans-navigation fixed-top navbar-togglable">
                    <div className="container">
                        <a className="navbar-brand">
                        <img src={Logo} style={{ height: '50px', width: "110px" }} alt="" />
                        </a>
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
            {/* background top image */}
            <div className="bg-img">
                <img src={bg} className="img-fluid" alt="" />
            </div>

            {/* mainpage */}

            <div>
                {teammember ? (
                    <div className="row">
                        <div className="col-lg-4">
                            <div className=" main-info-card">
                                <div className="cardx-body card-styles">
                                    <div className="profile-card">
                                        <img
                                            src={teammember.image}
                                            className="profile-img"
                                            alt=""
                                        />
                                    </div>
                                    <div className="text-center">
                                        <h3 className="mt-3">
                                            <b>{teammember.name}</b>
                                        </h3>
                                        <p className="mt-0 mb-1">{teammember.designation}</p>
                                        <p className="mt-0 mb-3">
                                            <i className="fa-solid fa-location-dot" /> Lahore,
                                            Pakistan
                                        </p>

                                        <button className="btn btn-primary btn-circled w-100 mb-2">
                                            Follow
                                        </button>
                                        <button className="btn btn-secondary btn-circled w-100 mb-4">
                                            Message
                                        </button>
                                    </div>
                                    <div>
                                        <div className="d-flex">
                                            <p>Project Done</p>
                                            <p className="ms-auto">{teammember.projectsDone}</p>
                                        </div>
                                        <div className="d-flex" style={{ marginTop: "-10px" }}>
                                            <p>Happy Clients</p>
                                            <p className="ms-auto">{teammember.projectsDone}</p>
                                        </div>
                                        <div className="d-flex" style={{ marginTop: "-10px" }}>
                                            <p>Followers</p>
                                            <p className="ms-auto">{teammember.followers}</p>
                                        </div>
                                        <div className="d-flex" style={{ marginTop: "-10px" }}>
                                            <p>Following</p>
                                            <p className="ms-auto">{teammember.following}</p>
                                        </div>
                                    </div>

                                    <div>
                                        <p className="text-dark">
                                            <b>On the web</b>
                                        </p>

                                        {teammember.linkedin ? (
                                            <>
                                                <a
                                                    href={teammember.linkedin}
                                                    target={"_blank"}
                                                    className="btn btn-outline-secondary btn-circled w-100 mb-2"
                                                    style={{ border: "1px solid #6c757d" }}
                                                >
                                                    <i className="fa-brands fa-linkedin fa-2x" />
                                                    &nbsp;Linkedin
                                                </a>
                                            </>
                                        ) : null}

                                        {
                                            teammember.github ? (
                                                <>
                                                    <a
                                                        href={teammember.github}
                                                        target={"_blank"}
                                                        className="btn btn-outline-secondary btn-circled w-100 mb-2"
                                                        style={{ border: "1px solid #6c757d" }}
                                                    >
                                                        <i className="fa-brands fa-github fa-2x" />
                                                        &nbsp;Github
                                                    </a>
                                                </>
                                            ) : null
                                        }

                                        {teammember.instagram ? (
                                            <>
                                                <a
                                                    href={teammember.instagram}
                                                    target={"_blank"}
                                                    className="btn btn-outline-secondary btn-circled w-100 mb-2"
                                                    style={{ border: "1px solid #6c757d" }}
                                                >
                                                    <i className="fa-brands fa-instagram fa-2x" />
                                                    &nbsp;Instagram
                                                </a>
                                            </>
                                        ) : null}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-8">
                            <button
                                className="btn btn-secondary btn-circled btn-sm btn-circled mt-3 ps-4 pe-4 rounded-pill"
                                style={{ border: "1px solid #6c757d" }}
                            >
                                About Me
                            </button>
                            <div className="row mt-2">
                                <div className="card card-styles" style={{ width: '885px' }}>
                                    <div className="card-body ">
                                        <h5 class="card-title">Hi there,</h5>
                                        <p class="card-text">
                                            <td
                                                dangerouslySetInnerHTML={{
                                                    __html: teammember.description,
                                                }}
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <button
                                className="btn btn-outline-secondary btn-sm btn-circled mt-4 ps-4 pe-4 rounded-pill"
                                style={{ border: "1px solid #6c757d" }}
                            >
                                Skills
                            </button>
                            <div className="row mt-2 mb-4">
                                <div className="card card-styles" style={{ width: '885px' }}>
                                    <div className="card-body">
                                        <p class="card-text">{teammember.technology}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                ) : (
                    <div>
                        <h1>no user found</h1>
                    </div>
                )}
            </div>
        </div>
    );
};

export default MemberProfile;
