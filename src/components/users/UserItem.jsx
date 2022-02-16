import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const UserItem = ({ user: { login, avatar_url } }) => {
  return (
    <>
      <div className="card shadow-md card-compact card-side bg-base-200">
        <div className="flex-row items-center space-x-4 card-body">
          <div>
            <div className="avatar">
              <div className="rounded-full shadow h-14 w-14 ring ring-warning ring-offset-base-100 ring-offset-2">
                <img src={avatar_url} alt="Avatar" />
              </div>
            </div>
          </div>
          <div>
            <h2 className="card-title"> {login}</h2>
            <Link
              className="text-base-content text-opacity-40"
              to={`/user/${login}`}
            >
              Visit Profile
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

UserItem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default UserItem;

/*
<div>
<div class="avatar">
<div class="w-24 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
  <img src={avatar_url} alt="Avatar"></img>
</div>
</div>
</div>
*/
