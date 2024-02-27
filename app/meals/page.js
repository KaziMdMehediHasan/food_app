import React from 'react'
import Link from "next/link";

const Meals = () => {
    return (
        <>
            <h1>Meals Page</h1>
            <Link href="/meals/chinese">Meal Details</Link >
            <Link href="/">Go to Home</Link>
        </>

    )
}

export default Meals