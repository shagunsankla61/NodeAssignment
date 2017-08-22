      //Reading of File
      const readline = require('readline')
      const fs = require('fs')
      const rl = readline.createInterface({
        input: fs.createReadStream('crimedata.csv','utf-8')
      });
      //Writting of File into json format
      let myfile2=fs.createWriteStream('PieChartFile.json');
      let myfile1=fs.createWriteStream('BarChartFile.json');
      let myfile=fs.createWriteStream('LineChartFile.json');
      let a =0;
      let year=[];

      for (i=2001;i<=2016;i++)
      {
          year[i-2001]=i;
      }
      let output1={},output2={},output3={},robbery = [],burglary=[], damagetovehicle=[],damagetostate=[],damagetoproperty=[];
      let cATEMPTARMEDKNIFECUTINSTR=[],cAGGRAVATEDVEHICULARHIJACKING=[],cSTRONGARMNOWEAPON=[],cARMEDHANDGUN=[],cARMEDOTHERDANGEROUSWEAPON=[],cARMEDKNIFECUTTINGINSTRUMENT=[],cAGGRAVATED=[],cVEHICULARHIJACKING=[],cATTEMPTSTRONGARMNOWEAPON=[],cATTEMPTARMEDOTHERDANGWEAP=[],cARMEDOTHERFIREARM=[],cATTEMPTAGGRAVATED=[],cATTEMPTARMEDHANDGU=[];
     for(i=0;i<16;i++)
      {
      robbery[i]=0;burglary[i]=0;damagetovehicle[i]=0;damagetoproperty[i]=0;damagetostate[i]=0;
      cATEMPTARMEDKNIFECUTINSTR[i]=0;cAGGRAVATEDVEHICULARHIJACKING[i]=0;cSTRONGARMNOWEAPON[i]=0;cARMEDHANDGUN[i]=0;cARMEDOTHERDANGEROUSWEAPON[i]=0;cARMEDKNIFECUTTINGINSTRUMENT[i]=0;cAGGRAVATED[i]=0;cVEHICULARHIJACKING[i]=0;cATTEMPTSTRONGARMNOWEAPON[i]=0;cATTEMPTARMEDOTHERDANGWEAP[i]=0;cARMEDOTHERFIREARM[i]=0;cATTEMPTAGGRAVATED[i]=0;cATTEMPTARMEDHANDGU[i]=0;
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
          if(primary_type=="ROBBERY"){
            if(description =="ATTEMPT: ARMED-KNIFE/CUT INSTR"){
              a=year-2001;
              cATEMPTARMEDKNIFECUTINSTR[a]++;}
            if(description =="AGGRAVATED VEHICULAR HIJACKING"){
              a=year-2001;
              cAGGRAVATEDVEHICULARHIJACKING[a]++;}
            if(description =="STRONGARM - NO WEAPON"){
              a=year-2001;
              cSTRONGARMNOWEAPON[a]++;}
            if(description =="ARMED: HANDGUN"){
              a=year-2001;
              cARMEDHANDGUN[a]++;}
            if(description =="ARMED: OTHER DANGEROUS WEAPON"){
              a=year-2001;
              cARMEDOTHERDANGEROUSWEAPON[a]++;}
            if(description =="ARMED:KNIFE/CUTTING INSTRUMENT"){
              a=year-2001;
              cARMEDKNIFECUTTINGINSTRUMENT[a]++;}
            if(description =="AGGRAVATED"){
              a=year-2001;
              cAGGRAVATED[a]++;}
            if(description =="VEHICULAR HIJACKING"){
              a=year-2001;
              cVEHICULARHIJACKING[a]++;}
            if(description =="ATTEMPT: STRONGARM-NO WEAPON"){
              a=year-2001;
              cATTEMPTSTRONGARMNOWEAPON[a]++;}
            if(description =="ATTEMPT: ARMED-OTHER DANG WEAP"){
              a=year-2001;
              cATTEMPTARMEDOTHERDANGWEAP[a]++;}
            if(description =="ATTEMPT: ARMED-OTHER FIREARM"){
              a=year-2001;
              cARMEDOTHERFIREARM[a]++;}
            if(description =="ARMED: OTHER FIREARM"){
              a=year-2001;
              cARMEDOTHERFIREARM[a]++;}
            if(description =="ATTEMPT: AGGRAVATED"){
              a=year-2001;
              cATTEMPTAGGRAVATED[a]++;}
            if(description =="ATTEMPT: ARMED-HANDGUN"){
              a=year-2001;
              cATTEMPTARMEDHANDGU[a]++;}} }
            });
          //push the file in particular format
          rl.on('close' , function(){
          for(i in year){
              output2[year[i]]=[];
              output2[year[i]].push({"robbery": robbery[i],"burglary": burglary[i]});}
          myfile.write(JSON.stringify(output2,null,2));
          console.log('File1 written successfully...');
          for(i in year){
              output1[year[i]]=[];
              output1[year[i]].push({"Criminal Damage to vehicle ": damagetovehicle[i],"Criminal Damage to State Sup Prop": damagetostate[i],"Criminal Damage To Property": damagetoproperty[i]});
          }
          myfile1.write(JSON.stringify(output1,null,2));
          console.log('File2 written successfully...');
              for(i in year){
              output3[year[i]]=[];
              output3[year[i]].push({"ATTEMPT: ARMED-KNIFE/CUT INSTR":cATEMPTARMEDKNIFECUTINSTR[i],"AGGRAVATED VEHICULAR HIJACKING": cAGGRAVATEDVEHICULARHIJACKING[i],"STRONGARM - NO WEAPON": cSTRONGARMNOWEAPON[i],"ARMED: HANDGUN":cARMEDHANDGUN[i],"ARMED: OTHER DANGEROUS WEAPON":cARMEDOTHERDANGEROUSWEAPON[i],"ARMED:KNIFE/CUTTING INSTRUMENT":cARMEDKNIFECUTTINGINSTRUMENT[i],"AGGRAVATED":cAGGRAVATED[i],"VEHICULAR HIJACKING":cVEHICULARHIJACKING[i],"ATTEMPT: STRONGARM-NO WEAPON":cATTEMPTSTRONGARMNOWEAPON[i],"ATTEMPT: ARMED-OTHER DANG WEAP":cATTEMPTARMEDOTHERDANGWEAP[i],"ATTEMPT: ARMED-OTHER FIREARM":cARMEDOTHERFIREARM[i],"ARMED: OTHER FIREARM":cARMEDOTHERFIREARM[i],"ATTEMPT: AGGRAVATED":cATTEMPTAGGRAVATED[i],"ATTEMPT: ARMED-HANDGUN":cATTEMPTARMEDHANDGU[i]});
          }
          myfile2.write(JSON.stringify(output3,null,2));
          console.log('File3 written successfully...');

        });
          