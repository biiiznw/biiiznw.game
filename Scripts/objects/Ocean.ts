module objects
{
    export class Ocean extends GameObject
    {
        // private instance menbers
        private _verticalSpeed?: number; // 5 px per frame

        //public properities

        //constructor
        constructor(){
            super(config.Game.ASSETS.getResult("ocean"));
            this.Start();
        }

        //provate method
        protected _checkBounds():void{
            if(this.position.y >= 0)
            {
                this.Reset();
            }

        }

        private _move():void
        {

            this.position = Vector2.add(this.position, this.velocity);
        }

        //public method
        public Start():void
        {
            this._verticalSpeed = 5;
            this.velocity = new Vector2(0, this._verticalSpeed);
            this.Reset();

        }

        public Update():void
        {
            this._move();
            this._checkBounds();

        }

        public Reset():void{
            this.position.y = -960;

        }
    }
}