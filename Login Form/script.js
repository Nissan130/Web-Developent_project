document.getElementById('btn').addEventListener('click',function(e){
    e.preventDefault();
    let info = document.querySelector('.information');
    info.classList.toggle('active');
   function  displayInformation(){
    let name = document.getElementById('name').value;
    let phn = document.getElementById('phn').value;

    document.getElementById('displayName').innerHTML="Your name is: "+name;
    document.getElementById('displayMobile').innerHTML="Your mobile is: "+phn;
    

    }
    displayInformation();

});

