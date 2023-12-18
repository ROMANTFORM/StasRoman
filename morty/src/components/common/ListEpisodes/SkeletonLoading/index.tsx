import React from 'react';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

export interface SkeletonItemInterface {
    count?: number;
    width?: string | number;
    height?: string | number;
    circle?: boolean;
    className?: string;
}

const SkeletonItem = ({ count, width, height, circle, className }: SkeletonItemInterface) => {
    return (
        <Skeleton count={count} width={width} height={height} circle={circle} className={className} />
    );
};

export default SkeletonItem;
