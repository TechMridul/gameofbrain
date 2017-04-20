window.onload = function(){
	document.getElementById('rows').focus();	
};

var randomNumbers = [];
var rows,cols;
function getRandomNumber(min,max){
	var num = Math.floor(Math.random() * max) + min;
	randomNumbers.push(num);
}

function validateInputs(rows, cols){
	if(rows.trim() == ''){
		alert('Please enter rows value');
		document.getElementById('rows').focus();
		return false;
	}
	if(cols.trim() == ''){
		alert('Please enter cols value');
		document.getElementById('cols').focus();
		return false;
	}
	if(rows*cols % 2 !== 0){
		alert('Please enter row-cols combination in even numbers.');
		document.getElementById('rows').focus();
		return false;
	}
	return true;
}

function createGrid(){
	randomNumbers = [];
	document.getElementsByTagName('h2')[0].style.display='none';
	rows = document.getElementById('rows').value;
	cols = document.getElementById('cols').value;
	if(validateInputs(rows,cols) == true){
		genarateRandomNumbers();
		addNumbers();	
	}
}

function genarateRandomNumbers(){
	var i,len = rows * cols;
	for(i=0;i<len;i++){
		getRandomNumber(1,((rows * cols ) / 2));
	}
}

function createGridBox(rows,cols){
	var i,j;
	var table = document.getElementsByTagName('table')[0];
	table.innerHTML = '';
	var index = 0;
	for(i=0;i<rows;i++){
		var row =  document.createElement('tr');
		for(j=0;j<cols;j++){
			var col = document.createElement('td');
			col.id='col'+i+j;
			col.innerHTML = randomNumbers[index];
			addCallback(col);
			row.appendChild(col);
			index++;
		}
		table.appendChild(row);
	}
}

var lastObj = null;
function addCallback(td){
	td.addEventListener('click', function(obj){
		obj.target.className = 'activeTd';
		if(!lastObj){
			lastObj = obj.target;
		}
		else if(lastObj.innerHTML == obj.target.innerHTML){
			setTimeout(function(){
				obj.target.className = lastObj.className = 'complete';
				checkGameStatus();
				lastObj = null;
			},200);
		}
		else{
			lastObj.className = obj.target.className = '';
			lastObj = null;
		}
	});
}

function checkGameStatus(){
	if(document.querySelectorAll("table td[class='complete']").length == rows*cols){
		document.getElementsByTagName('h2')[0].style.display='block';
		clearDoc();
	}
}

function clearDoc(){
	document.getElementsByTagName('table')[0].innerHTML = '';
	document.getElementById('rows').value = '';
	document.getElementById('cols').value = '';
}

function addNumbers(){
	var i,j;
	
	// get the occurance and remove the key that comes more than 2 times 
	var len = randomNumbers.length,
		hasarray = [],
		max = (rows * cols ) / 2;
	
	for(i=1;i<=max;i++){
		var counter = 0;
		for(j=0;j<len;j++){
			if(randomNumbers[j] === i){
				counter++;
			}
			if(randomNumbers[j] === i && counter > 2){
				randomNumbers.splice(j,1);
				j-=1;
			}
		}
		hasarray.push({
			'key':i,
			'value':counter
		});
	}
	
	// find the numbers that is != 2
	var nottwo = [];
	for(i in hasarray){
		if(hasarray[i].value !== 2){
			nottwo.push({
				'key': hasarray[i].key,
				'value': hasarray[i].value
			})
		}
	}

	// push items that comes 0 time
	for(i in nottwo){
		if(nottwo[i].value === 0){
			randomNumbers.push(nottwo[i].key);
			randomNumbers.push(nottwo[i].key);
		}
	}

	// push items that comes only once
	for(i in hasarray){
		if(hasarray[i].value == 1){
			randomNumbers.push(hasarray[i].key);
		}
	}

	// now, add new values to grid
	createGridBox(rows,cols);
}