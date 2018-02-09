export class history {
    constructor(
        public AttackTime: Date,
        public AttackType: string,
        public Description: string,
        public HouseAttacked:String,
        public PointsWon:string,
        public URLVideo:string,
        public WasAttackStoped:boolean
    ) {  }
}
