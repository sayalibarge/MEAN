let register = async () => {

    const user = document.querySelector('#uname').value;
    const password = document.querySelector('#pass').value;

    let url = `http://localhost:8080/enter?uname=${user}&pass=${pass}`;

    await fetch(url);

};