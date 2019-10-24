P5 = p5;

new P5((sketch) => {

    sketch.setup = () => {

        document.addEventListener('dblclick', () => sketch.fullscreen(!sketch.fullscreen()));

        const canvas = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);

    };

    sketch.draw = () => {

        sketch.background(0, 0, 0, 1);

    };

    sketch.windowResized = () => {
        sketch.resizeCanvas(sketch.windowWidth, sketch.windowHeight);
    };

    sketch.mouseWheel = (event) => {

    };

    sketch.mouseMoved = (event) =>{

    };

}, "container");
