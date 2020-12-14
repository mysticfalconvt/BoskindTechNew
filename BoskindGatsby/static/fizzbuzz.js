const FBRange = document.getElementById('FBRange');
const FBTable = document.getElementById('FizzBuzzTable');

function isFizzBuzz(number) {
  output = '';
  if (number % 3 === 0) {
    output += 'Fizz';
  }
  if (number % 5 === 0) {
    output += 'Buzz';
  }
  if (output === '') {
    output = i.toString(10);
  }
  return output;
}

function FizzBuzz(number, tableName) {
  for (i = 1; i <= number; i++) {
    console.log(isFizzBuzz(i));
    const newRow = document.createElement('tr');
    const itemOne = document.createElement('td');
    const FBItem = document.createElement('td');
    itemOne.innerText = i;
    FBItem.innerText = isFizzBuzz(i);
    newRow.appendChild(itemOne);
    newRow.appendChild(FBItem);
    tableName.appendChild(newRow);
  }
}
FBRange.addEventListener('keydown', function (e) {
  if (e.keyCode == 13) {
    FBTable.innerHTML = '';
    FizzBuzz(parseInt(FBRange.value), FBTable);
  }
});
