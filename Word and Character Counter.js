const textInput = document.getElementById('textInput');
const wordCount = document.getElementById('wordCount');
const charCount = document.getElementById('charCount');

textInput.addEventListener('input', function() {
    const text = this.value.trim();
    const words = text.split(/\s+/).filter(word => word !== '');
    const numWords = words.length;
    const numChars = text.length;
    
    wordCount.textContent = numWords;
    charCount.textContent = numChars;
});
