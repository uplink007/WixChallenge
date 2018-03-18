var fild = [];
var x=500,y=500;
text="<v<<vv<v>><><<<<^>^v<>v<<>>^<<v>vv<<v>><v><^>>>v>v><^^^v>>^>^vvv^<<^^<><<<><^><<^<<<<^^^^^>>^v^v>>v>v>><<v^v<<><<<>v<v^<v^v^v><^vv<^>v^^^>v>v^v^>><>v<<vv<>>>v<<>>^^v^<>^>^<v<v>v<v><^<<^^v<>v<<^><^><<^<v<vv<<v^>^<v<<^v^><><<v<>^>vv^<^^^^^v^>>v^^>>v<<v<>^>^>v>v><^<v^v<><vv<v<<<v>vv^<><^<v><vvv>^>v^>v<<^>v<><^v^><<v<>^v>v>v>><vv><v^<><<v<<v<^>>^vv<>>v><vvv<v^v<v>vvvv>^<>><^>>^v>v>^^vv^>>>>^<<v<><<><<>^^^v><>^<v^^v><<v^<^>^>vv<vv<<vv<<>^<>><v<><^<^<vv<^^^<<>><v<^v>v><v^>vvv^<v^^vv><>^^^<<vv>v<><>^v^^^^><v^>>^>>^v<><<v<^v>>^v>>>v<<v<^^>v><^><>>>>^>>v>v<^<v^v>>^^>^<vv^v^v^v>^><^>^<v^^<>v<v>vv^v^vv^v>>v^^v>>>^<>vv^v>^^^vvv<v>v>^v<>>>^v<v^>^v^vvv^<vv<<v>^^v^>v^><^>vv>^<<vv^v<vv^^>v^>vvv<>>^><<^^v>><v<>^v^^v<^^v<^>>v>>v^<<><^>><>v>>^<vv>vvv^<vv<>vv<<^>>>vv^><^>>v<^v><v>vv^^^<v^<v<>^<v<>v^^<v<v><v><^^>^v<<<v^^^><v><^>^>^v><^>><^vv>>>><>><^v>^^^>^v><>v^v<<v^>>v^v<v^^<>vvv<^><v>>^v<^>><v>v^><>v>v>^v^<vv><<>><>><v^^^^><^>><<>v<vv<^^^vvv^v^^v>v>^vv^^v^<v>vv>v^v^>>v<>^>^v<>^>>vv>^>^^>vv^^><^v>><><^v<<^^>v>vv><<<^>>v<v>^v<^<>>vvvv<vv<v>^v^>^^>^<><v^v><>^^^<>^<<v>v^v^^>>v<<>v<^^><>v><v>v><v><<v<>^<>^><^>^<>v>v^^^^v>v<^<vv^>^>v>^^>>^^^v><>^<<^>^>v<><v>v<<><>^v<<<v>v<^>vvv^^>^<^v^<v<>^><>^^^^^<vv<^^<<><^<<>v<v^vv>v>v<>v>^vv^><^v<>^v<>>v<<v^<<v^><>^<>v<>^<>^<v<>>^vvv>>>v><>>vv><<<>>^<<<<^<>^v^>v^vv<<>vv<>v>v^v^v<v^<^>v<vv<^>vvv><><>^>vv>^<vv^<>>>v<<<v<^v>^vv><v>>vv^<^v^^<v^<>^<vv^>^><>vv>^<>^>><v>v^>>>v><><vvvv<<>>^v>^vv^><><><vvv^v<vv>^>^v<^^^^^^v<>vvv^<^>^><^v<<>^<>>>>^^>^vvv^<><^^>>>v<><<<>^^>^><<^<^<>^^>v>^^^<>v<vv>v>^>vv^v^>><v^^<v<<^>>>^^<^^v^^>^v<v<^^v^^^^v<^>>>^>v><v<^>^v>vvvvvv^>^^^^^>>^^<>><><<>^v<<<^v><".split('');
console.log(text);

Array.from({length: 1000}, (x,i) => {fild[i]=[];Array.from({length: 1000}, (x,j) =>{fild[i][j]=0})});
fild[x][y]=1;
text.map((v) => {
    if (v === "<") {
        x--;
        fild[x][y]++;
    }
    if (v === ">") {
        x++;
        fild[x][y]++;
    }
    if (v == "^") {
        y++;
        fild[x][y]++;
    }
    if (v == "v") {
        y--;
        fild[x][y]++;
    }
});
var ans=0
Array.from({length: 1000}, (x,i) => {Array.from({length: 1000}, (x,j) =>{if(fild[i][j]>1){ans=ans+1;console.log(ans);}})});
answer=ans;
