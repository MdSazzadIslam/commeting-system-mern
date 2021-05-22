import React from "react";
import "./Comment.css";

const comment = () => {
  return (
    <div id="respond">
      <h3>Leave a Comment</h3>
      <form action="post_comment.php" method="post" id="commentform">
        <input type="text" className="txt_input" />
        {/*   <input name="submit" type="submit" defaultValue="Submit comment" /> */}
      </form>
    </div>
  );
};

export default comment;
