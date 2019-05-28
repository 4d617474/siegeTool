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
  if (op == "sledge"){
    hardCountersF = ["pulse"];
    softCountersF = [];
  }
  if (op == "thatcher"){
    hardCountersF = ["jager"];
    softCountersF = [];
  }
  if (op == "ash"){
    hardCountersF = ["jager"];
    softCountersF = [];
  }
  if (op == "thermite"){
    hardCountersF = ["mute","bandit","kaid","maestro"];
    softCountersF = [];
  }
  if (op == "twitch"){
    hardCountersF = ["mute","mozzie"];
    softCountersF = ["vigil","bandit"];
  }
  if (op == "montagne"){
    hardCountersF = ["smoke","echo","ela"];
    softCountersF = ["castle"];
  }
  if (op == "glaz"){
    hardCountersF = [""];
    softCountersF = ["castle"];
  }
  if (op == "fuze"){
    hardCountersF = ["jager","mute","pulse"];
    softCountersF = [""];
  }
  if (op == "blitz"){
    hardCountersF = ["smoke","ela"];
    softCountersF = ["mute"];
  }
  if (op == "iq"){
    hardCountersF = [""];
    softCountersF = [""];
  }
  if (op == "buck"){
    hardCountersF = [""];
    softCountersF = ["castle"];
  }
  if (op == "blackbeard"){
    hardCountersF = [""];
    softCountersF = [""];
  }
  if (op == "capitao"){
    hardCountersF = [""];
    softCountersF = ["castle"];
  }
  if (op == "hibana"){
    hardCountersF = ["mute","bandit","kaid","maestro"];
    softCountersF = [""];
  }
  if (op == "jackal"){
    hardCountersF = ["caveira"];
    softCountersF = [""];
  }
  if (op == "ying"){
    hardCountersF = ["warden","jager"];
    softCountersF = [""];
  }
  if (op == "zofia"){
    hardCountersF = ["jager"];
    softCountersF = ["ela"];
  }
  if (op == "dokkaebi"){
    hardCountersF = [""];
    softCountersF = ["mute","castle"];
  }
  if (op == "lion"){
    hardCountersF = [""];
    softCountersF = ["mute","castle"];
  }
  if (op == "finka"){
    hardCountersF = [""];
    softCountersF = [""];
  }
  if (op == "maverick"){
    hardCountersF = [""];
    softCountersF = ["castle","bandit","kaid"];
  }
  if (op == "nomad"){
    hardCountersF = [""];
    softCountersF = [""];
  }
  if (op == "gridlock"){
    hardCountersF = [""];
    softCountersF = [""];
  }
  if (op == "nokk"){
    hardCountersF = [""];
    softCountersF = [""];
  }
  //DEFENSE
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
