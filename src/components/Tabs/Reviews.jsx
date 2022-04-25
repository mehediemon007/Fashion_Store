import React from 'react'

const Reviews = () => {
    return (
        <>
            <div className="product-review-content">
                <div className="comment-author">
                    <div className="comment-thumb">
                        <img src="/images/reviwer.jpg" width="60" height="60" alt="Reviwer"/>
                    </div>
                    <div className="comment-content">
                        <div className="rating-box">
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        <i className="fa fa-star"></i>
                        </div>
                        <h5 className="title"><span>Admin</span> - April 8, 2021</h5>
                        <p className="desc">Donec venenatis euismod turpis sed dapibus. Maecenas augue augue, iaculis id dui eget, ultricies sagittis purus. Praesent sed blandit mauris. Pellentesque non auctor dolor. Aliquam quis tincidunt tellus. Curabitur gravida vel lorem ut tempor. Aliquam id odio maximus, hendrerit tortor a, venenatis lorem. Nullam eget dictum eros. Sed ultricies augue in erat posuere tempor.</p>
                    </div>
                </div>
                <div className="comment-form-content">
                    <h4 className="title">ADD A REVIEW</h4>
                    <p className="desc">Your email address will not be published. Required fields are marked *</p>
                    <div className="rating-box">
                        <span>Your rating</span>
                        <div className="rating-icon">
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                            <i className="fa-solid fa-star"></i>
                        </div>
                    </div>
                    <div className="review-comment-form">
                        <form action="#">
                        <div className="row">
                            <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="ReviewComment" className="form-label">Your review *</label>
                                <textarea id="ReviewComment" className="form-control"></textarea>
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="Reviewname" className="form-label">Name *</label>
                                <input id="Reviewname" className="form-control" type="text"/>
                            </div>
                            </div>
                            <div className="col-12">
                            <div className="form-group">
                                <label htmlFor="Reviewemail" className="form-label">Email *</label>
                                <input id="Reviewemail" className="form-control" type="email"/>
                            </div>
                            </div>
                            <div className="col-md-12">
                            <div className="form-group mb--0">
                                <button type="submit" className="btn-theme btn-border">Submit</button>
                            </div>
                            </div>
                        </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Reviews