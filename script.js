var lines = [];
var penColor;
var bgColor;
var penWidth;

function setup(){
    createCanvas(400, 500);

    var options = createDiv().style('display: flex');

    var optionsTitle = createDiv().parent(options);
    createP("Pen Color").parent(optionsTitle);
    createP("Background Color").parent(optionsTitle);
    createP("Pen Width").parent(optionsTitle);

    var optionValues = createDiv().parent(options).style('margin: 10px 40px; width: 90px');
    penColor = createColorPicker('#ffffff').parent(optionValues);
    bgColor = createColorPicker('#1e1e1e').parent(optionValues).style('margin-top: 10px');
    penWidth = createSelect(false).parent(optionValues).style('margin-top: 10px');
    penWidth.option('1');
    penWidth.option('2');
    penWidth.option('4');
    penWidth.option('8');
    penWidth.selected('2');

    clearBtn = createButton('Clear').parent(options).style('width: 100px');
}

function draw(){
    background(bgColor.value());

    clearBtn.mousePressed(function(){
        lines = []
    })

    if(mouseIsPressed){
        var line = new MyLine(penColor.value(), penWidth.value());
        lines.push(line);
    }

    for(var line of lines){
        line.show();
    }

}