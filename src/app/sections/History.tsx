'use client';

import React, { useEffect, useRef } from 'react';

export default function History() {
    return (
        <div className='flex flex-col md:px-24 p-5 text-center gap-5'>
            <h2 className='text-gray-400 my-10'>The Daily Pennsylvanian is the University of Pennsylvania&apos;s independent student media organization. We cover news about the University of Pennsylvania and from around the Philadelphia metro area.</h2>
            <h5>Upholding our 14-Year Legacy of Journalistic Excellence</h5>
            <ol>
                <li>
                    <h3>1885</h3>
                    <p>
                        The Daily Pennsylvanian was founded and has since been continually published since with a brief hiatus during WWII.
                    </p>
                </li>
                <li>
                    <h3>1968</h3>
                    <p>
                        34th Street Magazine, named for the address of the DP office, began weekly publication.
                    </p>
                </li>
                <li>
                    <h3>1975</h3>
                    <p>
                        The DP moved from its 34th and Chestnut home to 4015 Walnut St.
                    </p>
                </li>
                <li>
                    <h3>1984</h3>
                    <p>
                        The DP became fully independent when it incorporated separately from the University.
                    </p>
                </li>
                <li>
                    <h3>1986</h3>
                    <p>
                        The DP Alumni Association (DPAA) was created for alumni to help students and keep in touch with each other.
                    </p>
                </li>
                <li>
                    <h3>1995</h3>
                    <p>
                        The DP launched its website theDP.com.
                    </p>
                </li>
                <li>
                    <h3>2008</h3>
                    <p>
                        The editors of 34th Street launched a blog called Under the Button to write about anything students might be talking about on campus.
                    </p>
                </li>
                <li>
                    <h3>2013</h3>
                    <p>
                        The Board of Directors was established.
                    </p>
                </li>
                <li>
                    <h3>2018 </h3>
                    <p>
                        The DP launched its first paid subscription newsletter, The Weekly Roundup.
                    </p>
                </li>
                <li>
                    <h3>2021</h3>
                    <p>
                        The DP+ app was launched.
                    </p>
                </li>
                <li>
                    <h3>2022</h3>
                    <p>
                        34th Street magazine became a monthly publication in high-quality glossy print.
                    </p>
                </li>
                <li>
                    <h3>2023</h3>
                    <p>
                        The DP Foundation is established to manage the organization’s assets and long-term planning.
                    </p>
                </li>
            </ol>
        </div>
    )

}