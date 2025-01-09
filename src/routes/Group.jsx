// IMPORTS
import { useState, useEffect } from 'react'
import { TopNavBar3 } from 'liamc9npm'
import { TabGroup } from 'liamc9npm'
import SearchView from '../views/SearchView';
// CREATE FUNCTION
export default function Group() {
    // STATE VARIABLES
    const [activeIndex, setActiveIndex] = useState(0);

    // HTML
    return (
        <>
            <TopNavBar3 title="Group" backgroundColor="#ffb500" color="#fff" />
            <TabGroup tabs={["Trending", "Recent"]} activeColor="#ffb500"  onTabChange={setActiveIndex}
/>
            <div>
                {activeIndex === 0 && <div><SearchView/></div>}
                {activeIndex === 1 && <div>Content for Recent</div>}
            </div>
            <div>
      
    </div>
        </>
    )
}