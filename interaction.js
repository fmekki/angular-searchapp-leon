// $(document).ready(function() {
//     // console.clear();
//     Tipped.create('#discount-tooltip', '% (from 00:00h of flight) x 03:00h');

//     console.log("JS Working");
//     window.sr = ScrollReveal();
//     sr.reveal('.wow');
//     var integer = 1;
//     function timeConverter(UNIX_timestamp){
//       var a = new Date(UNIX_timestamp * 1000);
//       var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
//       var year = a.getFullYear();
//       var month = months[a.getMonth()];
//       var date = a.getDate();
//       var hour = a.getHours();
//       var min = a.getMinutes();
//       // var sec = a.getSeconds();
//       var time = date + ' ' + month + ' ' + year + ' ' + hour + ':' + min;
//       return time;
//     }
//     function showResult(options) {
//         var resultswrap = document.getElementById("resultswrap");
      
//         // console.log(integer);
//         for (var i = 0; i < options.length; i++) {
//             var container = document.createElement("div");
//             container.className = 'results_item cat-box2 wow';

//             var resultstext = document.createElement('h2');
//             resultstext.innerHTML = options[i].text;

//             var outerbutton = document.createElement("div");
//             outerbutton.className = 'results_item_select';

//             var selectbutton = document.createElement('h2');
//             selectbutton.innerHTML = "SELECT";
//             selectbutton.setAttribute("data-toggle", "modal");
//             var mymodal = "#myModal"+integer;

//             selectbutton.setAttribute("data-target", mymodal);
//             // console.log(mymodal);
//             container.appendChild(resultstext);
//             container.appendChild(outerbutton);
//             outerbutton.appendChild(selectbutton);
//             resultswrap.appendChild(container);
          


//             // Modal-wrapper
//             var modalcontainer = document.createElement("div");
//             modalcontainer.id = 'myModal'+integer;
//             // console.log(modalcontainer.id);
//             modalcontainer.role = 'dialog';
//             modalcontainer.className = 'modal fade';
//             // Modal-dialog
//             var modaldialog = document.createElement("div");
//             modaldialog.className = 'modal-dialog';
//             // Modal-content
//             var modalcontent = document.createElement("div");
//             modalcontent.className = 'modal-content';
//             // Modal-header
//             var modalheader = document.createElement("div");
//             modalheader.className = 'modal-header';
//                 var headerbutton = document.createElement('BUTTON');
//                 headerbutton.type = "button";
//                 headerbutton.className = "close";
//                 headerbutton.setAttribute("data-dismiss", "modal");
//                 headerbutton.innerHTML = "&times;";
//                 var headerbtn = document.createElement('h4');
//                 headerbtn.innerHTML = options[i].modaltext.toString();
//             // Modal-body
//             var modalbody = document.createElement("div");
//             modalbody.className = 'modal-body';
//             // Modal-bodytxt
//             var modalbodytxt = document.createElement('div');
//             modalbodytxt.innerHTML = options[i].modaltext.toString();
//             // 



//             var form_wrapper = document.createElement("div");
//             form_wrapper.className = 'form_wrapper';
//             var formitem_wrapper = document.createElement("div");
//             formitem_wrapper.className = 'formitem_wrapper';

//             var formitem_label = document.createElement("div");
//                 formitem_label.className = 'formitem_label';
//                 formitem_label.innerHTML = "Quotation No.";
//             var formitem_quote = document.createElement("input");
//                 formitem_quote.className = 'formitem_quote';
//                 formitem_quote.setAttribute("type", "text");
//                 formitem_quote.setAttribute("placeholder", "Enter Info");
//                 formitem_quote.setAttribute("name", "quotation_number");

//             var form_wrapper1 = document.createElement("div");
//             form_wrapper1.className = 'form_wrapper';
//             var formitem_wrapper1 = document.createElement("div");
//             formitem_wrapper1.className = 'formitem_wrapper';
//             var formitem_label1 = document.createElement("div");
//                 formitem_label1.className = 'formitem_label';
//                 formitem_label1.innerHTML = "Sales Reference";
//             var formitem_quote1 = document.createElement("input");
//                 formitem_quote1.className = 'formitem_quote';
//                 formitem_quote1.setAttribute("type", "text");
//                 formitem_quote1.setAttribute("placeholder", "Enter Info");
//                 formitem_quote1.setAttribute("name", "sales");

//             var form_wrapper2 = document.createElement("div");
//             form_wrapper2.className = 'form_wrapper';
//             var formitem_wrapper2 = document.createElement("div");
//             formitem_wrapper2.className = 'formitem_wrapper';
//             var formitem_label2 = document.createElement("div");
//                 formitem_label2.className = 'formitem_label';
//                 formitem_label2.innerHTML = "ID Number";
//             var formitem_quote2 = document.createElement("input");
//                 formitem_quote2.className = 'formitem_quote';
//                 formitem_quote2.setAttribute("type", "text");
//                 formitem_quote2.setAttribute("placeholder", "Enter Info");
//                 formitem_quote2.setAttribute("name", "idnumber");

//             var form_wrapper3 = document.createElement("div");
//             form_wrapper3.className = 'form_wrapper';
//             var formitem_wrapper3 = document.createElement("div");
//             formitem_wrapper3.className = 'formitem_wrapper';
//             var formitem_label3 = document.createElement("div");
//                 formitem_label3.className = 'formitem_label';
//                 formitem_label3.innerHTML = "Supervisor";
//             var formitem_quote3 = document.createElement("input");
//                 formitem_quote3.className = 'formitem_quote';
//                 formitem_quote3.setAttribute("type", "text");
//                 formitem_quote3.setAttribute("placeholder", "Enter Info");
//                 formitem_quote3.setAttribute("name", "supervisor");


//                 // var headerbutton = document.createElement('BUTTON');
//                 // headerbutton.type = "button";
//                 // headerbutton.className = "close";
//                 // headerbutton.setAttribute("data-dismiss", "modal");
//                 // headerbutton.innerHTML = "&times;";
//                 // var headerbtn = document.createElement('h4');
//                 // headerbtn.innerHTML = "Flight Itenerary";



//                     var modalbodytxt = document.createElement("div");
//                     modalbodytxt.className = 'modal-bodytxt';
//             // Modal-footer
//             var modalfooter = document.createElement("div");
//             modalfooter.className = 'modal-footer';
          

//             // Appending
//             modalwrapper.appendChild(modalcontainer);
//              modalcontainer.appendChild(modaldialog);
//               modaldialog.appendChild(modalcontent);
//                modalcontent.appendChild(modalheader);
//                  modalheader.appendChild(headerbtn); 
//                  //Body 
//                  modalcontent.appendChild(modalbody);
//                  modalbody.appendChild(form_wrapper);
//                  // modalbody.appendChild(form_wrapper1);
//                     modalbody.appendChild(modalbodytxt);
//                     // Formitem 1
//                     form_wrapper.appendChild(formitem_wrapper)
//                         formitem_wrapper.appendChild(formitem_label);
//                         formitem_wrapper.appendChild(formitem_quote);

//                     form_wrapper.appendChild(formitem_wrapper1)
//                         formitem_wrapper1.appendChild(formitem_label1);
//                         formitem_wrapper1.appendChild(formitem_quote1);
//                     form_wrapper.appendChild(formitem_wrapper2)
//                         formitem_wrapper2.appendChild(formitem_label2);
//                         formitem_wrapper2.appendChild(formitem_quote2);
//                     form_wrapper.appendChild(formitem_wrapper3)
//                         formitem_wrapper3.appendChild(formitem_label3);
//                         formitem_wrapper3.appendChild(formitem_quote3);

//                  modalcontent.appendChild(modalfooter);
//                     modalfooter.appendChild(headerbutton);


//                     integer++;
//         }
//     }
//     function showSeperator(options) {
//         var resultswrap = document.getElementById("resultswrap");
//         var modalwrapper = document.getElementById("modalwrapper");
//         for (var i = 0; i < options.length; i++) {
//             var container = document.createElement("div");
//             container.className = 'results_item2 cat-box2 wow noborder';
//             var resultstext = document.createElement('h2');
//             resultstext.innerHTML = options[i].text;
//             container.appendChild(resultstext);
//             resultswrap.appendChild(container);


//         }
//     }


 

//     $('#submit_day_alg').click(function(event) {

//         event.preventDefault();
//         console.log("Success, entering...");
//         $("#loading").css("opacity", "1");
//         $.ajax({
//             type: "POST",
//             url: "leon.php",
//             data: $("#dayForm_alg").serialize(),
//             error: function(data) {
//                 console.log("Error please try again");
//                 $("#loading").css("opacity", "0");

//             },
//             success: function(json) {

//                 // console.log("Success, entering...");
//                 // console.log(json);
//                 var flight_coords_collection = [];
//                 console.log("Number of flights found: "+json.result.flights.length);
              
  

              
//                 var optiontext =  "Date: " + document.getElementById("date").value + "&nbsp; &nbsp; &nbsp; Number of flights found: "+json.result.flights.length;
//                 console.log(optiontext);
//                 var options = [{
//                         text: optiontext
//                 }];

//                 showSeperator(options);

//                 for (var i = 0; i < json.result.flights.length; i++){
//                     flight_coords_collection.push(json.result.flights[i]);

//                     console.log(flight_coords_collection[i]);
//                     var optiontext = 
//                     flight_coords_collection[i].begCity + " [ " +
//                     flight_coords_collection[i].begIata + " , " +
//                     flight_coords_collection[i].begIcao + " ]  > " +
//                     flight_coords_collection[i].endCIty + " [ " +
//                     flight_coords_collection[i].endIata + " , " +
//                     flight_coords_collection[i].endIcao + " ] ";
                  
//                     var sta = flight_coords_collection[i].sta;
//                     sta = timeConverter(sta);
//                     var std = flight_coords_collection[i].std;
//                     std = timeConverter(std);
//                     // lesta = new Date(lesta * 1000).format('h:i:s');
//                     // console.log("Timestamp is: "+ lesta);
//                     var modaltext = 
//                     "Aircraft Type ID: " + flight_coords_collection[i].acftTypeId+"<br>"+
//                     "Beginning City: " + flight_coords_collection[i].begCity + "<br>" +
//                     "Beginning IATA: " + flight_coords_collection[i].begIata + "<br>" +
//                     "Beginning ICAO: " + flight_coords_collection[i].begIcao + "<br>" +
//                     "End City: " + flight_coords_collection[i].endCIty + "<br>" +
//                     "End IATA: " + flight_coords_collection[i].endIata + "<br>" +
//                     "End ICAO: " + flight_coords_collection[i].endIcao + "<br>" +
//                     "Registration: " + flight_coords_collection[i].registration + "<br>"+
//                     "Scheduled Time of Arrival: " + sta + "<br>"+ 
//                     "Scheduled Time of Departure: " + std;



//                     var options = [{
//                         text: optiontext,
//                         modaltext: modaltext
//                     }];

//                     console.log()
//                     showResult(options);
//                 }$("#loading").css("opacity", "0");


//             }

//         });


//     });



// });
