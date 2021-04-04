const formEmp = document.getElementById("formEmp");
const inputName = document.getElementById("name");
const inputEmail = document.getElementById("email");
const inputMobile = document.getElementById("mobile");
const tableBody = document.querySelector("#example tbody");

const submit = document.getElementById("submit");
const contIdEdit = document.getElementById("contIdEdit");

class Employee{
  constructor(id,name,email,mobile)
   {
          this.id=id;
          this.name=name;
          this.name=email;
          this.mobile=mobile;   
   }
    showData()
    {
     Employee.showHtml(this.id,this.name,this.email.this.mobile)
		return this;
    }
	 
	storeEmployee()
	{
		 const allData = JSON.parse(localStorage.getItem("employess")) ?? [];
		 allData.push({id:this.id,name:this.name,email:this.email,mobile:this.mobile});
         localStorage.setItem("employess",JSON.stringify(allData))	
	}
	
	static showAllEmployees()
	{
		if(localStorage.getItem("employess"))
			{
				JSON.parse(localStorage.getItem("employess")).forEach(item)=>Employee.showHtml(item.id,item.name,item.email,item.mobile)
				
			}
	}
	
	
	//update Element
	
	updatEmplyee(id)
	{
		const newItem ={id:id,name:this.name,email:this.email,mobile:this.mobile};
		const updatedData = JSON.parse(localStorage.getItem("employess")).map((item)=>{
			
			if(item.id==id)
				{
					
					return newItem;
					
				}
			
			return item;
		})
		localStorage.setItem("emploess".json.stringify(updatedData));
		
	}
	
		
	staic showHtml(id,name,email,mobile)
        {
	const trEl = document.createElement("tr")
      trEl.innerHTML =`
                  <tr role="row" class="odd">
                 <td>${name}</td>
                 <td>${email}</td>
                 <td>${mobile}</td>
                 <td>
        <button class="btn btn-danger delete" data-id="${id}">Delete</button>
        <button class="btn btn-info edit" data-id="${id}">
          Edit
        </button>
                   
                  </td>
              </tr>`
      tableBody.appendChild(trEl);
	
}

}

Employee.showAllEmployees();


formEmp.addEventListener("submit",(e)=>{
    e.preventDefault();
	
	
	if(!contIdEdit.value){
	   
	     let id = Math.floor(Math.random()*10000);
         const newEmp = new  Employee(id,inputName.value,inputEmail.value,inputMobile.value);
        newEmp.showData().storeEmployee(); 
        
	   
	   }
    else{
						 
			const id = contIdEdit.value;
		    const newEmp = new 
 Employee(id,inputName.value,inputEmail.value,inputMobile.value)
			newEmp.updateEmployee(id);
		submit.value="Store This Data";
		tableBody.innerHTML='';
		Employee.showAllEmployees();
						 
		}
	
	    inputName.value=''
        inputEmail.value=''
         inputMobile.value=''
})

tableBody.addEventListener("click",(e)=>{
	  
	  if(e.target.classList.contains("delete"))
		  {
			  //remove from loclstorage
			  console.log(+e.target.getAttribute("data-id"))
			  let id = +e.target.getAttribute("data-id");
			  let emps = JSON.parse(localStorage.getItem("employess"));
			  let newData = emps.filter(item=>item.id != id);
			  localStorage.setItem("employess",JSON.stringify(newData));
			  //remove from Html
			  e.target.parentElement.parentElement.remove();		
		  
		  }	
	
	if(e.target.classList.contains("edit"))
		  {
			  //remove from loclstorage
			 
			  let id = +e.target.getAttribute("data-id");
			  let item = JSON.parse(localStorage.getItem("employess")). find(item => item.id===id);
			  
			  inputName.value=item.name;
			  inputEmail.value=item.email;
			  inputMobile.value=item.mobile;
			  contIdEdit.value=id;
			  submit.value="Edit This Item";
			  
		  }	
	
})
						  
						  
						  
						  
						  
						  
						  
						  
						  
						  
						  
						  





















