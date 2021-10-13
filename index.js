const form = document.querySelector("#employee-form")
const nameInput = document.querySelector("#name")
const departmentInput = document.querySelector("#department")
const salaryInput = document.querySelector("#salary")
const employeeslist = document.querySelector("#employees")
const updateEmployee = document.querySelector("#update")
let updatevalue=null

const ui = new UI()
const request = new Request("https://my-json-server.typicode.com/tarikgurcan/employee-add-remove-edit/db/employees")
//request.postData({name:"Burak Demirel",department:"Sporcu",salary:"10000"}).then(resolve=>console.log(resolve));
//request.deleteData(2).then(resolve=>console.log(resolve))

EventListener()

function EventListener() {
    document.addEventListener("DOMContentLoaded", setDatas)
    form.addEventListener("submit", addOne)
    employeeslist.addEventListener("click", deleteOne)
    updateEmployee.addEventListener("click",updatenewEmployee)
}


function setDatas() {
    fetch("https://my-json-server.typicode.com/tarikgurcan/employee-add-remove-edit/db").then(resolve=>resolve.json()).then(result=>console.log(result))
    request.getData().then(resolve => ui.setAlldatas(resolve)).catch(err => console.log(err))
}
function addOne(e) {
    console.log("asdfg")
    let inputName = nameInput.value;
    let inputdepartment = departmentInput.value;
    let inputsalary = salaryInput.value;

    if (inputName == "" || inputdepartment == "" || inputsalary == "") {
        alert("Boş bırakmayınız")
    }
    else {
        request.postData({ name: inputName, department: inputdepartment, salary: Number(inputsalary) }).then(resolve => ui.addEmployeeUI(resolve));
    }
    ui.clearinput();
    e.preventDefault();

}
function deleteOne(e) {
    let deleteid = e.target.parentElement.parentElement.childNodes[7].textContent
    if (e.target.id === "delete-employee") {
        request.deleteData(deleteid).then(resolve => console.log(resolve))
        ui.deleteEmployeeUI(e.target.parentElement.parentElement)
    }
    else if(e.target.id==="update-employee"){
        ui.updateEmployeeUI(e.target.parentElement.parentElement)
        updatevalue= Number(e.target.parentElement.parentElement.childNodes[7].textContent)
       console.log(employeeslist.children[0])

    }

    e.preventDefault();
}
function updatenewEmployee(e){
    let newinputName = nameInput.value;
    let newinputdepartment = departmentInput.value;
    let newinputsalary = salaryInput.value;
    if (newinputName == "" || newinputdepartment == "" || newinputsalary == "") {
        alert("Boş bırakmayınız")
    }
    else {
        request.putData({name: newinputName, department: newinputdepartment, salary: Number(newinputsalary)},updatevalue)
        .then(resolve => ui.secondUpdate(resolve,updatevalue));
    }
    ui.clearinput();



    e.preventDefault();
}