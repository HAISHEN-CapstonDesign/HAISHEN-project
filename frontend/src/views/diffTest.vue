<!--
<template>
<div id="app">
  <label><input type="radio" name="diff_type" value="diffChars" checked> Chars</label>
<label><input type="radio" name="diff_type" value="diffWords"> Words</label>
<label><input type="radio" name="diff_type" value="diffLines"> Lines</label>
<label><input type='radio' name='diff_type' value='diffCss'> CSS</label>

<textarea id='a'>Foo bar is equal to bar foz.</textarea> <textarea id='b'>Foo bar is not equal to bar foo.</textarea>
<div id='result'></div>
</div>
</template>
<script>
//import Diff from 'diff'
export default {
  components:{
    Diff,
  },
  data(){
    return{
      one : 'beep boop',
      other : 'beep boob blah',
      color : '',
    }
  }, 
  mounted(){
    
let span = null;

const diff = Diff.diffChars(this.one, this.other),
    display = document.getElementById('display'),
    fragment = document.createDocumentFragment();

diff.forEach((part) => {
  // green for additions, red for deletions
  // grey for common parts
  const color = part.added ? 'green' :
    part.removed ? 'red' : 'grey';
  span = document.createElement('span');
  span.style.color = color;
  span.appendChild(document
    .createTextNode(part.value));
  fragment.appendChild(span);
});

display.appendChild(fragment);
  },
}
</script>
-->