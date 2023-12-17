    // url shortener algo
    const url = "https://mobalytics.gg/blog/baldurs-gate-3/best-classes-tier-list-rankings/"
    
    const urlShort = (longURL = '') => {
        const obj = {}
        const shortURL = `short.ly/${longURL.replace(/[^a-z]/g,'').slice(-4)}`
        if(!obj[shortURL]){
            obj[shortURL] = longURL
        }
        return shortURL
    }
    // const urlRedirector = (shortURL = '') => {
    //     return obj[shortURL]
    // }
    const short = urlShort(url)
    // const original = urlRedirector(short);
    // console.log(`${short} shorted`)
    // console.log(`${original} original`)

    console.log(short)