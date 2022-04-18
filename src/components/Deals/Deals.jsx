import React from 'react';
import {data} from "../../data/data";
import DealProduct from "./DealProduct";

const Deals = () => {

    const {products} = data;

    return (
        <>
            <div className="fs-deals sec-spacer-50">
                <div className="container">
                    <div className="sec-heading text-center mb-5">
                        <h3 className="mb-3">Flash Deals</h3>
                    </div>
                    <div className="deal-products">
                        <div className="row">
                            {products.filter(product => product.tag === 'sale').map(product => (
                                <div className="col-6" key={product.id}>
                                    <DealProduct product={product}/>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Deals