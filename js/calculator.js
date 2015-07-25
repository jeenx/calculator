
var memory = '';

function init()
	{
		document.getElementById('clrEntry').addEventListener("click", clearEntry);
		document.getElementById('clr').addEventListener("click", clear);
		document.getElementById('opDivide').addEventListener("click", divide);
		document.getElementById('opMultiply').addEventListener("click", multiply);
		document.getElementById('opAdd').addEventListener("click", add);
		document.getElementById('opSubtract').addEventListener("click", subtract);
		document.getElementById('opEqual').addEventListener("click", equal)
		document.getElementById('n0').addEventListener("click", number0);
		document.getElementById('n1').addEventListener("click", number1);
		document.getElementById('n2').addEventListener("click", number2);
		document.getElementById('n3').addEventListener("click", number3);
		document.getElementById('n4').addEventListener("click", number4);
		document.getElementById('n5').addEventListener("click", number5);
		document.getElementById('n6').addEventListener("click", number6);
		document.getElementById('n7').addEventListener("click", number7);
		document.getElementById('n8').addEventListener("click", number8);
		document.getElementById('n9').addEventListener("click", number9);
	}
function clearEntry()
	{
		document.getElementById('display').value ='';
		return '';
	}
function clear()
	{	
		document.getElementById('display').value ='';
		memory = '';
		return '';
	}	
function divide()
	{
		equal();
		memory += '/';
		document.getElementById('display').value = '';
		return '/';
	}
function multiply()
	{
		equal();
		memory += '*';
		document.getElementById('display').value = '';
		return '*';
	}
function add()
	{
		equal();
		memory += '+';
		document.getElementById('display').value = '';
		return '+';
	}
function subtract()
	{
		equal();
		memory += '-';
		document.getElementById('display').value = '';
		return '-';
	}
function equal()
	{
		var result = eval(memory);
		document.getElementById('display').value = result;
		memory = result;
		return result;
	}
function number0()
	{
		document.getElementById('display').value += 0;
		memory += 0;
		return 0;
	}
function number1()
	{
		document.getElementById('display').value += 1;
		memory += 1;
		return 1;
	}
function number2()
	{
		document.getElementById('display').value += 2;
		memory += 2;
		return 2;
	}
function number3()
	{
		document.getElementById('display').value += 3;
		memory += 3;
		return 3;
	}
function number4()
	{
		document.getElementById('display').value += 4;
		memory += 4;
		return 4;
	}
function number5()
	{
		document.getElementById('display').value += 5;
		memory += 5;
		return 5;
	}
function number6()
	{
		document.getElementById('display').value += 6;
		memory += 6;
		return 6;
	}			
function number7()
	{
		document.getElementById('display').value += 7;
		memory += 7;
		return 7;
	}	
function number8()
	{
		document.getElementById('display').value += 8;
		memory += 8;
		return 8;
	}	
function number9()
	{
		document.getElementById('display').value += 9;
		memory += 9;
		return 9;
	}

window.addEventListener("load", init, false);

