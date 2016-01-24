function setup() {
createCanvas(600,600);
noStroke();
background(23,100,24);

x=0;
fill(0)
while (x<width){
    y=0
  while (y<height){
    rect(x,y,9,9);
    y=y+10;
  }
    x=x+10
}
}

