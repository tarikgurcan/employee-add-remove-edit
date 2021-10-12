export class UI {
    constructor() {
        this.employeeslist = document.querySelector("#employees")
        this.clname = document.querySelector("#name")
        this.cldepart = document.querySelector("#department")
        this.clslary = document.querySelector("#salary")
        this.updatebtn=document.querySelector("#update")
    }
    setAlldatas(employee) {
        let result = ""
        employee.forEach(employee => {
            result += `<tr>                                  
            <td>${employee.name}</td>
            <td>${employee.department}</td>
            <td>${employee.salary}</td>
            <td>${employee.id}</td>
            <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
            <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
        </tr>`
        });
        this.employeeslist.innerHTML = result;
    }
    clearinput(){
        this.clname.value=""
        this.cldepart.value=""
        this.clslary.value=""

    }
    addEmployeeUI(employee) {

        this.employeeslist.innerHTML+=`<tr>                                  
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>`


    }

    deleteEmployeeUI(selected){
        selected.remove();
    }

    updateEmployeeUI(selected){
        if(this.updatebtn.style.display=="block"){
            this.updatebtn.style.display="none"
            this.clearinput();
        }
        else if (this.updatebtn.style.display=="none"){
            this.updatebtn.style.display="block"
            this.clname.value=selected.childNodes[1].textContent
            this.cldepart.value=selected.childNodes[3].textContent
            this.clslary.value=selected.childNodes[5].textContent
        }
            
            
    }
    secondUpdate(employee,id){
        this.employeeslist.children[id-1].innerHTML=`<tr>                                  
        <td>${employee.name}</td>
        <td>${employee.department}</td>
        <td>${employee.salary}</td>
        <td>${employee.id}</td>
        <td><a href="#" id = "update-employee" class= "btn btn-danger">Güncelle</a></td> 
        <td> <a href="#" id = "delete-employee" class= "btn btn-danger">Sil</a></td>
    </tr>`
    }

}