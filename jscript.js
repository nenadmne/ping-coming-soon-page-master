function verification(){
    let email = document.getElementById('email');
    let regex = new RegExp('^.+@.+\..+$');
    let isValid = regex.test (email.value);

    let parent = document.getElementById('input-div');
    let child = document.getElementById('para');
    let child1 = document.getElementById('falsepara');

    if (parent.contains(child) === false && isValid === true) {
        let parent = document.getElementById('input-div');

        let para = document.createElement('p');
        para.textContent = 'Email address is valid';
        para.id= 'para';
        para.style.color = 'green';

        document.getElementById('email').style.border='1px solid green';
        parent.appendChild(para);
            if (parent.contains(child1)) {
                parent.removeChild(child1)
            }
    }

    else if (parent.contains(child1) === false && isValid !== true) {
        let parent = document.getElementById('input-div');

        let falsepara = document.createElement('p');
        falsepara.textContent = 'Please provide a valid e-mail address';
        falsepara.id= 'falsepara';
        falsepara.style.color = 'red';

        document.getElementById('email').style.border='1px solid red';

        parent.appendChild(falsepara);
        if (parent.contains(child)) {
            parent.removeChild(child)
        }
    }
}

function clean(){
    let parent = document.getElementById('input-div');
    let child = document.getElementById('para');
    let child1 = document.getElementById('falsepara');

    if (parent.contains(child) === true){
        parent.removeChild(child);
        document.getElementById('email').style.border='1px solid hsl(223, 100%, 88%)';
    }
    else if (parent.contains(child1) === true){
        parent.removeChild(child1);
        document.getElementById('email').style.border='1px solid hsl(223, 100%, 88%)';
    }
}