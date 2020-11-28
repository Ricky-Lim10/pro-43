class guard{
    constructor(x,y){

    }
    movement(){
        var speed = 1

        guard.position.y = guard.postion.y +speed;

        if(guard.postion.y >= 700){
            guard.position.y = guard.position.y -speed;
        }

        if(guard.position.y <= 200){
            guard.position.y = guard.position.y + speed;
        }
    }
}