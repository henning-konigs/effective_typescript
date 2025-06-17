const checkedFetch: typeof fetch = async (input, init) => {
    const response = await fetch(input,init)
    if (!response.ok){
        throw new Error(`Request Failed: ${response.status}`)
    }
    return response
}

async function fetchANumber(...args:Parameters<typeof fetch>): Promise<Number> {
    const response = await checkedFetch(...args)
    const num = Number(await response.text())
    if (isNaN(num)){
        throw new Error('Response was not a number')
    }
    return num
}