var oneRow = '';

for (var i = 1; i < 10; i++) {
	for (var j = 1; j < 10; j++) {
			oneRow  += (j*i) + " ";       
		}
    console.log(i + " x");
    console.log();
    console.log(oneRow);
		oneRow = '';
} 


