module.exports = {
    circleArea,
    circleCircumference,
};

function circleArea ( radius ){
    console.log( Math.PI * ( radius*radius ) );
};
function circleCircumference ( radius ){
    console.log( 2 * Math.PI * radius );
};
