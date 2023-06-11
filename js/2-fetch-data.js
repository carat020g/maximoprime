
function fetchCommonData(){
    return fetch('json/common.json')
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch language data (${response.status} ${response.statusText})`);
    }
    return response.json();
  })
  .catch((error) => {
    console.error('Error fetching language data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  });
  }

// Function to fetch language data
function fetchLanguageData(languageId) {
  // Define the mapping between language IDs and JSON file names
  let languageFiles = {
    en: 'json/english.json',
    ch: 'json/chinese.json',
    sp: 'json/spanish.json',
    fr: 'json/french.json',
    ge: 'json/german.json'
  };

  // Get the file name based on the language ID
  let fileName = languageFiles[languageId];

  // Return a promise that fetches the language data from the JSON file
  return fetch(fileName)
  .then((response) => {
    if (!response.ok) {
      throw new Error(`Failed to fetch language data (${response.status} ${response.statusText})`);
    }
    console.log("language is :");
    console.log(response);
    return response.json();
  })
  .catch((error) => {
    console.error('Error fetching language data:', error);
    throw error; // Rethrow the error to propagate it to the caller
  });
}