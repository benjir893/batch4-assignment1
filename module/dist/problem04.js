"use strict";
{
    const circleArea = (shape, radious = 5) => {
        return Math.PI * radious * radious;
    };
    const calculateShapeArea = circleArea('circle', 5);
    console.log(calculateShapeArea);
    const rectangleArea = (shape, height = 6, width = 4) => {
        return height * width;
    };
    const calculateShapeArea2 = rectangleArea('rectangle', 6, 4);
    console.log(calculateShapeArea2);
    // 
}
