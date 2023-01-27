var button = document.getElementById('button');
var show = document.getElementById('hide');
var shoo = document.getElementById('show');
var prevPic = document.getElementById('prev_pic');
var origin = document.getElementById('pic');
var two = document.getElementById('two');
var three = document.getElementById('three');
var nextPic = document.getElementById('next_pic');
let currentPic;
var rebutton = document.getElementById('restore');
var survey = document.getElementById('survey');

function changePic() {
        origin.style.display = 'none';
        two.style.display = 'block';
        nextPic.style.visibility = 'hidden';
        prevPic.style.visibility = 'visible';
}

nextPic.addEventListener('click', changePic);

function changeBack() {
    two.style.display = 'none';
    origin.style.display = 'block';
    nextPic.style.visibility = 'visible';
    prevPic.style.visibility = 'hidden';
}

prevPic.addEventListener('click', changeBack);

function chooseHideNext() {
        nextPic.style.display = 'none';
    }

function appear() {
        show.style.display = 'block';
        shoo.style.display = 'block';
        button.style.display = 'none';
        rebutton.style.visibility = 'visible';
        survey.style.visibility = 'visible';
        
    }
    
        button.addEventListener('click', appear);

        function disappear() {
            show.style.display = 'none';
            shoo.style.display = 'none';
            rebutton.style.visibility = 'hidden';
            button.style.display = 'block';
            survey.style.visibility = 'hidden';
        }

    rebutton.addEventListener('click', disappear);
    

