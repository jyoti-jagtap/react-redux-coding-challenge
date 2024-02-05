import React from 'react'
import './Layout.sass'
import Header from '../../organisms/Header'
import { Suspense } from 'react';
import { Outlet } from "react-router-dom"
export default function Layout() {
    return (
        <>
            <Header />
            <div className="container">
                <main className="main-content">
                    <Suspense fallback={<div>Loading...</div>}>
                        <Outlet />
                    </Suspense>
                </main>
            </div>
        </>
    )
}