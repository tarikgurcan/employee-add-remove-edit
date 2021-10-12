export class Request{
    constructor(url){
        this.url=url
    }

    getData(){
        return new Promise((resolve,reject)=>{

            fetch(this.url)
            .then(result=>result.json()).then(data=>resolve(data))
            .catch(err=>reject(err))


        })    
    }
    postData(data){
        return new Promise((resolve,reject)=>{

            fetch(this.url,{
                method :"POST",
                body:JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
            })
            .then(result=>result.json()).then(data=>resolve(data))
            .catch(err=>reject(err))

        })  
        



    }
    putData(data,id){
        return new Promise((resolve,reject)=>{

            fetch(this.url+"/"+id,{
                method :"PUT",
                body:JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                  },
            })
            .then(result=>result.json()).then(data=>resolve(data))
            .catch(err=>reject(err))

        })  
    }
    deleteData(id){
        return new Promise((resolve,reject)=>{

            fetch(this.url+"/"+id,{
                method :"DELETE",
            })
            return (resolve("Başarıyla silindi")).catch(err=>reject(err))

        })  
    }
}