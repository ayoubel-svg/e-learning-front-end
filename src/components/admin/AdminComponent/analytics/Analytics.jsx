import ClientsSales from "./ClientsSales";
import CoursesSales from "./CoursesSales";
import TutorsSales from "./TutorsSales";



export default function Analytics() {

  return (
    <>
      <div>
        <div className="row">
          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center my-5">
            <h4
              className='mx-auto my-2 w-auto p-1 pb-2 bg-primary fw-bold 
            text-center text-white shadow bg-gradient rounded'
            >
              Tutors
            </h4>
            <TutorsSales />
          </div>

          <div className="col-12 col-lg-6 d-flex flex-column justify-content-center my-5">
            <h4
              className='mx-auto my-2 w-auto p-1 pb-2 bg-primary fw-bold 
            text-center text-white shadow bg-gradient rounded'
            >
              Clients
            </h4>
            <ClientsSales />
          </div>
        </div>
        {/* <div>
          <h4
            className='mx-auto my-2 w-auto p-1 pb-2 bg-primary fw-bold 
            text-center text-white shadow bg-gradient rounded'
          >
            SALES
          </h4>
          <CoursesSales />
        </div> */}
      </div>
    </>
  );
}
