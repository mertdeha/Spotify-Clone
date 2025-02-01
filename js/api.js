const options = {
	method: 'GET',
	headers: {
		'x-rapidapi-key': '1360098d52msh827a16b8e6844dbp1c7dbbjsn8ff5b0d45905',
		'x-rapidapi-host': 'shazam.p.rapidapi.com',
	}
};

export class API {
   //! popular songs api dan alan fonksiyon
   async getPopular() {
      //   const url = 'https://shazam.p.rapidapi.com/search?term=neffex';

      //  const response= await fetch(url, options)
      //  const data = await response.json()

      //  const formattedData= data.tracks.hits.map((item)=> item.track)
       
      //  return formattedData;

      const data = await this.searchMusic("eminem")
      const data1 = await this.searchMusic("rihanna")
      const data2 = data.concat(data1)
      return data2
      // return [...data, ...data1, ...data2]; concat alternatifi
    }


   //!  arama sonucnu api dan alan fonk
   async searchMusic(query) {
      const url = `https://shazam.p.rapidapi.com/search?term=${query}`;
      const res = await fetch(url, options)
      const data = await res.json()
     
      // veriyi uygun şekle dönüştür
     const formattedData = data.tracks.hits.map((item) => item.track)
      return formattedData
   }
} 