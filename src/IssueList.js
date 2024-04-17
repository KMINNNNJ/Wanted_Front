import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import AdBanner from './AddBanner';

const IssueList = () => {
    const [issues, setIssues] = useState([]);
    const [page, setPage] = useState(1); // 페이지 수를 추적
    useEffect(() => {
        const fetchIssues = async () => {
            try {
                const response = await axios.get(`https://api.github.com/repos/angular/angular-cli/issues?state=open&sort=comments&page=${page}`);
                setIssues(prevIssues => [...prevIssues, ...response.data]);
            } catch (error) {
                console.error('이슈를 가져오는 중 오류 발생:', error);
            }
        };
        fetchIssues();
    }, [page]);

    useEffect(() => {
        const handleScroll = () => {
            if (
                window.innerHeight + document.documentElement.scrollTop ===
                document.documentElement.offsetHeight
            ) {
                setPage(prevPage => prevPage + 1); // 스크롤이 끝까지 내려가면 다음 페이지를 가져옴
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className="issue-list">
            {issues.map((issue, index) => (
                <div key={issue.id} className="issue">
                    <Link to={`/issue/${issue.number}`}>
                    <div>
                        <p style={{ display: 'inline-block' }}>#{issue.number}&nbsp;&nbsp;&nbsp;{issue.title}</p>
                        <p style={{ float: 'right' }}>코멘트: {issue.comments}</p>
                    </div>                    </Link>
                    <p>작성자: {issue.user.login}, 작성일: {new Date(issue.created_at).toLocaleDateString()}</p>
                    <hr />
                    {index === 4 && <AdBanner />} {/* 5번째 요소일 때만 광고를 렌더링*/}
                </div>
            ))}
        </div>
    );
};

export default IssueList;
