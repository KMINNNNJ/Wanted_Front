
import React from 'react';

const AdBanner = () => {
    const handleBannerClick = () => {
        window.open('https://www.wanted.co.kr/', '_blank'); // 클릭하면 링크로 이동
    };

    return (
        <div className="ad-banner" onClick={handleBannerClick}>
            <img src="/add_banner.jpg" alt="Advertisement" />
        </div>
    );
};

export default AdBanner;