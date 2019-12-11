import React from "react";
import UserCard from "./UserCard";


const ListOfFollowers = props => {
  const { followers } = props;
  return (
    <div>
      {followers.map(person => {
        return <UserCard pic={person.avatar_url}
                         login={person.login}
                         name={""}
                         location={`GitHub Handle: ${person.html_url}`}
                         bio={person.type} />;
      })}
    </div>
  );
};

export default ListOfFollowers;
