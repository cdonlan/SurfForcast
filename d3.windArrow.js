/* Creates a wind arrow for display in station model */

/* The default size of the arrow is: width = 8, height = 2.

The size is then given by the @arrowWidth parameter.

The canvas is a square of 2*arroWidth.

The arrow is drawn in the center of the square and rotated to the corresponding angle (@direction).

*/

var path = "";
var widget = "";


function WindArrow (speed, direction, container, arrowWidth) {

    'use strict';

    var index = 0,

        i;


	
    var speed = speed;

    var direction = direction;

    var trigDirection = direction + 90;

    var scale = arrowWidth / 8;



    var ten = 0;

    var five = 0;

    var fifty = 0;



    // Create the canvas

    var main = d3.select(container)

        .append('svg:svg')

        .attr('height', 25)

        .attr('width', 100);

    main.append('defs').append('clipPath')

        .attr('id', 'clip')

        .append('rect')

        .attr('height', 100)

        .attr('width', 100);



    // Draw the widget area    

    widget = main

        .append('g')

        .attr('class', 'wind-arrow');



    if (speed > 0) {

        // Prepare the path

        

        if (speed <= 7) {

            // Draw a single line

            WindArrow.prototype.longBar = longBar();

            index = 1;

        } else {

            WindArrow.prototype.shortBar = shortBar();

        }



        // Find the number of lines in function of the speed

        five = Math.floor(speed / 5);

        if (speed % 5 >= 3) {

            five += 1;

        }



        // Add triangles (5 * 10)

        fifty = Math.floor(five / 10);

        five -= fifty * 10;

        // Add tenLines (5 * 2)

        ten = Math.floor(five / 2);

        five -= ten * 2;



        // Draw first the triangles

        for (i = 0; i < fifty; i++) {

            WindArrow.prototype.addFifty = addFifty(index + 2 * i);

        }

        if (fifty > 0) {

            index += 2 * (fifty - 0.5);

        }



        // Draw the long segments

        for (i = 0; i < ten; i++) {

            WindArrow.prototype.addTen = addTen(index + i);

        }

        index += ten;



        // Draw the short segments

        for (i = 0; i < five; i++) {

            WindArrow.prototype.addFive = addFive(index + i);

        }



        path += "Z";



        // Add to the widget

        widget.append('g')

            .append('path')

            .attr('d', path)

            .attr('vector-effect', 'non-scaling-stroke')

            .attr('transform', 'translate(' + arrowWidth + ', ' + arrowWidth + ') scale(' + scale + ') rotate(' + trigDirection + ' ' + 0 + ' ' + 0 + ')  translate(-8, 5)')

            .attr('class', 'wind-arrow');



    } else {

        // No wind, draw double circles

        WindArrow.prototype.zeroWind = zeroWind();

    }



};



 function shortBar() {

    // Draw an horizontal short bar.

    'use strict';

    path += "M1 2 L8 2 ";

};

function longBar() {

    // Draw an horizontal long bar.

    'use strict';

    path += "M0 2 L8 2 ";

};

function addTen(index) {

    // Draw an oblique long segment corresponding to 10 kn.

    'use strict';

    path += "M" + index + " 0 L" + (index + 1) + " 2 ";

};

function addFive(index) {

    // Draw an oblique short segment corresponding to 10 kn.

    'use strict';

    this.path += "M" + (index + 0.5) + " 1 L" + (index + 1) + " 2 ";

};

function addFifty(index) {

    // Draw a triangle corresponding to 50 kn.

    'use strict';

    path += "M" + index + " 0 L" + (index + 1) + " 2 L" + index + " 2 L" + index + " 0 ";

};

function zeroWind() {

    // Draw two circles corresponding to null wind.

    'use strict';

    var circle = d3.svg.arc()

        .innerRadius(0.5)

        .outerRadius(1)

        .startAngle(-Math.PI)

        .endAngle(Math.PI);



    widget.append('g')

        .attr('class', 'wind-circle')

        .append('path').attr('d', circle)

        .attr('vector-effect', 'non-scaling-stroke')

        .attr('transform', 'translate(8, 2)');

};

