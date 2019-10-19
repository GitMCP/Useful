function permut(n) {
    var result = [];
    if(n.length == 1){
      return n;
    }
    for(var i = 0; i<n.length;i++){
      var focus = n[i];
      var left = n.slice(0,i).concat(n.slice(i+1));
      var innerpermut = permut(left);
      for(var j = 0; j<innerpermut.length;j++){
        result.push('' + focus + innerpermut[j]);
      }
    }
    return result;
  }
