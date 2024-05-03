function checkAge() {
  const ageField = document.getElementById('age');
  const ageText = ageField.value;
  const errorTag = document.getElementById('error');

  try {
    const age = parseInt(ageText);

    if (isNaN(age)) {
      throw "Please enter a valid number";
    }

    else if (age < 18) {
      throw "Below 18 not allowed";
    }

    else if (age > 30) {
      throw "Over 30 not allowed"
    }

    else {
      errorTag.innerText = '';
    }
  }
  
  catch (err) {
    console.log('ERROR', err);
    errorTag.innerText = 'Error ' + err;
  }

  finally {
    console.log('All done inside try catch');
  }
}