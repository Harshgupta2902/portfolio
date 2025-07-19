'use client';

import { Typewriter } from 'react-simple-typewriter';
import React from 'react';

export default function TypewriterText() {
    return (
        <div className="text-center font-mono">
            <span>I am a </span>
            <span className="text-gray-500">
                <Typewriter
                    words={['Flutter Developer', 'Full Stack Developer', 'Backend Engineer']}
                    loop={true}
                    cursor
                    cursorStyle="|"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={1000}
                />
            </span>
        </div>
    );
}
