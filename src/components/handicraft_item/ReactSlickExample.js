import React, { Component } from 'react';
import ReactImageMagnify from 'react-image-magnify';
import ReactSlick from 'react-slick';
import './react-slick.css';
import bag from '../../images/bag.jpg'
import brass from '../../images/brass.jpg';
import camel from '../../images/camel.jpg';
import crystal from '../../images/crystal.jpg';
import dhokra from '../../images/dhokra.jpg';

/* ----------------------constant frontSrcSet is defined here------------------------*/
const frontSrcSet = [
    { src: bag, setting: '500w' },
    { src: brass, setting: '779w' },
    { src: camel, setting: '1020w' },
    { src: crystal, setting: '1200w' },
    { src: dhokra, setting: '1426w' }
]

/* --------------component ReactSlickExample Starts-------------- */

export default class ReactSlickExample extends Component {
    render() {
        const {
            rimProps,
            rsProps
        } = this.props;

        return (
            <ReactSlick
                {...{
                    dots: true,
                    infinite: true,
                    speed: 500,
                    slidesToShow: 1,
                    slidesToScroll: 1
                }}
                {...rsProps}
            >
                {frontSrcSet.map((src, index) => (
                    <div key={index}>
                        <ReactImageMagnify
                            {...{
                                smallImage: {
                                    alt: 'Wristwatch by Versace',
                                    isFluidWidth: true,
                                    srcSet: src.src,
                                    sizes: '(max-width: 480px) 100vw, (max-width: 1200px) 30vw, 360px'
                                },
                                largeImage: {
                                    srcSet: src.src,
                                    width: 800,
                                    height: 800
                                },
                                shouldUsePositiveSpaceLens: true,
                                lensStyle: { backgroundColor: 'rgba(0,0,0,.6)' }
                            }}
                            {...rimProps}
                        />
                    </div>
                ))}
            </ReactSlick>
        );
    }
}
/* --------------component ReactSlickExample Ends-------------- */