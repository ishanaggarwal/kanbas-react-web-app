export default function Dashboard() {
    return (
      <div id="wd-dashboard">
        <h1 id="wd-dashboard-title">Dashboard</h1> <hr />
        <h2 id="wd-dashboard-published">Published Courses</h2> <hr />
        <div id="wd-dashboard-courses">
          <div className="wd-dashboard-course">
          <a href="#/Kanbas/Courses/1234/Home"><img src="/images/reactjs.jpg" width={200} /></a>
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS1234 React JS
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a><br></br><br></br>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <a href="#/Kanbas/Courses/1234/Home"><img src="/images/ang.jpg" width={200} /></a>
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS5610 Angular JS
              </a>
              <p className="wd-dashboard-course-title">
                Frontend software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a><br></br><br></br>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <a href="#/Kanbas/Courses/1234/Home"><img src="/images/webd.jpg" width={200} /></a>
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS5432 Web development
              </a>
              <p className="wd-dashboard-course-title">
                Backend software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a><br></br><br></br>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <a href="#/Kanbas/Courses/1234/Home"><img src="/images/reactjs.jpg" width={200} /></a>
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS4300 Meteor JS
              </a>
              <p className="wd-dashboard-course-title">
                Software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a><br></br><br></br>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <a href="#/Kanbas/Courses/1234/Home"><img src="/images/ang.jpg" width={200} /></a>
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS3200 HCI
              </a>
              <p className="wd-dashboard-course-title">
                Computer Vision
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a><br></br><br></br>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <a href="#/Kanbas/Courses/1234/Home"><img src="/images/reactjs.jpg" width={200} /></a>
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS2489 DBMS
              </a>
              <p className="wd-dashboard-course-title">
                Database software developer
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a><br></br><br></br>
            </div>
          </div>
          <div className="wd-dashboard-course">
          <a href="#/Kanbas/Courses/1234/Home"><img src="/images/pdp.jpg" width={200} /></a>
            <div>
              <a
                className="wd-dashboard-course-link"
                href="#/Kanbas/Courses/1234/Home"
              >
                CS5010 PDP
              </a>
              <p className="wd-dashboard-course-title">
                Full Stack software developer II
              </p>
              <a href="#/Kanbas/Courses/1234/Home"> Go </a><br></br><br></br>
            </div>
          </div>{" "}
        </div>
      </div>
    );
  }
  