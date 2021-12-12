import React,{useEffect,useState} from 'react';
import axios from "axios";
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
ChartJS.register(ArcElement, Tooltip, Legend);



const DoughnutChart=()=>{
    var data1;
     
    const [value, setValue] = React.useState('');
    function fetchData(){
    
        fetch('https://trashoutservice.azurewebsites.net/api/v1/metrics/getAllWetWasteProcessed').then(
          (response) => {
  
            data1 = response.json();
            var p = Promise.resolve(data1);
            p.then(function(values) {
               setValue(values);
            });
            
           
  
  
       });
    }
    useEffect(()=>{
        fetchData();
        
      },[])  
      
       
    
       
      console.log(value.wetwaste);
      console.log(value.biogas);

   

     

    const data={
        labels:['wet waste','Biogas'],
        datasets:[
            {
                label:'Biogas Generation',
                data:[value.wetwaste,value.biogas],
                backgroundColor:[
                    // 'rgba(255,99,132,1)',
                    // 'rgba(255,205,86,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    // 'rgba(153,102,255,1)'

                ],
                height:300,
                width:300
            }
           
        ]
    }
  
    const options={
        title:{
            display:true,
            text:''
        }
    }
    return (
       
    <Doughnut data={data} options={options}/>
    )
}


export default DoughnutChart;