
export default function Dashboard() {
  return (
    <div id="wd-dashboard" >
      <div className= "ms-3" >
      <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
      </div>
      <div className = "ms-5">
      <h2 id="wd-dashboard-published"> Published Courses (12)</h2> <hr />
      <div id="wd-dashboard-courses" className="row row-cols-1 row-cols-md-4 g-4 mt-2" >
          <div className="wd-dashboard-course col" style={{    width: "270px", marginRight: "35px",marginBottom: "35px"}}>
            <div className="card">
              <img src="/images/reactjs.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS1234 React JS
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
           
          </div>
          <div className="wd-dashboard-course col" style={{    width: "270px", marginRight: "35px",marginBottom: "35px"}}>
            <div className="card">
              <img src="/images/blue.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS2341 Web Development
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
           
          </div>
          <div className="wd-dashboard-course col" style={{    width: "270px", marginRight: "35px",marginBottom: "35px"}} >
            <div className="card">
              <img src="/images/grey.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS3412 Operating Systems
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
           
          </div>
          <div className="wd-dashboard-course col" style={{    width: "270px", marginRight: "35px",marginBottom: "35px"}}>
            <div className="card">
              <img src="/images/red.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS4300 Database Management
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
           
          </div>
          <div className="wd-dashboard-course col" style={{    width: "270px", marginRight: "35px",marginBottom: "35px"}}>
            <div className="card">
              <img src="/images/grey.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS5341 Algorithms
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
          </div>
          <div className="wd-dashboard-course col" style={{    width: "270px", marginRight: "35px",marginBottom: "35px"}} >
            <div className="card">
              <img src="/images/red.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS6100 Project Managment 
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
           
          </div>
          <div className="wd-dashboard-course col" style={{    width: "270px", marginRight: "35px",marginBottom: "35px"}} >
            <div className="card">
              <img src="/images/blue.jpg" />
              <div className="card-body">
                <a
                  className="wd-dashboard-course-link"
                  href="#/Kanbas/Courses/1234/Home"
                  style={{
                    textDecoration: "none",
                    color: "navy",
                    fontWeight: "bold",
                  }}
                >
                  CS5400 Computer Vision
                </a>
                <p className="wd-dashboard-course-title card-text">
                  Full Stack software developer
                </p>
                <a
                  href="#/Kanbas/Courses/1234/Home"
                  className="btn btn-primary"
                >
                  {" "}
                  Go{" "}
                </a>
              </div>
            </div>
           
          </div>
        </div>
        </div>
    </div>
  );
}
