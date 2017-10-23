// ECMA2016 requires constructor 
"use strict";

//Class declaration
class Curve {


    constructor(height, containerID) {
        //This also works
        //this._height, etc...

        //Dont declare above
        Curve._height = height;
        Curve._containerID = containerID;
        Curve._containerPrefix = "wave";
    }

    GetContainerName() {
        return Curve._containerPrefix + Curve._containerID;
    }

    get height() {
        return Curve._height;
    }

    set height(newHeight) {
        Curve._height = newHeight;
    }

    get containerID() {
        return Curve._containerID;
    }

    set containerID(newContainerID) {
        Curve._containerID = newContainerID;
    }
};