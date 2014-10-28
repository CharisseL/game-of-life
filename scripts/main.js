function matrixMixer(tr, td) {
  var matrix=[];
	for(var i = 0; i < tr; i++) {
  matrix[i]=[];
  	for(var j = 0; j < td; j++) {
    	matrix[i][j] = Math.round(Math.random())
  	}
  }
  return matrix;
}

function addRowItem($table, item){
		var $tr = document.createElement('tr');
		$table.innerHTML = ' ';
		$table.appendChild($tr);

function addColumnItem($table, item){
   		var $td = document.createElement('td');
			$table.innerHTML = ' ';
			$table.appendChild($td);
			


document.addEventListener("DOMContentLoaded", function(){  
	var $table = document.getElementById('table');
  var matrix = matrixMixer(3,3);

    for(var i = 0; i < matrix.length; i++){
      addRowItem($table, matrix[i]);
 
      for(var j = 0; j < matrix[i].length; j++){
        addColumnItem($table, matrix[i][j]); 
      }
    }	
});


