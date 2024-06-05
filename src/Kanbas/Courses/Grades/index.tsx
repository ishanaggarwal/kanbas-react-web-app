import GradeFiles from "./GradeFiles";
import Searchbars from "./Searchbars";
import { BsFunnel } from "react-icons/bs";

export default function Grades() {
  return (
    <div className="p-5 mx-5">
      <div className="row mb-4">
        <div className="col">
          <GradeFiles />
        </div>
      </div>
      <div className="row mx">
        <Searchbars />
      </div>
      <div className="mb-3">
        <button
          id="wd-import-btn"
          className="btn btn-lg me-1 grayed square-button"
        >
          <BsFunnel className="position-relative me-2" />
          Apply Filters
        </button>
      </div>
      <div className="">
        <table className="table table-striped table-bordered font-styler">
          <tbody>
            <tr>
              <th>
                <div className="ms-2">
               Students Name
               </div>
              </th>
              <td className="text-center">
                A1 SETUP
                <br />
                Out of 100
              </td>
              <td className="text-center">
                A2 HTML
                <br />
                Out of 200
              </td>
              <td className="text-center">
                A3 CSS
                <br />
                Out of 100
              </td>
              <td className="text-center">
                A4 BOOTSTRAP
                <br />
                Out of 150
              </td>
            </tr>
            <tr>
              <td className="text-danger">
              <div className="ms-2">
                Jannet Van Dyne
                </div>
                </td>
              <td className="text-center">100%</td>
              <td className="text-center">98%</td>
              <td className="text-center">100%</td>
              <td className="text-center">88%</td>
            </tr>
            <tr>
              <td className="text-danger">
              <div className="ms-2">
                Rhea Bawa
                </div>
                </td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
            </tr>
            <tr>
              <td className="text-danger">
              <div className="ms-2">
                Aneri Arora
                </div>
                </td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
            </tr>
            <tr>
              <td className="text-danger">
              <div className="ms-2">
                Ganesh Pramesh
                </div>
                </td>
              <td className="text-center">100%</td>
              <td className="text-center">96.67%</td>
              <td className="text-center">88.03%</td>
              <td className="text-center">98.99%</td>
            </tr>
            <tr>
              <td className="text-danger">
              <div className="ms-2">
                Antonio Ray
                </div>
                </td>
              <td className="text-center">100%</td>
              <td className="text-center">95%</td>
              <td className="text-center">99%</td>
              <td className="text-center">100%</td>
            </tr>
            <tr>
              <td className="text-danger">
              <div className="ms-2">
                Aubree Wayne
                </div>
                </td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
              <td className="text-center">100%</td>
            </tr>
            <tr>
              <td className="text-danger">
              <div className="ms-2">
                Kelly Brook
                </div>
                </td>
              <td className="text-center">98%</td>
              <td className="text-center">100%</td>
              <td className="text-center">96%</td>
              <td className="text-center">100%</td>
            </tr>
         
          </tbody>
        </table>
      </div>
    </div>
  );
}
