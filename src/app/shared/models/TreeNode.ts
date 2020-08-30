// https://www.typescriptlang.org/docs/handbook/interfaces.html

export class TreeNode {

    data: number;
    left: TreeNode;
    right: TreeNode;

    constructor(data: number) {
        this.data = data;
        this.left = null;
        this.right = null;
    }

}
