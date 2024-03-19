export const getGifs = async (category) => {
    const url = new URL('https://api.giphy.com/v1/gifs/search');
    url.searchParams.set('api_key', 'n811lD3W021nljWQqIRJB5u1gWfHpAii');
    url.searchParams.set('limit', 20);
    url.searchParams.set('offset', 0);
    url.searchParams.set('rating', 'g');
    url.searchParams.set('lang', 'es');
    url.searchParams.set('q', category);

    const resp = await fetch(url);
    const {data} = await resp.json();
 
    console.log(data);

    const gifs = data.map( img => ({
        id: img.id,
        title: img.title,
        url: img.images.downsized_medium.url
    }));
    
    return gifs;
}