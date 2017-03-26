var width = 50;
var height = 50;
var board = [];
var dx = [-1,  0,  1, -1,  1, -1,  0,  1];
var dy = [-1, -1, -1,  0,  0,  1,  1,  1];

init(board = makeBoard());
show(board);
setInterval(function () {
    board = next(board);
    show(board);
}, 100);

/* =====================
 * ボードの作成
 */
function makeBoard() {
    var board = [];
    for (var y=0; y<height+2; ++y) {
        board[y] = new Array(width + 2);
    }
    return board;
}

/* =====================
 * テキトウに生命を誕生させる
 */
function init(board) {
    for (var y=1; y<=height; ++y) {
        for (var x=1; x<=width; ++x) {
            board[y][x] = Math.floor(Math.random()*101)%10 == 0;
        }
    }
}

/* =====================
 * 次の世代に遷移
 */
function next(board) {
    var next = makeBoard();
    for (var y=1; y<=height; ++y) {
        for (var x=1; x<=width; ++x) {
            var count = 0;
            for (var i=0; i<8; ++i) {
                count += board[y+dy[i]][x+dx[i]] ? 1 : 0;
            }
            next[y][x] = count == 3 || (board[y][x] && count == 2);
        }
    }
    return next;
}

/* =====================
 * 出力
 */
function show(board) {
    document.getElementById("board").innerHTML = toString(board);
}

/* =====================
 * ボードの状態を出力用の文字列に変換
 */
function toString(board) {
    var s = "";
    for (var y=1; y<=height; ++y) {
        for (var x=1; x<=width; ++x) {
            s += board[y][x] ? "■" : "□" ;
        }
        s += "</br>";
    }
    return s;
}