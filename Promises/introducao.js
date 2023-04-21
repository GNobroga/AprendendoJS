`
    Promise:
        Eu prometo que vou executar uma ação. (resolve, reject)
`;


function returnPromise(){
    return new Promise((resolve, reject) => {

        const xhr = new XMLHttpRequest();
        xhr.open("GET", "url");
        xhr.send(null);

        xhr.onreadystatechange = () =>{

            if(xhr.readyStatus === 4){

                if(xhr.status >= 200 && xhr.status < 300){
                    resolve(JSON.parse(xhr.responseText));
                }else{
                    reject("Deu erro");
                }
            }
        };

    });
}


returnPromise()
    .then((resp) => console.log(resp))
    .catch((error) => console.log(error));