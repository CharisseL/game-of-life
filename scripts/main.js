var matrix = [[0, 1, 0], [1, 1, 0], [1, 1, 1]];
var $table = document.querySelector('table')

function addItem(matrix){
	$table.innerHTML = ' ';
	for(var i = 0; i < matrix.length; i++){
		var $tr = document.createElement('tr');
		$table.appendChild($tr);

		for (var j = 0; j < matrix.length; j++) {
   		var $td = document.createElement('td');
      	$td.innerText = matrix[i][j];
            $tr.appendChild($td);
            if (matrix[i][j] === 0) {
                    $td.style.backgroundColor = 'orange';
            } else {
                   $td.style.backgroundColor = 'blue';
            } 
          }
  }
}
document.addEventListener("DOMContentLoaded", function(){  
   addItem(matrix); 
});
		


