const FPS = 30;
const matrixSize = 50;
const grasscount = 20;
const grasseatercount = 5;
const alleatercount = 5;
const grassspawnercount  = 2;
const grasseaterspawnercount = 2;
const kamikadzecount = 50;
const kamikadzegenerate  = 1;

var matrix = [];   

function matrixgenerator(size,grs,grseat,alleat,grsspawn,grseatspawn,kamkdz){
    for(let i = 0; i < size; i++){
        matrix.push([])
        for(let j =0; j < size;j++){
            matrix[i].push(0);
        }
    }

    for(let i = 0; i < grs; i++) {
        let success = false;
        while(!success) {
            let crd1 = Math.floor(Math.random() * size);
            let crd2 = Math.floor(Math.random() * size);
            

            if(matrix[crd1][crd2] == 0) {
                matrix[crd1][crd2]= 1;
                success = true;
            }
        }
    }

    for(let i = 0; i < grseat; i++) {
        let success = false;
        while(!success) {
            let crd1 = Math.floor(Math.random() * size);
            let crd2 = Math.floor(Math.random() * size);
            
            if(matrix[crd1][crd2] == 0) {
                matrix[crd1][crd2]= 2;
                success = true;
            }
        }
    }
    for(let i = 0; i < alleat; i++) {
        let success = false;
        while(!success) {
            let crd1 = Math.floor(Math.random() * size);
            let crd2 = Math.floor(Math.random() * size);
            
            if(matrix[crd1][crd2] == 0) {
                matrix[crd1][crd2]= 3;
                success = true;
            }
        }
    }
    for(let i = 0; i < grsspawn; i++) {
        let success = false;
        while(!success) {
            let crd1 = Math.floor(Math.random() * size);
            let crd2 = Math.floor(Math.random() * size);
            
            if(matrix[crd1][crd2] == 0) {
                matrix[crd1][crd2]= 4;
                success = true;
            }
        }
    }
    for(let i = 0; i < grseatspawn; i++) {
        let success = false;
        while(!success) {
            let crd1 = Math.floor(Math.random() * size);
            let crd2 = Math.floor(Math.random() * size);
            
            if(matrix[crd1][crd2] == 0) {
                matrix[crd1][crd2]= 5;
                success = true;
            }
        }
    }
    for(let i = 0; i < kamkdz; i++) {
        let success = false;
        while(!success) {
            let crd1 = Math.floor(Math.random() * size);
            let crd2 = Math.floor(Math.random() * size);
            
            if(matrix[crd1][crd2] == 0) {
                matrix[crd1][crd2]= 6;
                success = true;
            }
        }
    }
   
}
function kamikadzegenerator(kamkdz,size){
    for(let i = 0; i < kamkdz; i++) {
        let success = false;
        while(!success) {
            let crd1 = Math.floor(Math.random() * size);
            let crd2 = Math.floor(Math.random() * size);
            
            if(matrix[crd1][crd2] == 0) {
                matrix[crd1][crd2]= 6;
                success = true;
            }
            var newkamikdz = new Kamikadze(crd1,crd2, 6);
             KamikadzeArr.push(newkamikdz);
        }
    }
}


 var side = 15;
 ``
 var grassArr = [];
 var grassEaterArr=[];
 var PredatorArr=[];
 var grassSpawnArr = [];
 var EaterSpawnArr =[];
 var KamikadzeArr =[];

 
  
 function setup() {
    frameRate(FPS);
    matrixgenerator(matrixSize, grasscount, grasseatercount, alleatercount, grassspawnercount, grasseaterspawnercount, kamikadzecount);
    createCanvas(matrix[0].length * side, matrix.length * side);
    background('#acacac');
    for(var y = 0; y < matrix.length; ++y){
        for(var x = 0; x < matrix[y].length; ++x){
            if(matrix[y][x] == 1){
                var gr = new Grass(x,y,1);
                grassArr.push(gr);
            }
            else if(matrix[y][x] == 8){
     
            }	
            else if(matrix[y][x]==2){
                let grEat = new GrassEater(x,y,2);
                grassEaterArr.push(grEat);
            }  
            else if(matrix[y][x]==3){
                let pred = new Predator(x,y,3);
                PredatorArr.push(pred);
            } 
            else if(matrix[y][x]==4){
                let spawn = new GrassSpawn(x,y,4);
                grassSpawnArr.push(spawn);
            } 
            else if(matrix[y][x]==5){
                let Eaterspawn = new EaterSpawn(x,y,5);
                EaterSpawnArr.push(Eaterspawn);
            } 
            else if(matrix[y][x]==6){
                let Kamik = new Kamikadze(x,y,6);
                KamikadzeArr.push(Kamik);
            } 
         
          
           
        }
     }
 }
 function draw() {
     kamikadzegenerator(kamikadzegenerate,matrixSize);
    for (var y = 0; y < matrix.length; y++) {
        for (var x = 0; x < matrix[y].length; x++) {
 
            if (matrix[y][x] == 1) {
                fill("green");
            }
            else
            
            if (matrix[y][x] == 2) {
                fill("yellow");
            }
            else if (matrix[y][x] == 0) {
                fill("#acacac");
            }
            else if (matrix[y][x] == 3) {
                fill("red");
            }
            else if (matrix[y][x] == 4) {
                fill("#32CD32");
            }
            else if (matrix[y][x] == 5) {
                fill("#CCCC00");
            }
            else if (matrix[y][x] == 6) {
                fill("Black");
            }

          
            rect(x * side, y * side, side, side);
     
        }

   
    }


    for(var i in grassArr){
        grassArr[i].mul();
    }
    for(var i in grassEaterArr){
        grassEaterArr[i].eat();
    }
    for(var i in PredatorArr){
        PredatorArr[i].eat();
    }
    for(var i in grassSpawnArr){
        grassSpawnArr[i].mul();
    }
    for(var i in EaterSpawnArr){
        EaterSpawnArr[i].mul();
    }
    for(var i in KamikadzeArr){
        KamikadzeArr[i].kaboom(); 
    }
  
    
}
