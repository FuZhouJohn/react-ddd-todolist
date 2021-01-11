export function mockRequestData<T>(data:T){
    return new Promise<T>((resolve,_)=>{
        setTimeout(()=>{
            resolve(data)
        },1000)
    })
}
