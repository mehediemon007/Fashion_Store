import React from 'react'
import MultiRangeSlider from './MultirangeSlider';

const FilterWidget = () => {
    return (
        <>
            <div className="single-widget filter-widget">
                <div className="widget-title">
                    <h5>Filter</h5>
                </div>
                <MultiRangeSlider min={0} max={10000} onChange={({ min, max }) => null}/>
                <div className="color-filter my-3">
                    <h6 className='mb-2'>Color</h6>
                    <ul>
                        <li><input type="checkbox" className='bg-primary'/></li>
                        <li><input type="checkbox" className='bg-danger'/></li>
                        <li><input type="checkbox" className='bg-success'/></li>
                        <li><input type="checkbox" className='bg-dark'/></li>
                    </ul>
                </div>
                <div className="size-filter">
                    <h6 className='mb-2'>Size</h6>
                    <ul>
                        <li><label><input type="checkbox"/><span>All</span></label></li>
                        <li><label><input type="checkbox"/><span>S</span></label></li>
                        <li><label><input type="checkbox"/><span>M</span></label></li>
                        <li><label><input type="checkbox"/><span>L</span></label></li>
                        <li><label><input type="checkbox"/><span>XL</span></label></li>
                        <li><label><input type="checkbox"/><span>XXL</span></label></li>
                    </ul>
                </div>
            </div>
        </>
    )
}

export default FilterWidget;