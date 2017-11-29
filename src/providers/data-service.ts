import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Rx";
import {ENV} from '../app/env';
import {Model} from "../models/data";



@Injectable()
export class DataService {
  value: Model;
  value2:Model;
  datavalue:Model;
  constructor(public http: Http) {
  console.log("inside provider"+localStorage['salonid'])
  console.log("inside provider usertype"+localStorage['usertype'])
  this.value = new Model('all');
  this.value2=new Model('all');
  this.datavalue=new Model('all')
  }



  CustomerSalonList(categoryid):Observable<any>{
     return this.http.post(ENV.mainApi+'/customerSideSalonListing.json',
       {
         id:categoryid
       })
           .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
              })
  }

 add_employee(full_name,email,contact_number,salonid,category): Observable<any>{
  
 return this.http.post(ENV.mainApi+'/employeeAddBySalonOwner.json',
 {
                                                           full_name: full_name,
                                                        
                                                          email:email,
                                                          contact_number:contact_number,
                                                          user_type:2,
                                                          salon_id: localStorage['salonid'],
                                                          category:category
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})}




add_service(service_name,cost,time,description,id,emp_name ): Observable<any>{

 return this.http.post(ENV.mainApi+'/addServiceDescription.json',{

                                                          title: service_name,
                                                          cost:cost,
                                                          time:time,
                                                          description:description,
                                                          salon_id:localStorage['salonid'],
                                                        employee_id:id,
                                                         employee_name:emp_name 
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})
          }


getmyservicedata(saloon_id):Observable<any>{

return this.http.post(ENV.mainApi+'/viewAddServiceDescription.json',{
                                                salon_id:localStorage['salonid']


})

.timeout(ENV.timeout)
.map((data)=>{
  return data.json()
})
.catch(error => {
  return error
})
}


delete_service(id): Observable<any>{

 return this.http.post(ENV.mainApi+'/deleteServiceDescription.json',{
                                                          id: id,
                                                         
                                                        
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})
          }



viewbusinessinfo(id): Observable<any>{

  return this.http.post(ENV.mainApi+'/salonBussinessViewProfile.json',{
                                                  salon_id:id

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})


}
postbusinessinfo(lat,lng,salon_name,salon_adress,district,postalcode,salon_description,contact_number,website_name,parking_value,schedule,id,fb_url,insta_url,wheelchair_value,wifi_value,
):Observable<any>{

return this.http.post(ENV.mainApi+'/salonBussinessProfileEdit.json',{
               salon_name:salon_name,
               salon_description:salon_description,
               address:salon_adress,
               latitude:lat,
               longitude:lng,
               city:district,
               post_code:postalcode,
               contact_number:contact_number,
               schedule:schedule,
               website:website_name,
               parking:parking_value,
               salon_id:localStorage['salonid'],
               facebooklink:fb_url,
               instagramlink:insta_url,
               wifi:wifi_value,
               wheelchair:wheelchair_value


})
.timeout(ENV.timeout)
.map((data)=>{
 return data.json() 
})
.catch(error =>{
      return error
})
}

viewprofileinfo(user_id): Observable<any>{

  return this.http.post(ENV.mainApi+'/salonOwnerViewProfile.json',{
                                                  salon_id:localStorage['salonid'],

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})


}
editprofileinfo(owner_name,about_owner,email,mobile_number,user_id): Observable<any>{

  return this.http.post(ENV.mainApi+'/salonViewOwnerProfileEdit.json',{
                                                         full_name: owner_name,
                                                          contact_number:mobile_number,
                                                         email:email,
                                                        salon_description:about_owner,
                                                          salon_id:localStorage['salonid'],

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})


}

forgetpassword(email): Observable<any>{
   
  
  return this.http.post(ENV.mainApi+'/forgotPassword.json',{

                                              email:email
                                                        

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})
     

}

ContactUs(name,email,number,message): Observable<any>{
   
  
  return this.http.post(ENV.mainApi+'/contactUs.json',{

                                             name:name,
                                             email:email,
                                             contact_number:number,
                                             your_message:message,
                                             usertype:localStorage['usertype']

                                                        

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})
     

}

AboutUs(): Observable<any>{

  return this.http.get(ENV.mainApi+'/aboutUs.json')
   .timeout(ENV.timeout)
   .map((data)=>{
       return data.json()
   })
.catch(error =>{
      return error
})
     

}

Faq(): Observable<any>{


  return this.http.get(ENV.mainApi+'/manageFaq.json')
   .timeout(ENV.timeout)
   .map((data)=>{
       return data.json()
   })
    .catch(error =>{
      return error
    })
     

}

EmployeeListing(salonid): Observable<any>{

  return this.http.post(ENV.mainApi+'/customerSideEmployeeListing.json',{

                                                salon_id:salonid,
  })
   .timeout(ENV.timeout)
   .map((data)=>{
       return data.json()
   })
    .catch(error =>{
      return error
    })
  
}

// CategoryList(): Observable<any>{
    
//     return this.http.get(ENV.mainApi+'/customerSideCategories.json')
//    .timeout(ENV.timeout)
//    .map((data)=>{
//        return data.json()
//    })
//     .catch(error =>{
//       return error
//     })

// }







//salon-owner edit profile


viewprofileimage(user_id): Observable<any>{

  return this.http.post(ENV.mainApi+'/salonImageById.json',{
                                                  salon_id:localStorage['salonid']

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})


}

view_employee_list(user_id): Observable<any>{

 return this.http.post(ENV.mainApi+'/customerSideEmployeeListing.json',{
                                                  salon_id:localStorage['salonid']

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})



}
viewgalleryimage(user_id): Observable<any>{

  return this.http.post(ENV.mainApi+'/salonGalleryImageView.json',{
                                                  salon_id:localStorage['salonid']

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})


}

     edit_service(service_name,cost,time,description,service_id ): Observable<any>{

 return this.http.post(ENV.mainApi+'/serviceDescriptionEdit.json',{
                                                          title: service_name,
                                                          cost:cost,
                                                          time:time,
                                                          description:description,
                                                          salon_id:localStorage['salonid'],
                                                        service_id:service_id 
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})
          }

FavList(){

    
 return this.http.post(ENV.mainApi+'/showFavouriteSalon.json',{

                                                          customer_id:localStorage['customerid'],
                                                         
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})
}


Customersalonlisting(){



}

customerSideSalonServices(salonid){
 
 return this.http.post(ENV.mainApi+'/customerSideSalonServicesListing.json',{

                                                          salon_id:salonid,
                                                         
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})


}


addtofavourite(salonid){

  return this.http.post(ENV.mainApi+'/addFavouritesalon.json',{

                                                          salon_id:salonid,
                                                       customer_id:localStorage['customerid'],
                                                         
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})
    

}


Customeraddservices(serviceid){

return this.http.post(ENV.mainApi+'/customerAddServicesSave.json',{

                                                          service_id:serviceid,
                                                       customer_id:localStorage['customerid']
                                                         
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})


}

Moreserviceslist(){


  return this.http.post(ENV.mainApi+'/customerAddServicesGetById.json',{

                                                          
                                                       customer_id:localStorage['customerid']
                                                         
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})

}


Deleteaddedservices(id){

return this.http.post(ENV.mainApi+'/customerAddServicesDelete.json',{

                                                          
                                                       id:id
                                                         
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})

}
customerbooking(serviceids,myDate,myDate2,salonid,selecteddate,employeeid){

return this.http.post(ENV.mainApi+'/customerAppointment.json',{

                                               customer_id:localStorage['customerid'],
                                               service_id:serviceids,
                                               starttime:myDate,
                                               endtime:myDate2,
                                               salon_id:salonid,
                                               selecteddate:selecteddate,
                                               employee_id:employeeid
                                                                                                 
                                                          
                                                      })
                                                        
            .timeout(ENV.timeout)
            .map((data)=>{
              return data.json()
            })
            .catch(error => {
              return error
})

}

Customeraddreview(salonid,comment,count){
  return this.http.post(ENV.mainApi+'/customerSalonRating.json',{
                                                  customer_id:localStorage['customerid'],
                                                  salon_id:salonid,
                                                  comment:comment,
                                                  rating_count:count
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})
}

paymentsuccess(note,bookingid,transactionid,transsaction_status,totalcost,salonid,employeeid,onlinebooking,paystatus){
return this.http.post(ENV.mainApi+'/paymentDataSaved.json',{
                                                  note:note,
                                                  customer_id:localStorage['customerid'],
                                                  booking_id:bookingid,
                                                  transaction_id:transactionid,
                                                  transactionstatus:transsaction_status,
                                                  total_amount:totalcost,
                                                  employee_id:employeeid,
                                                  salon_id:salonid,
                                                  online_payment:onlinebooking,
                                                  paystatus:paystatus

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})

}

Salonimages(salonid){

return this.http.post(ENV.mainApi+'/salonGalleryImageView.json',{
                                                  salon_id:salonid,
                                                 
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})




}


employeestatus(Status_active){
  return this.http.post(ENV.mainApi+'/employeeOnlineOfflineStatus.json',{
                                                  employee_online_status:Status_active,
                                                  employee_id:localStorage['employeeid']
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})

}
employeestatusstatuscheck(): Observable<any>{

  return this.http.post(ENV.mainApi+'/employeeOnlineOfflineStatusInfo.json',{
                                               
                                                  employee_id:localStorage['employeeid']
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})

}

MySalonNotification(){

return this.http.post(ENV.mainApi+'/bookingInfo.json',{
           salon_id:localStorage['salonid']
})
.timeout(ENV.timeout)
.map((data) =>{

return data.json()

})
.catch(error =>{
     return error

})




}


CustomerbookingList(){
  return this.http.post(ENV.mainApi+'/customerAppointmentList.json',{
                                               
         customer_id:localStorage['customerid'],
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})

}
EmployeebookingList(){
   return this.http.post(ENV.mainApi+'/employeeAppointmentList.json',{
                                               
         employee_id:localStorage['employeeid'],
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})
}
 ResetCount(payment_id,array_index){

return this.http.post(ENV.mainApi+'/notificationSeen.json',{
payment_id:payment_id,
array_index:array_index


})
.timeout(ENV.timeout)
.map((data) =>{

return data.json()

})
.catch(error =>{
     return error

})
}


AcceptBooking(payment_id,booking_status){
return this.http.post(ENV.mainApi+'/bookingConfirmBySalonOwner.json',{
payment_id:payment_id,
booking_confirm_status:booking_status

})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

})

}
DeclineBooking(payment_id,booking_status){
return this.http.post(ENV.mainApi+'/bookingConfirmBySalonOwner.json',{
payment_id:payment_id,
booking_confirm_status:booking_status

})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

})

}

Paymentstatus(){
 return this.http.post(ENV.mainApi+'/customerPaymentData.json',{
customer_id:localStorage['customerid'],


})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 
}

TermsandCondition(){
return this.http.get(ENV.mainApi+'/termsConditions.json')
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 


}
CustomerNotification(){
  
return this.http.post(ENV.mainApi+'/customerSideNotification.json',{
customer_id:localStorage['customerid'],


})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 

}

Howitworks(){

return this.http.get(ENV.mainApi+'/howItWorks.json')
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 


}
EmployeeNotification(){

  
return this.http.post(ENV.mainApi+'/employeeSideNotification.json',{
employee_id:localStorage['employeeid'],


})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 



}
Facebook(email,username,fbid,usertype,img): Observable<any>{
         
return this.http.post(ENV.mainApi+'/facebookLogin.json',{
email:email,
full_name:username,
facebook_id:fbid,
profile_image:img,
usertype:usertype


})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 


}
 send_push_notification(salon_name,service,id){

  return this.http.post(ENV.mainApi+'/pushNotification.json',{
salonname:salon_name,
salonservices:service,
salon_id:id



})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 





 }

myclient(){
   return this.http.post(ENV.mainApi+'/customerAppointmentBySalonIdLastDate.json',{

        salon_id:localStorage['salonid']



})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 

 }
delete_staff(emp_id){

   return this.http.post(ENV.mainApi+'/deleteEmployeeByEmployeeId.json',{

        employee_id:emp_id



})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 



}
EmployeeClientListing(): Observable<any>{

  return this.http.post(ENV.mainApi+'/customerAppointmentByEmployeeId.json',{

                                                employee_id: localStorage['employeeid'],
  })
   .timeout(ENV.timeout)
   .map((data)=>{
       return data.json()
   })
    .catch(error =>{
      return error
    })
  
}

subscription_plan(salon_id,staff_member,transcation_id,transcation_amount){
 return this.http.post(ENV.mainApi+'/salonSideSubscriptionPayment.json',{

      salon_id:salon_id,
      staffmember:staff_member     ,
      transaction_id:transcation_id   ,
      transaction_amount:transcation_amount

})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 



}

AccountSettingStatus(salonid){

  return this.http.post(ENV.mainApi+'/accountSettingsGetBySalonId.json',{
  salon_id:salonid
    })
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 

 }
// account_settings(online_booking,schedule_appointment,

// hours_notice_for_online_booking,
//  hours_notice_for_cancel_booking){
// return this.http.post(ENV.mainApi+'/accountSettings.json',{

//         online_booking:online_booking,
//       schedule_appointment:schedule_appointment,
     
//       hours_notice_for_online_booking: hours_notice_for_online_booking,
//       hours_notice_for_cancel_booking:hours_notice_for_cancel_booking,
//        salon_id:localStorage['salonid']
// })
//     .timeout(ENV.timeout)
//     .map((data) =>{
//      return data.json()
// })
//     .catch(error =>{
//      return error

// }) 

// }
account_settings(online_booking,schedule_appointment,visibility,availability,

hours_notice_for_online_booking,
 hours_notice_for_cancel_booking){
return this.http.post(ENV.mainApi+'/accountSettings.json',{

        online_booking:online_booking,
      schedule_appointment:schedule_appointment,
    salon_visibility :visibility,
    my_availability:availability,
      hours_notice_for_online_booking: hours_notice_for_online_booking,
      hours_notice_for_cancel_booking:hours_notice_for_cancel_booking,
       salon_id:localStorage['salonid']
})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 

}
pendingpayment(paymentid,cost,transactionid,transactionstatus){
return this.http.post(ENV.mainApi+'/paymentSuccessCancelStatusUpdated.json',{
payment_success_cancel_status:1,
payment_id:paymentid,
transaction_id:transactionid,
cost:cost,
transactionstatus:transactionstatus,
paystatus:1 ,
booking_confirm_status:1   
})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 
}

CancelBooking(paymentid){
return this.http.post(ENV.mainApi+'/paymentSuccessCancelStatusUpdated.json',{
payment_success_cancel_status:2,
payment_id:paymentid,
paystatus:2,
booking_confirm_status:2
       
})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 
}
get_account_settings(){
return this.http.post(ENV.mainApi+'/accountSettingsGetBySalonId.json',{

      
       salon_id:localStorage['salonid']
})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 





}
get_appointment_data(): Observable<any>{

 return this.http.post(ENV.mainApi+'/customerAppointmentBySalonId.json',{
                                                  salon_id:localStorage['salonid']

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})
}

CustomerAppointmentByServices(servicearray){
 return this.http.post(ENV.mainApi+'/getCustomerAppointmentDataByServiceId.json',{
                                                  service_id:servicearray

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
}) 
}
EmployeeBookingCounts(){
  return this.http.post(ENV.mainApi+'/employeeBookingCount',{
                                                  employee_id: localStorage['employeeid']

 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
}) 
}
EmployeeCancelBooking(paymentid,paystatus){
 return this.http.post(ENV.mainApi+'/employeeBookingSuccessAndCancelStatusUpdated.json',{
                                                  payment_id:paymentid,
                               payment_success_cancel_status:2,
                               paystatus:2,
                               booking_confirm_status:2
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})  
}
EmployeeConfirmBooking(paymentid,paystatus){
   return this.http.post(ENV.mainApi+'/employeeBookingSuccessAndCancelStatusUpdated.json',{
                               payment_id:paymentid,
                               payment_success_cancel_status:0,
                               paystatus:0,
                               booking_confirm_status:1
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})  
}
Customertimeslots(salonid){
   return this.http.post(ENV.mainApi+'/customerSideTimeSlot.json',{
                               salon_id:salonid,
                              
 })
   .timeout(ENV.timeout)
   .map((data)=>{
return data.json()
   })
.catch(error =>{
      return error
})  
}
delete_gallery_image(image_name,id){

return this.http.post(ENV.mainApi+'/deleteGalleryImageByNameAndId.json',{

      
       id:id,
       image:image_name
})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 


}
getcustomerCalendarAppointments(){

return this.http.post(ENV.mainApi+'/salonAppointmentByCustomerId.json',{

      
       customer_id:localStorage['customerid']
})
    .timeout(ENV.timeout)
    .map((data) =>{
     return data.json()
})
    .catch(error =>{
     return error

}) 


}
}
