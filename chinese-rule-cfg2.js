let rules = {
  "S": [
    ["Subjective", "Linking",  "Relative"], //13
    ["Subjective", "Possessing", "Belongings"], //14
    ["locationIn", "ExistingY", "Subjective"],  //15
    ["locationOn", "ExistingY", "Subjective"], //15  change location on to only be things 
    ["Subjective", "ExistingZ", "locationIn"],  //16
    ["Subjective", "ExistingZ", "locationOn"]  //16  that way you wont get silly things like artists on book shelves
  ],
  "Subjective": [
    ["Pronoun"],
    ["PropName"],
    ["Possessive", "Nthing"],
    ["Possessive", "Adj", "Nthing"],
    ["Nperson"],
    ["Nthing"]
  ],

  "Relative": [
    ["Pronoun"],
    ["Possessive", "Nthing"],
    ["Possessive", "Adj", "Nthing"],
    ["PropName"],
    ["Nperson"],
    ["Nthing"]
  ],
     
  "Linking": [ 
    ["是"],  
  ],

  "Possessing": [ 
    ["有"],  
  ],

  "ExistingY": [ 
    ["有"],  
  ],

  "ExistingZ": [ 
    ["在"],  
  ],

  
  "Pronoun":[ 
    ["这"],  
    ["那"],
    ["什么"],
    ["我"],
    ["你"],
    ["他"],  
    ["她"],
    ["他们"],
    ["这个"],
    ["谁"],
    ["它"],  
    ["你们"]

   ],


   "Possessive":[ 
    ["他的"],  
    ["她的"],
    ["我的"],
    ["你的"],
    ["他们的"],
    ["你们的"],  
    ["它的"],
     
   ],

   "Nperson":[     // nouns have people nouns as well as non people nouns could be expanded but need to chnage h
     
       // above in the hierarchy of rules as well
       // i have changed it !
     
     
    ["老师"],
    ["医生"],  
    ["学生"],
    ["艺术家"],
    ["魔术家"],
    ["律师"],
    ["画家"],
    ["作家"],
    ["政治家"],
    ["数学家"],
    

   ],


   "Nthing":[   // Belongings are non people nouns
    ["书"],  
    ["西瓜"],
    ["电脑"],
    ["手机"],
    ["帽子"],
    ["钥匙"],
    ["毛笔"],
     

   ],

   "PropName":[ 
    ["玛丽"],  
    ["哥龙"],
    ["Cuko"],
    ["Sapa"],
    ["Deki"],
    ["Vladislava"],  
    ["Grla"],
     

   ],


   "Adj":[ 
    ["红"],  
    ["黑"],
    ["蓝"],
    ["旧"],
    ["新"],
    ["好"],  
    ["大"],
    ["小"],
     

   ],

   "Belongings":[   // Belongings are non people nouns
    ["Nthing"],   

   ],

   "locationOn":[   // location on takes its own nouns and shang
    ["NplaceOn", "上"],   

   ],


   "NplaceOn":[ 
    ["桌子"],  
    ["椅子"],
    ["书架"],
    ["床"]
     
     

   ],

   "locationIn":[   // location in takes its own nouns and li
    ["NplaceIn", "里"],


   ],

   "NplaceIn":[ 
    ["厨房"],  
    ["超市"],
    ["画室"],
    ["房子"],
    ["卧室"],  
    ["学校"],
    ["办公室"],
     

   ],

  };