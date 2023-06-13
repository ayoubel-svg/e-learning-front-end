

function Profile() {

  const session = window.sessionStorage;
  console.log(session.getItem('email'));
  return (
    <div>
      <h4 className="text-center text-white bg-dark rounded p-2 mb-5">Profile</h4>
      <div className="w-auto">
        <form action="" className="w-auto">
          <div className="form-floating mb-3">
            <input
              type="text"
              value={session.getItem('name')}
              className="form-control text-capitalize"
              id="floatingInput"
              placeholder="John Doe"
            />
            <label htmlFor="floatingInput">Full Name</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="email"
              value={session.getItem('email')}
              id="floatingInput"
              className="form-control"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating mb-3">
            <input
              type="password"
              value={session.getItem('password')}
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button type="submit" className="btn btn-primary w-100">Update</button>
        </form>
      </div>
    </div>
  )
}

export default Profile; 