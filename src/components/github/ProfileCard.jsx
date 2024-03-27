import React from "react";

export default function ProfileCard({ goData }) {
  const {
    login,
    avatar_url,
    name,
    public_repos,
    created_at,
    followers,
    html_url,
  } = goData;

  const date = new Date(created_at).toDateString("en-us");
  console.log(date);
  return (
    <div className="main-div">
      <div className="profileImage">
        <img
          src={avatar_url}
          alt="profile avatar"
          width={200}
          height={200}
          style={{ borderRadius: 50 }}
        />
      </div>
      <div className="profileBody" style={{ padding: "10px" }}>
        <div className="name">
          <h3>
            <a rel="noopener noreferrer" target="_blank" href={html_url}>
              <p>{login}</p>
            </a>
          </h3>{" "}
          <p>{login}</p>
        </div>
        <div className="repo">
          <h3>Public Repo</h3> <p>{public_repos}</p>
        </div>
        <div className="followers">
          <h3>Followers</h3> <p>{followers}</p>
        </div>
        <div className="following">
          <h3>User was created on </h3> <p>{date && date}</p>
        </div>
      </div>
    </div>
  );
}
