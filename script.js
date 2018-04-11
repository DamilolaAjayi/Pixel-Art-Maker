let canvas = $('#pixelCanvas');
const sizePicker = $('#createCanvas');

$(document).ready(function(){
	function makeGrid(){
        canvas.text(''); //reset Design Canvas
		let gridHeight = $('#inputHeight').val();
		let gridWidth = $('#inputWidth').val();
	
		for( let i=1; i <= gridHeight; i++){
			let row = $('<tr></tr>');

				for(let j = 0; j < gridWidth; j++) {
					row.append($('<td></td>'));	
				}

			canvas.append(row);
		}
	}
	sizePicker.on('click', (e) => {
		e.preventDefault();
    makeGrid();
  })
});

function colorCell(e){
	 let color ='';
	 switch(e.buttons){
		 case 1: //add colour to the cell if user clicks on it with left mouse key
		 color= $('#colorPicker').val(); 
		 break;
		 case 2: //remove colour from cell if user right clicks on cell
		 color = '#ffffff'; 
		 break;
	 }
	 if ( color!== ''){
		 $(this).css('background-color',color);
	 }
}

canvas.on('mousedown mouseover contextmenu', 'td', colorCell);
