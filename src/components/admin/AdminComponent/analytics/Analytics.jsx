import CoursesSales from "./CoursesSales";
import TutorsSales from "./TutorsSales";



export default function Analytics() {

  return (
    <>
      <div>
        <div>
          <h4 className='mx-auto my-2 w-auto p-1 pb-2 bg-white fw-bold text-center shadow bg-gradient rounded'>
            SALES - {new Date().getFullYear()}
          </h4>
          <CoursesSales />
        </div>

        <div className="my-5">
          <h4 className='mx-auto my-2 w-auto p-1 pb-2 bg-white fw-bold text-center shadow bg-gradient rounded'>
            Tutors - {new Date().getFullYear()}
          </h4>
          <TutorsSales />
        </div>
      </div>
    </>
  );
}
