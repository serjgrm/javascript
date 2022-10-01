const inputGRN = document.querySelector('#grn');
      inputUSD = document.querySelector('#usd');



inputGRN.addEventListener('input',()=>{

    const request = new XMLHttpRequest();
    request.open('GET','js/js2/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    const data = JSON.parse(request.response); 
    inputUSD.value = (inputGRN.value/data.current.usd); 
});