
const getCurrentDateTime = async (timeType) => {
  $("#result").empty();

  const { data } = await axios({
    method: 'get',
    url: `http://localhost:3030/date-time/${timeType}`,
    // url: `http://worldclockapi.com/api/json/${timeType}/now`,
    responseType: 'stream'
  })
  const keys = Object.keys(data);

  keys.forEach((key, index) => {

    //Creating HTML elements
    const p = document.createElement('p')
    const strong = document.createElement('strong')

    //Appending Elements to its HTML structures
    strong.append(`${key}: `)
    p.append(strong)
    p.append(data[key])
    $('#result').append(p)

  });
}

