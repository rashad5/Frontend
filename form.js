const form = document.querySelector('.form');
    const clearbtn = document.querySelector('.clear');
    const delform = document.querySelector('.delform');
    const did = document.querySelector('.did');
    form.addEventListener('submit', function (e) {
        e.preventDefault();
        
        const cid = form.querySelector('.cid').value;
        const name = form.querySelector('.name').value;
        const surname = form.querySelector('.surname').value;
        const password = form.querySelector('.password').value;


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
        };
        console.log(user);

       axios.post("https://back-1ztj.onrender.com/users", user);

    });


    delform.addEventListener('submit' , function(e) {
        e.preventDefault();
        console.log(did);
         axios.delete(`https://back-1ztj.onrender.com/users/${did.value}`);

    } );


    clearbtn.addEventListener('click', function () {
        form.reset();
    });
    