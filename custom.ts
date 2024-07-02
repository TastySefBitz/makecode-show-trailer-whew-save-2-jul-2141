/**
 * Custom blocks
 */
//% weight=100 color=#0fbc11 icon=""
namespace paths {
    class PathStep {
        constructor(public op: string, public args: number[]) { }
    }

    export class Point {
        constructor(public x: number, public y: number) { }

        setPosition(x: number, y: number) {
            this.x = x;
            this.y = y;
        }
    }

    export class Path {
        steps: PathStep[];

        constructor() {
            this.steps = [];
        }

        //% blockId=paths_addStep
        //% block="$this add step $step relative $relative"
        //% this.defl=myPath
        //% step.shadow=paths_lineTo
        //% weight=99
        //% inlineInputMode=inline
        addStep(step: PathStep, relative: boolean) {
            this.steps.push(new PathStep(relative ? step.op.toLowerCase() : step.op, step.args.slice()));
        }

        //% blockId=paths_toString
        //% block="$this to string"
        //% this.defl=myPath
        //% weight=90
        //% inlineInputMode=inline
        toString() {
            let result = "";

            for (const step of this.steps) {
                result = result + step.op + " ";
                for (const arg of step.args) {
                    result += arg + " "
                }
            }

            return result.trim();
        }
    }

    //% blockId=paths_createPath
    //% block="create path"
    //% blockSetVariable="myPath"
    //% weight=100
    export function createPath(): Path {
        return new Path();
    }

    //% blockId=paths_point
    //% block="x $x y $y"
    //% weight=4
    export function point(x: number, y: number): Point {
        return new Point(x, y);
    }

    //% blockId=paths_xPoint
    //% block="x $x"
    //% blockHidden
    export function xPoint(x: number): Point {
        return new Point(x, 0);
    }

    //% blockId=paths_yPoint
    //% block="y $y"
    //% blockHidden
    export function yPoint(y: number): Point {
        return new Point(0, y);
    }

    //% blockId=paths_moveTo
    //% block="move to $location"
    //% location.shadow=paths_point
    //% weight=85
    //% inlineInputMode=inline
    //% blockGap=8
    export function moveTo(location: Sprite | tiles.Location | Point) {
        return new PathStep("M", [location.x, location.y]);
    }

    //% blockId=paths_lineTo
    //% block="line to $location"
    //% location.shadow=paths_point
    //% weight=80
    //% inlineInputMode=inline
    export function lineTo(location: Sprite | tiles.Location | Point) {
        return new PathStep("L", [location.x, location.y]);
    }

    //% blockId=paths_horizontalLineTo
    //% block="horizontal line to $x"
    //% x.shadow=paths_xPoint
    //% weight=70
    //% inlineInputMode=inline
    //% blockGap=8
    export function horizontalLineTo(x: Sprite | tiles.Location | Point) {
        return new PathStep("H", [x.x]);
    }

    //% blockId=paths_verticalLineTo
    //% block="vertical line to $y"
    //% y.shadow=paths_yPoint
    //% weight=60
    //% inlineInputMode=inline
    export function verticalLineTo(y: Sprite | tiles.Location | Point) {
        return new PathStep("V", [y.y]);
    }

    //% blockId=paths_quadraticCurveTo
    //% block="quad curve with control $controlPoint to $location"
    //% location.shadow=paths_point
    //% controlPoint.shadow=paths_point
    //% weight=50
    //% inlineInputMode=inline
    //% blockGap=8
    export function quadraticCurveTo(controlPoint: Sprite | tiles.Location | Point, location: Sprite | tiles.Location | Point) {
        return new PathStep("Q", [controlPoint.x, controlPoint.y, location.x, location.y]);
    }

    //% blockId=paths_smoothQuadraticCurveTo
    //% block="smooth quad curve to $location"
    //% location.shadow=paths_point
    //% weight=40
    //% inlineInputMode=inline
    export function smoothQuadraticCurveTo(location: Sprite | tiles.Location | Point) {
        return new PathStep("T", [location.x, location.y]);
    }

    //% blockId=paths_cubicCurveTo
    //% block="cubic curve with control $controlPoint1 and $controlPoint2 to $location"
    //% location.shadow=paths_point
    //% controlPoint1.shadow=paths_point
    //% controlPoint2.shadow=paths_point
    //% weight=30
    //% inlineInputMode=inline
    //% blockGap=8
    export function cubicCurveTo(controlPoint1: Sprite | tiles.Location | Point, controlPoint2: Sprite | tiles.Location | Point, location: Sprite | tiles.Location | Point) {
        return new PathStep("C", [controlPoint1.x, controlPoint1.y, controlPoint2.x, controlPoint2.y, location.x, location.y]);
    }

    //% blockId=paths_smoothCubicCurveTo
    //% block="smooth cubic curve with control $controlPoint to $location"
    //% location.shadow=paths_point
    //% controlPoint.shadow=paths_point
    //% weight=20
    //% inlineInputMode=inline
    export function smoothCubicCurveTo(controlPoint: Sprite | tiles.Location | Point, location: Sprite | tiles.Location | Point) {
        return new PathStep("S", [controlPoint.x, controlPoint.y, location.x, location.y]);
    }

    //% blockId=paths_arcTo
    //% block="arc with rx $rx ry $ry rotation $xRotation large arc $largeArc clockwise $clockwise to $location"
    //% location.shadow=paths_point
    //% weight=5
    //% inlineInputMode=inline
    export function arcTo(rx: number, ry: number, xRotation: number, largeArc: boolean, clockwise: boolean, location: Sprite | tiles.Location | Point) {
        return new PathStep("A", [rx, ry, xRotation, largeArc ? 1 : 0, clockwise ? 1 : 0, location.x, location.y]);
    }

    //% blockId=paths_closePath
    //% block="close path"
    //% weight=10
    //% inlineInputMode=inline
    export function closePath() {
        return new PathStep("Z", []);
    }
}
