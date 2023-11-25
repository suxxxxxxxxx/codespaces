//把金数据的2200条数据拿到的写法
const getJindata = async () => {
    let res = []
    let count = 50;
    let next = 0;
    //while + 请求40次是很恐怖的
    while(count ==50){
        let url = `https://jinshuju.net/api/v1/forms/${FID}/entries?next=`
        if(next){
            url = `${url}?next=${next}` 
        }
        const rawData = await fetch(url, {
            headers: {
                
            }
        })
        const data = await rawData.json()
        count = data.count
        res = res.concat(data.data)
    }
}