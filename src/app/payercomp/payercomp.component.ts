import { Component, OnInit } from '@angular/core';
import { Users } from '../model/users';
import { stringify } from 'querystring';
@Component({
  selector: 'payercomp',
  templateUrl: './payercomp.component.html',
  styleUrls: ['./payercomp.component.css']
})
export class PayercompComponent  {
  plobj:Users=new Users;
  userlist:Array<Users>=[];
  error="";
  error1="";
  error2="";
  error3="";
  error4="";
  error5="";
  error6="";
  error7="";
  error8="";
  error9="";
  error10="";
  error11="";
  error12="";
  error13="";
  error14="";
pattern="string";

  //constructor() { }

  //ngOnInit() {
  //}
  pushArray()
  
  
  {try
  {
    if(this.plobj.payerName=="")
    {
      this.error="payerType is not required";
    }
    else if(this.plobj.payerType=="")
    {
      this.error1="payerType is not required";
    }
    if(this.plobj.payerCode=="")
    {
      this.error2="payerCode is not required ";
    }
    
    if(this.plobj.address=="")
    {
      this.error3="addressline1 is not required ";
    }
    
    if(this.plobj.addr=="")
    {
     this.error4="addressline2 is not required ";
    }
    
    if(this.plobj.city=="")
    {
      this.error5="city is not required ";
    }
    
    if(this.plobj.state=="")
   {
    this.error6="state is not required ";
   }
    if(this.plobj.zip=="")
    {

      this.error7="zip is not required ";
    }
    if(this.plobj.contact==""||this.plobj.contact.length!=10)
    {this.error8="contact is not required ";
  }
    if(this.plobj.fax=="")
{
  this.error9="fax is not required";
}
    if(this.plobj.email=="")
    {
      this.error10="email is not required ";
    }
    if(this.plobj.contactPerson=="")
 {
  this.error11="contactPerson is not required ";
 }
    if(this.plobj.require=="")
    {
      this.error12="require is not required ";
    }

    if(this.plobj.inactive=="")
    {
      this.error13="inactive is not required ";
    }
    

    if(this.plobj.comments=="")
 
{
  this.error14="comments is not required ";
}
    this.userlist.push(this.plobj);
  console.log(this.userlist);
  }
  catch(error)
  {
    console.log("JSON Error:"+error);
  }

}
}