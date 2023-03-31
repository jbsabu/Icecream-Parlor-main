import {client} from "../index.js"
import { icecreamCollection } from "../index.js";
import {products} from './products.js'

const addIcecream = async (obj) => {
  try {
    //await client.connect()
    const addedIcecream = await icecreamCollection.insertOne(obj);
    console.log(obj);
  } catch (error) {
    console.log(error) 
  } finally {
   // await client.close()
  }
  }
  
  //addIcecream()

  // products.forEach(element => {
  //   addIcecream(element)
  // });



const updateOne = async (key,field,candidateKey,setValue)=>{
    await client.connect()
    const filter = {name:"Waffle Cone"}
    const updateFilter =   {$set: {
     flavor: 'Vanilla'
    }}
    const addedObj = await icecreamCollection.findOneAndUpdate(filter,updateFilter)
    .then(result => console.log(result))
    .catch(err=>  console.log(err))
    
  await client.close()
}

console.log(updateOne("name","Waffle Cone","flavor","Vanilla"))