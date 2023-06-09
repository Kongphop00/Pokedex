import React from 'react';

function Navbar() {
  return (
    <>
      <div className="w-full">
        <div className="container">
          <div data-theme="emerald" className="navbar bg-base-100 rounded-3xl my-5 p-3">
            <div className="flex-1">{/* <a className="btn btn-ghost normal-case text-xl">Pokedex</a> */}</div>
            <div className="flex-none gap-2">
              <div className="form-control">
                <input type="text" placeholder="Search" className="input input-bordered w-24 rounded-3xl md:w-auto" />
              </div>
              <div className="dropdown dropdown-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img src="./src/assets/profile.jpg" />
                  </div>
                </label>
                <ul tabIndex={0} className="mt-3 p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
                  <li>
                    <a className="justify-between">
                      Profile
                      <span className="badge">New</span>
                    </a>
                  </li>
                  <li>
                    <a>Settings</a>
                  </li>
                  <li>
                    <a>Logout</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
