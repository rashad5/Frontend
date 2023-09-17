const form = document.querySelector('.form');
    const clearbtn = document.querySelector('.clear');
    const delform = document.querySelector('.fclear');

    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const cid = form.querySelector('.cid').value;
        const name = form.querySelector('.name').value;
        const surname = form.querySelector('.surname').value;
        const password = form.querySelector('.password').value;
        const address = form.querySelector('.address').value;


        if (name.length < 3) {
            alert('Adınız ən azı 3 hərfdən ibarət olmalıdır.');
            return;
        }

        if (surname.length < 3) {
            alert('Soyadınız ən azı 3 hərfdən ibarət olmalıdır.');
            return;
        }

        const user = {
            cid,
            name,
            surname,        
            password,
            address,
        };
        console.log(user);

       axios.post("https://api-2d7b.onrender.com/users", user);

        form.reset();
    });

    delform.addEventListener('click' , function(e) {
        e.preventDefault();
        axios.delete(`https://api-2d7b.onrender.com/users/${did.value}`);

    } );



    clearbtn.addEventListener('click', function () {
        form.reset();
    });
    