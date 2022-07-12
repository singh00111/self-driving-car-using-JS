const canvas=document.getElementById("myCanvas");
canvas.width = 200;

//getContext(), used to obtain the rendering context and its drawing functions. getContext() takes one parameter
// the type of context. For 2D graphics, such as those covered by this tutorial, you specify "2d" to get a 
// CanvasRenderingContext2D.

const ctx = canvas.getContext("2d");
// ctx is going to contain all the methods we need to draw + visualize in this canvas

// x-axis 100, y-axis 100, width 30, height 50 all in px
const car = new Car(100,100,30,50);
car.draw(ctx);

animate();

function animate() {
    car.update();
    canvas.height = window.innerHeight;
    car.draw(ctx);
    // requestAnimationFrame calls animate method again again many times per second
    requestAnimationFrame(animate);
}