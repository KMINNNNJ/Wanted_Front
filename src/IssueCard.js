
import React from 'react';

const IssueCard = ({ issue }) => {
  return (
    <div className="issue-card">
      <p>#{issue.number} {issue.title}</p>
      <p>코멘트: {issue.comments}</p>
      <p>작성자: {issue.user.login}, 작성일: {new Date(issue.created_at).toLocaleDateString()}</p>
      <hr />
    </div>
  );
};

export default IssueCard;