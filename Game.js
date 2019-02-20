const GameState = Object.freeze({
    WELCOMING:   Symbol("welcoming"),
    OPEN:  Symbol("open"),
    WAIT: Symbol("wait"),
    RUN: Symbol("run"),
    FOOL: Symbol("ask"),
    PAGE:Symbol("page"),
    NEXT:Symbol("next"),
    DONE1:Symbol("done1"),
    ESCAPED:Symbol("escaped"),
    NEXT:Symbol("next"),
    LEAVE:Symbol("leave"),
    WISH:Symbol("wish"),
    CONTINUE:Symbol("continue")
});

export default class Game{
    constructor(){
        this.stateCur = GameState.WELCOMING;
    }
    
    makeAMove(sInput)
    {
        let sReply = "";
        switch(this.stateCur){
            case GameState.WELCOMING:
                sReply = "It is black magic book, you can complete one wish  of your life if you follow the book,To open the book write OPEN";
                this.stateCur = GameState.OPEN;
                break;
            case GameState.OPEN:
                if(sInput.toLowerCase().match("open")){
                    sReply = "Now  you opened the book follow the instruction on 1st page, write PAGE to open the first page of book";
                    this.stateCur = GameState.PAGE;
                }
                else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Open the book by typing OPEN or exit to quit";
                }
                break;
                case GameState.PAGE:
                if(sInput.toLowerCase().match("page")){
                    sReply = "First step is to go to  jungle and get a key of black color,type RUN to go";
                   this.stateCur = GameState.RUN;

                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Open the first page by typing page or exit to quit";
                }
                break;
            
            case GameState.RUN:
                if(sInput.toLowerCase().match("run")){
                    sReply = "There is a dark black tree about 3 km from the sea and there is one lion sitting under the hole, key is in the hole, get that key, or ask for help by typing help";
                    this.stateCur = GameState.HELP;

                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Type run or exit to quit";
                }
                break;
                case GameState.HELP:
                if(sInput.toLowerCase().match("help")){
                    sReply = "Give some meat to lion and steal the key,,,,type DONE1 if you done with first page...";
                    this.stateCur = GameState.DONE1;
                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Type help or exit to quit";
                }
                break;

                case GameState.DONE1:
                if(sInput.toLowerCase().match("done1")){
                    sReply = "Congratulations! type NEXT for last step";
                    this.stateCur = GameState.NEXT;
                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Type done1 or exit to quit";
                }
                break;
                case GameState.NEXT:
                if(sInput.toLowerCase().match("next")){
                    sReply = "Now you cannot go back,open the magic room, that is behind the bridge,DO NOT SCARED!!! ,GOOD LUCK!! type CONTINUE to go";
                    this.stateCur = GameState.CONTINUE;
                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Type next or exit to quit";
                }
                break;
                case GameState.CONTINUE:
                if(sInput.toLowerCase().match("continue")){
                    sReply = "The magic room is full of magical things and fully dark and blue,escape the black man from ghost black man will help you to complete your wish,now you cannot go back,DO IT OR DIE !!find the magic water to kill the ghost, TYPE ESCAPED when you done with the ghost ";
                    this.stateCur = GameState.ESCAPED;
                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Type continue or exit to quit";
                }
                break;
                  case GameState.ESCAPED:
                if(sInput.toLowerCase().match("escaped")){
                    sReply = "GOOD JOB! find the key of the room  and open the front door with the help of black man ,type LEAVE to continue ,";
                    this.stateCur = GameState.LEAVE;
                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Type escaped or exit to quit";
                }
                break;
                case GameState.LEAVE:
                if(sInput.toLowerCase().match("leave")){
                    sReply = "Now tell the whole story of your wish to black man  and  type WISH to go to real world";
                    this.stateCur = GameState.WISH;
                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Type leave to leave or exit to quit";
                }
                break;
                case GameState.WISH:
                if(sInput.toLowerCase().match("wish")){
                    sReply = "CONGRATULATION!!!!!!";
                    this.stateCur = GameState.WELCOMING;
                }else if( sInput.toLowerCase().match("exit")){
                    sReply = "Game Over"
                    this.stateCur = GameState.WELCOMING;
                }
                else{
                    sReply ="Type wish to finish the game or exit to quit";
                }
        }
        return([sReply]);
    }
}