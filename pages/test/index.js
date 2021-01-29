import Footer from '@components/Footer'
import Header from '@components/Header'
import Head from 'next/head'
import React from 'react'
import Link from 'next/link'
import { event } from '../../lib/gtag'

export default function test() {
    return (
        <div className="container">
            <Head>
                <title>Next.js Starter!</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <Header title="Welcome to my app!" />
                <p className="description">
                    xxxxxxx
                </p>
                <button onClick={() => event("buy", "button", "button", "buy")}>buy</button>
                <Link
                    id="logo"
                    href={{
                        pathname: '/'
                    }}>
                    link to
                </Link>
            </main>
            <Footer />
        </div>
    )
}
