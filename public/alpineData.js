document.addEventListener('alpine:init', () => {
    Alpine.data('BootcampWidgetAPI', () => ({
      longestWord: '',
      shortestWord: '',
      wordLengths: '',
      sentence: '',
      split: '',
      billMessage: '',
      billReturn: '',
      usage: '',
      available: '',
  
      checkSentence() {
        axios
          .get(`http://localhost:3011/api/wordgame?codex=${this.sentence}`)
          .then(result => {
            this.longestWord = result.data.longestWord;
            this.shortestWord = result.data.shortestWord;
            this.wordLengths = result.data.wordLengths;
          })
          .catch(error => alert(error));
      },
      phonebill() {
        axios
          .post('/api/phonebill/total', { bill: this.billReturn })
          .then(result => {
            this.billMessage = `Total: $${result.data.total}`;
          })
          .catch(error => alert(error));
      },
      enoughAirtime() {
        axios
          .post('api/enough', { usage: this.usage, available: this.available })
          .then(result => {
            this.billMessage = `Total Bill: $${result.data.result}`;
          })
          .catch(error => alert(error));
      },
    })); 
  });