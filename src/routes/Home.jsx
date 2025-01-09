// IMPORTS
import { useState, useEffect } from 'react'
import { TabGroup } from 'liamc9npm'
// CREATE FUNCTION
export default function Home() {

    // HTML
    return (
        <>
            <TabGroup tabs={["Trending", "Recent"]} activeColor="#ffb500" />
        </>
    )
}