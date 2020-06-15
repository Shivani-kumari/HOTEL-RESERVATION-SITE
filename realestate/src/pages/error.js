import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import {Link} from 'react-router-dom'

export default function error() {
    return (<Hero>
        <Banner title ="404" subtitle="pahe is not found please go to home">
                <Link to = "/" className="btn-primary">
                    Go Home
                </Link>
        </Banner>
    </Hero>)
}
