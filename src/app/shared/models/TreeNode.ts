// https://www.typescriptlang.org/docs/handbook/interfaces.html

export class TreeNode {

    data: number;
    left: TreeNode;
    right: TreeNode;
    xAxis: number;
    yAxis: number;
    level: number;
    colour: string;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
        this.xAxis = null;
        this.yAxis = null;
        this.level = null;
        this.colour = 'white';
    }

}
