import {Request,Response} from 'express';

const users = [
     {name : "Elon Musk", age : 52, ceo : ["Tesla","SpaceX","NeuraLink"],fortuna : 250000000000},
     {name : "Jeff Bezos",age : 58, ceo : ["Amazon","Blue Origin"], fortuna : 150000000000},
     {name : "Bill Gates",age : 65, ceo : ["Amazon","Blue Origin"], fortuna : 110000000000},
     {name : "Larry Ellison",age : 78, ceo : ["Oracle"], fortuna : 87000000000}
    

]

export const sayHello = async(req:Request,res:Response) => {
    return res.status(200).json({message : 'Hello World'});
}

export const getAllUser = async (req:Request,res:Response) => {
     return res.status(200).json(users);
}