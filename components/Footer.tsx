import React from 'react'
import { navigations } from '../store'
import Link from 'next/link'

const Footer = () => {
  return (
    <footer className="bg-white dark:bg-gray-900">
    <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
            <img className="w-auto h-7" src="/phpSniper.png" alt="" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            
            {
                navigations?.map((nav, index) =>
                <Link key={index} href={nav?.url} className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-blue-500 dark:hover:text-blue-400">
                {nav?.name}
            </Link>
)
            }
        </div>

        <p className="mt-6 text-sm text-gray-500 lg:mt-0 dark:text-gray-400">© Copyright 2023 php sniper. </p>
    </div>
</footer>
  )
}

export default Footer