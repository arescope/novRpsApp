function FakeRoundRepo(){
    let rounds = []

    this.isEmpty = function(){
        return rounds.length === 0
    }

    this.save = function(aRound){
        rounds.push(aRound)
    }

    this.all = function(){
        return rounds
    }
}

module.exports = FakeRoundRepo