      //Reading of File
      const readline = require('readline')
      const fs = require('fs')
      const rl = readline.createInterface({
        input: fs.createReadStream('crimedata.csv','utf-8')
      });
      //Writting of File into json format
      let myfile2=fs.createWriteStream('./../json/piechartfile.json');
      let myfile1=fs.createWriteStream('./../json/barchartfile.json');
      let myfile=fs.createWriteStream('./../json/linechartfile.json');
      let year=[];
      for (i=2001;i<=2016;i++) 
      {
          year[i-2001]=i;
      }
      let output1=[],output2=[],output3=[],robbery = [],burglary=[], damagetovehicle=[],damagetostate=[],damagetoproperty=[];
          
           for(i=0;i<16;i++)
      {
      robbery[i]=0;burglary[i]=0;damagetovehicle[i]=0;damagetoproperty[i]=0;damagetostate[i]=0;
     
      }
    rl.on('line', (line) => {
          line.split('\n')
          let  arr=line.split(/,(?![^"]*"(?:(?:[^"]*"){2})*[^"]*$)/);
       if(arr.includes("Year"))
         yearindex=arr.indexOf("Year");
       if(arr.includes("Primary Type"))
         primaryindex=arr.indexOf("Primary Type");
       if(arr.includes("Description"))
         descriptionindex=arr.indexOf("Description");

       let year=parseInt(arr[yearindex]);
       let primary_type=arr[primaryindex];
       let description=arr[descriptionindex];
//Checking Condition
          if(year>=2001&&year<=2016)
          {
           if(primary_type == "ROBBERY"){  
                a=year-2001;
                robbery[a]++;}
          if(primary_type == "BURGLARY") 
          {    a=year-2001;
               burglary[a]++;}
          if(primary_type == "CRIMINAL DAMAGE"&& description == "TO VEHICLE" ){
             a=year-2001;
             damagetovehicle[a]++;}
          if( primary_type == "CRIMINAL DAMAGE" && description == "TO STATE SUP PROP" ){
             a=year-2001;
             damagetostate[a]++;}
          if(primary_type == "CRIMINAL DAMAGE" && description == "TO PROPERTY"){
            a=year-2001;
            damagetoproperty[a]++; }
          } 
            });
          //push the file in json format
          rl.on('close' , function(){
          for(i in year){
              output1.push({"year":year[i],"robbery":robbery[i],"burglary":burglary[i]});
          }
          myfile.write(JSON.stringify(output1,null,2));
          console.log('Line chart file written successfully...');

          for(i in year){
              output2.push({"year":year[i],"Criminal_Damage_to_vehicle ": damagetovehicle[i],"Criminal_Damage_to_State_Sup_Prop": damagetostate[i],"Criminal_Damage_To_Property": damagetoproperty[i]});
          }
          myfile1.write(JSON.stringify(output2,null,2));
          console.log('Bar chart file written successfully...');

              for(i in year){
              output3.push({"year":year[i],"robbery":robbery[i]});
          }
          myfile2.write(JSON.stringify(output3,null,2));
          console.log('Pie chart file written successfully...');

        });
          