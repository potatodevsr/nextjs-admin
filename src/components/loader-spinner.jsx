import React from 'react';
import { Audio } from 'react-loader-spinner';

export default function Loader() {
    return (
        <div className="flex justify-center items-center h-screen">
            <Audio
                height="50"
                width="50"
                color="#000000"
                ariaLabel="audio-loading"
                wrapperStyle={{}}
                wrapperClass="wrapper-class"
                visible={true}
            />
        </div>
    );
}
