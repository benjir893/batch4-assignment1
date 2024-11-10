{
    // 
   
    type Shape ='circle'|'rectangle'
    const circleArea =(shape:'circle', radious:number=5):number=>{
        return Math.PI * radious * radious
    }
    const calculateShapeArea = circleArea('circle',5)
    console.log(calculateShapeArea)

    const rectangleArea =(shape:'rectangle', height:number = 6, width:number = 4):number=>{
            return height * width
    }
    const calculateShapeArea2 = rectangleArea('rectangle',6,4)
    console.log(calculateShapeArea2)





    // 
}