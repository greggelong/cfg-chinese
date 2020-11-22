let rules = {
  "S": [
    ["Subjective", "Linking",  "Relative"],
    ["Subjective", "Possessing", "Belongings"]
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

   ]

  };