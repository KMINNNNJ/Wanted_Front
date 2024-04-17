import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReactMarkdown from 'react-markdown';
import { useParams } from 'react-router-dom';

const IssueDetail = () => {
  const { id } = useParams();
  const [issue, setIssue] = useState(null);

  useEffect(() => {
    const fetchIssueDetail = async () => {
      try {
        const response = await axios.get(`https://api.github.com/repos/angular/angular-cli/issues/${id}`);
        setIssue(response.data);
      } catch (error) {
        console.error('Error fetching issue detail:', error);
      }
    };
    fetchIssueDetail();
  }, [id]);

  return (
    <div className="issue-detail">
      <h2>Issue Detail</h2>
      {issue && (
        <div>
            <div className="profile-container">
                <img className="profile-image" src={issue.user.avatar_url} alt="Profile" />
                <div className="issue-info">
                    <p style={{ display: 'inline-block' }}>#{issue.number}&nbsp;&nbsp;&nbsp;{issue.title}</p>
                    <p style={{ float: 'right' }}>코멘트: {issue.comments}</p>
                    <p>작성자: {issue.user.login}, 작성일: {new Date(issue.created_at).toLocaleDateString()}</p>
                </div>
            </div>
          <hr />
          <ReactMarkdown>{issue.body}</ReactMarkdown>
        </div>
      )}
    </div>
  );
};

export default IssueDetail;
