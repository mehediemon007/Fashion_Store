import React from 'react'

const Banner = () => {
    return (
        <>
            <div className="banners mb-50">
                <div className="container">
                    <div className="row">
                        <div className="col-6">
                            <img src="/images/banner/sale-banner.jpg" alt="sale" />
                        </div>
                        <div className="col-6">
                            <img src="/images/banner/arrival-banner.jpg" alt="arrive" />
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Banner