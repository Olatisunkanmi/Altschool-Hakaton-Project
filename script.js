// const { count } = require("console");


function startApp() {
   
    let name1 = document.querySelector("#name");
    let phoneNumber = document.querySelector(".phone-number");
    let result = document.querySelector("#display-msg");
    const search = document.querySelector(".btn-search");

    let deleteNumber = document.querySelector("#delete-num")
  
    // let regex = /^[+]?[\d]{1,3}[-]?[0-9]{3}[-]?[0-9]{3}[-]?[0-9]{4}$/;
    let regex = /^[\d]{4}[0-9]{7}$/;
  
    // function to validate a phone number using an event listener

 ((!name1.value == false) && (phoneNumber.value.match(regex))) 
    search.addEventListener("click", () => {
    
        console.log( verifyNetworkProvider( phoneNumber.value)
        )
      });

  
    // Function to assign the Appropriate Network Provider for the Inputed Function 
        const NetworkNumbers = {
        MTN : ["0803","0706", "0703", "0806", "0810", "0813", "0814", "0816", "0906", "0903", "0913" ],
        GLO : ["0805", "0807", "0811", "0705", "0815", "0905"],
        AIRTEL :[ "0802", "0808", "0812", "0701", "0708", "0902", "0907", "0901"],
        ETISALAT : ["0809", "0817", "0818", "0908", "0909" ]
        }

    function verifyNetworkProvider(phoneNumber) {
        let UserNumber = phoneNumber.slice(0, 5)
        console.log(UserNumber)
                        for (const prop in NetworkNumbers) {
                                NetworkNumbers[[prop]]
                                    for (let i = 0; i <   NetworkNumbers[[prop]].length; i++) {
                                        const element =   NetworkNumbers[[prop]][i];
                                            if ( UserNumber ==  element){
                                            
                                            return prop
                                            } 
                                            
                                    }
                            
                                    // while ( low <= high  ) {
                                    //     console.log(`mid ${mid}`)
                                    //     count ++
                                        
                                    //     if ( mid == UserNumber  ) {
                                    //         console.log('Equall')
                                    //         return mid;
                                    //          }   
                                    //     else if( mid <= UserNumber  ){
                                    //             low = ( mid + 1)
                                    //             console.log('low')

                                    //         }     
                                    //     else  if ( mid >= UserNumber  ) {
                                    //         high = (mid -1)
                                    //             console.log('high')
                                    //               }  
                                    //      else{
                                    //             console.log('Not Found ')
                                    //             return null;
                                    //         }
                                        
                                       
                                    // }

                                            // for (let i = 0; i <  NetworkNumbers[[prop]].length; i++) {
                                            //     const element =  NetworkNumbers[[prop]][i];

                                            //         if ( )
                                            // }
                                
                                     
                                    

                        }   
                    }
    }
  
startApp()