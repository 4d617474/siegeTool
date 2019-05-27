var operators = [
//Attacking side
"sledge","thatcher","ash","thermite","twitch","montagne","glaz","fuze","blitz",
"iq","buck","blackbeard","capitao","hibana","jackal","ying","zofia","dokkaebi",
"lion","finka","maverick","nomad","gridlock","nokk",
//Defending side
"smoke","mute","castle","pulse","doc","rook","kapkan","tachanka","jager",
"bandit","frost","valkyrie","caveira","echo","mira","lesion","ela","vigil",
"maestro","alibi","clash","kaid","mozzie","warden"];
//48
function whichCounters(op){
  if (op == "smoke"){
    hardCountersF = ["glaz"];
    softCountersF = ["iq","thatcher","twitch"];
  }
  if (op == "mute"){
    hardCountersF = ["thatcher","twitch"];
    softCountersF = ["buck","finka","iq","montagne","sledge","zofia"];
  }
  if (op == "castle"){
    hardCountersF = ["ash","hibana","sledge","zofia"];
    softCountersF = ["finka","buck","maverick","thermite"];
  }
  if (op == "pulse"){
    hardCountersF = ["iq","jackal","thatcher"];
    softCountersF = ["dokkaebi","gridlock","lion","nomad","ying"];
  }
  if (op == "doc"){
    hardCountersF = [];
    softCountersF = ["blackbeard","twitch"];
  }
  if (op == "rook"){
    hardCountersF = [];
    softCountersF = [];
  }
  if (op == "kapkan"){
    hardCountersF = ["iq","thatcher","twitch"];
    softCountersF = ["blitz","buck","finka","fuze","montagne","sledge","zofia"];
  }
  if (op == "tachanka"){
    hardCountersF = ["buck","capitao","sledge","zofia"];
    softCountersF = ["ash","finka","fuze","ying"];
  }
  if (op == "jager"){
    hardCountersF = ["thatcher","twitch"];
    softCountersF = ["iq"];
  }
  if (op == "bandit"){
    hardCountersF = ["maverick","thatcher","twitch"];
    softCountersF = ["buck","iq","finka","capitao","sledge","zofia","fuze"];
  }
  if (op == "frost"){
    hardCountersF = [];
    softCountersF = ["buck","sledge","finka"];
  }
  if (op == "valkyrie"){
    hardCountersF = ["iq","thatcher"];
    softCountersF = ["twitch","dokkaebi"];
  }
  if (op == "caveira"){
    hardCountersF = ["blitz","dokkaebi","finka"];
    softCountersF = ["lion","nomad","jackal"];
  }
  if (op == "echo"){
    hardCountersF = ["iq","thatcher"];
    softCountersF = ["twitch","finka"];
  }
  if (op == "mira"){
    hardCountersF = ["capitao","hibana","twitch"];
    softCountersF = ["buck","finka","gridlock","montagne","sledge","thermite","blackbeard"];
  }
  if (op == "lesion"){
    hardCountersF = ["iq","thatcher","twitch"];
    softCountersF = ["fuze"];
  }
  if (op == "ela"){
    hardCountersF = ["iq","thatcher","finka"];
    softCountersF = ["twitch","zofia"];
  }
  if (op == "vigil"){
    hardCountersF = ["dokkaebi","iq","jackal","thatcher"];
    softCountersF = ["blitz","twitch"];
  }
  if (op == "maestro"){
    hardCountersF = ["ash","buck","finka","maverick","sledge","thatcher","twitch","zofia"];
    softCountersF = ["dokkaebi"];
  }
  if (op == "alibi"){
    hardCountersF = ["iq","thatcher","twitch","nokk"];
    softCountersF = ["fuze","glaz"];
  }
  if (op == "clash"){
    hardCountersF = ["zofia","buck","capitao","finka","nomad","sledge"];
    softCountersF = ["gridlock","thatcher","ying","iq","ash"];
  }
  if (op == "kaid"){
    hardCountersF = ["thatcher","twitch"];
    softCountersF = ["buck","finka","iq","sledge","zofia"];
  }
  if (op == "mozzie"){
    hardCountersF = ["iq","twitch"];
    softCountersF = ["dokkaebi","thatcher"];
  }
  if (op == "warden"){
    hardCountersF = ["glaz","iq"];
    softCountersF = ["thatcher","zofia"];
  }
}
