import {useState} from 'react';

export default function useEditButtonService(defaultDescription:string){
    const [description,setDescription] = useState(defaultDescription)
    return {
        description,
        setDescription
    }
}
