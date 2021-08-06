import React from 'react';
import TopBannerHis from '../../components/History/ToBannerHis/ToBannerHis'
import OppiningHours from '../../components/Home/OppiningHours/OppiningHours';
import SmallHistory from '../../components/Home/SmallHistory/SmallHistory';
const MainHistory = () => {
    return (
        <div>
            <TopBannerHis/>
            <OppiningHours/>
            <SmallHistory/>
        </div>
    );
};

export default MainHistory;