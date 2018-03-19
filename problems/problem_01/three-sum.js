var input = [0, 1, 1, 1]
var target = 2;
var myArray = [];
var sort = [];

const threeSum = (nums, target) => {
  for (i in input) {
    for (j in input) {
        if (i != j) {
            for (k in input) {
                if (k != j && k != i) {
                    var result = input[i] + input[j] + input[k]
                    if (result === target) {
                        sort.push([i,j,k])
                    }
                }
            }
        }
    }
}

var zzz = [];

for(i in sort){
    zzz.push(sort[i].sort());
}

var flag = new Array(zzz.length).fill(false);


for(i = 0 ; i <= zzz.length ; i++){
    for(j = i+1 ; j <= zzz.length ; j++){
        if(j < zzz.length && zzz[i][0]==zzz[j][0] && zzz[i][1]==zzz[j][1] && zzz[i][2]==zzz[j][2]){
            flag[i] = true;
        }else {
        }
    }
}

var newarray = [];

for (i = 0; i < zzz.length; i++) {
    if (flag[i]==false) {
        newarray.push(zzz[i])
    };
}

console.log(newarray.sort())


}

threeSum(input, target)

module.exports = { threeSum };
