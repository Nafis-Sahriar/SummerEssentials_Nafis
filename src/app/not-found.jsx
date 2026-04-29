import React from 'react';

const NotFoundPage = () => {
    return (
        <div className='flex items-center justify-center text-center min-h-screen flex-col'>
            <h1>The URL You are trying to Visit is not Available Right Now</h1>

            <h1 className='text-5xl font-bold text-orange-500'>404 - Page Not Found</h1>
        </div>
    );
};

export default NotFoundPage;