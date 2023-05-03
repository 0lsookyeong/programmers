function solution(players, callings) {
    var answer = [];
    for(var i = 0 ; i < callings.length ; i++){
        var num = players.indexOf(callings[i]) ;
                                              
        players.splice(num , 1);        
        players.splice(num -1 , 0, callings[i]);

    } 
    
    return players;
}
// 오답 테스트9 ~ 13 - 5개 테스트 실패 (시간 초과 )