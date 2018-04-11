let canvas = $('#pixelCanvas');
const sizePicker = $('#createCanvas');

$(document).ready(function(){
	function makeGrid(){
        canvas.text('');
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

function colorCell(evt){
	 let color ='';
	 switch(evt.buttons){
		 case 1: 
		 color= $('#colorPicker').val();
		 break;
		 case 2:
		 color = '#ffffff';
		 break;
	 }
	 if ( color!== ''){
		 $(this).css('background-color',color);
	 }
}

canvas.on('mousedown mouseover contextmenu', 'td', colorCell);
