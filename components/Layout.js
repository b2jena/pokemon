import React from 'react';
import Head from "next/head";
import Link from "next/link";

const Layout = ({ children, title }) => {
    return (
        <div>
            <Head>
                <title>{title}</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/pokemon-logo.png" />
            </Head>

            <header className="bg-slate-900 py-10 mb-10">
                <Link href="/">
                    <a>
                        <h1 className="text-6xl text-center text-amber-400">{title}</h1>
                    </a>
                </Link>
            </header>

            <main className="container mx-auto">
                {children}
            </main>

            <footer className="flex justify-center items-center mt-10">
                <a
                    className="flex flex-col"
                    href="https://github.com/b2jena"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <button className="bg-white hover:bg-gray-100 text-gray-800 font-semibold py-2 px-4 border border-gray-400 rounded shadow">
                        Copyright &copy; 2021 Bikash Jena
                    </button>
                </a>
            </footer>
        </div>
    );
};

export default Layout;
