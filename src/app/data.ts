// var json = {
//     "Name": "Global Feature",
//     "Enabled": true,
//     "Childs": [
//         {
//             "Name": "Feature A",
//             "Enabled": true,
//             "Childs": [
//                 {
//                     "Name": "Feature A1",
//                     "Enabled": false,
//                     "Childs": [            
//                         {
//                             "Name": "Feature AA",
//                             "Enabled": false,
//                             "Childs": [] 
//                         }
//                     ]
//                 },
//                 {
//                     "Name": "Feature A2",
//                     "Enabled": true,
//                     "Childs": []
//                 }
//             ]
//         },
//         {
//             "Name": "Feature B",
//             "Enabled": false,
//             "Childs": []
//         }
//     ],
//   }
      const MyNode = function (this: any) {
        // this.a = a;
        // this.b = b;
        this.item = "";
        this.children = [];
        
    };
  
    //   var output = parse_constructor(json);
    //   console.log(output);
  
      export function parse_constructor(input: { Name: string | number; Childs: { [x: string]: any; }; }){
         
        //  var output = new MyNode();

         let output = new (MyNode as any)();
         
         output.item = input.Name;
         
         for(var i in input.Childs){
             output.children.push(
                 parse_constructor(input.Childs[i])
             );
         }


         return output;
      }
  

    //   export function parseData(dData: { Name: string | number; Childs: { [x: string]: any; }; }){
    //     let data = parse_constructor(dData);
    //     console.log("234567890",data)
    //    constructNewData(data);
    //   }

    //   function constructNewData(data:any){
    //     // console.log("sfsdf",data)

    //     for(var i in data){
    //         // output[input.Name].push(
    //         //     parse_constructor(input.Childs[i])
    //         // );
    //         console.log(data[i])
    //         constructNewData(data[i])
    //     }
    //   }
  