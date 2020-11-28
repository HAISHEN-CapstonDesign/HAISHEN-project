<template>
  <v-btn @click="saveDocx">save</v-btn>
</template>
<script>
import { asBlob } from 'html-docx-js-typescript'
// if you want to save the docx file, you need import 'file-saver'
import { saveAs } from 'file-saver'

const htmlString = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Document</title>
</head>
<body>
  <h1>Welcome</h1>
</body>
</html>`

export default {
  mounted(){
    /*
    function downloadInnerHtml(filename, text) {
      var elHtml = document.getElementById(text).innerHTML;
      var link = document.createElement('a');
      link.setAttribute('download', filename);   
      link.setAttribute('href', 'data:' + 'application/vnd.ms-word' + ';charset=utf-8,' + encodeURIComponent(elHtml));
      link.click(); 
    }
    var fileName =  'test.docx'; // You can use the .txt extension if you want
    downloadInnerHtml(fileName, 'main');
  */
  },
  methods: {
    saveDocx() {
      asBlob(htmlString).then(data => {
        saveAs(data, 'file.docx') // save as docx file
      }) // asBlob() return Promise<Blob|Buffer>
    },
  },
}
</script>
<!--
<template>
<div>
  <script src="https://cdn.jsdelivr.net/npm/html-docx-js@0.3.1/dist/html-docx.js"></script>

<button id="export" onclick="exportDocxFile()">Export</button> Click to open table in Microsoft Word
<div id="docx">
    <h1>
        This is a test
    </h1>
    <p>
        Some paragraph text lorem ipsum
    </p>
    <p style='margin-top:0cm;margin-right:0cm;margin-bottom:.0001pt;margin-left:0cm;font-size:16px;font-family:"Times New Roman",serif;'>
        <span style="font-size:15px;">Date: <u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp;02/01/2020&nbsp; &nbsp; &nbsp; &nbsp;</u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;&nbsp;
            &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;&nbsp;Date: <u>&nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
                &nbsp; &nbsp; &nbsp; &nbsp;</u>
        </span>
    </p>
    <img width="100" src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiB2aWV3Qm94PSIwIDAgNDMyIDE1MCIgd2lkdGg9IjQzMiIgaGVpZ2h0PSIxNTAiPjxwYXRoIGQ9Ik0gNTAuNTEwLDMyLjM5OSBDIDU4LjUxMCwzMi4zOTkgNTguNTEwLDMyLjM5OSA2Ni41MTAsMzIuMzk5IiBzdHJva2Utd2lkdGg9IjUuMTY2IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDY2LjUxMCwzMi4zOTkgQyA3NS4wMTAsMzIuMzk5IDc1LjAxMCwzMi4zOTkgODMuNTEwLDMyLjM5OSIgc3Ryb2tlLXdpZHRoPSI0LjI0OCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA4My41MTAsMzIuMzk5IEMgOTAuNTEwLDMyLjM5OSA5MC41MTAsMzIuMzk5IDk3LjUxMCwzMi4zOTkiIHN0cm9rZS13aWR0aD0iMy40MjYiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gOTcuNTEwLDMyLjM5OSBDIDEwMy4wMTAsMzIuMzk5IDEwMy4wMTAsMzIuMzk5IDEwOC41MTAsMzIuMzk5IiBzdHJva2Utd2lkdGg9IjMuNDE5IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDEwOC41MTAsMzIuMzk5IEMgMTEzLjAxMCwzMi4zOTkgMTEzLjAxMCwzMi4zOTkgMTE3LjUxMCwzMi4zOTkiIHN0cm9rZS13aWR0aD0iNC4wNjMiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gODUuNTEwLDMwLjM5OSBDIDg1LjUxMCwzNS44OTkgODUuNTEwLDM1Ljg5OSA4NS41MTAsNDEuMzk5IiBzdHJva2Utd2lkdGg9IjUuMzQxIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDg1LjUxMCw0MS4zOTkgQyA4NS41MTAsNTAuODk5IDg1LjUxMCw1MC44OTkgODUuNTEwLDYwLjM5OSIgc3Ryb2tlLXdpZHRoPSIzLjEyOCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSA4NS41MTAsNjAuMzk5IEMgODUuNTEwLDY2LjM5OSA4NS41MTAsNjYuMzk5IDg1LjUxMCw3Mi4zOTkiIHN0cm9rZS13aWR0aD0iMy4yNDUiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gODUuNTEwLDcyLjM5OSBDIDg1LjUxMCw3Ni4zOTkgODUuNTEwLDc2LjM5OSA4NS41MTAsODAuMzk5IiBzdHJva2Utd2lkdGg9IjMuNjc0IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDg1LjUxMCw4MC4zOTkgQyA4NS41MTAsODUuODk5IDg1LjUxMCw4NS44OTkgODUuNTEwLDkxLjM5OSIgc3Ryb2tlLXdpZHRoPSIzLjQyOSIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxODEuNTEwLDc0LjM5OSBDIDE3Ni41MTAsNzQuMzk5IDE3Ni41MTAsNzQuMzk5IDE3MS41MTAsNzQuMzk5IiBzdHJva2Utd2lkdGg9IjUuMzY4IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDE3MS41MTAsNzQuMzk5IEMgMTY5LjAxMCw3NC4zOTkgMTY5LjAxMCw3NC4zOTkgMTY2LjUxMCw3NC4zOTkiIHN0cm9rZS13aWR0aD0iNC42MTAiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTY2LjUxMCw3NC4zOTkgQyAxNjMuNTEwLDc0LjM5OSAxNjMuNTEwLDc0LjM5OSAxNjAuNTEwLDc0LjM5OSIgc3Ryb2tlLXdpZHRoPSI0LjI4NCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxNjAuNTEwLDc0LjM5OSBDIDE1Ny41MTAsNzQuMzk5IDE1Ny41MTAsNzQuMzk5IDE1NC41MTAsNzQuMzk5IiBzdHJva2Utd2lkdGg9IjQuMTQ3IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDE1NC41MTAsNzQuMzk5IEMgMTUwLjAxMCw3NC4zOTkgMTQ5LjUwMiw3NS42MjcgMTQ1LjUxMCw3NC4zOTkiIHN0cm9rZS13aWR0aD0iNC4zMTQiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTQ1LjUxMCw3NC4zOTkgQyAxNDMuMDAyLDczLjYyNyAxNDIuNTcyLDcyLjc4OCAxNDEuNTEwLDcwLjM5OSIgc3Ryb2tlLXdpZHRoPSI0LjgwNiIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxNDEuNTEwLDcwLjM5OSBDIDE0MC41NzIsNjguMjg4IDE0MS4yMDEsNjcuODcxIDE0MS41MTAsNjUuMzk5IiBzdHJva2Utd2lkdGg9IjQuNDMwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDE0MS41MTAsNjUuMzk5IEMgMTQyLjIwMSw1OS44NzEgMTQxLjIwNCw1OS4yNjkgMTQzLjUxMCw1NC4zOTkiIHN0cm9rZS13aWR0aD0iNC4yNjciIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTQzLjUxMCw1NC4zOTkgQyAxNDUuNzA0LDQ5Ljc2OSAxNDYuNDQ2LDQ5LjcwMSAxNTAuNTEwLDQ2LjM5OSIgc3Ryb2tlLXdpZHRoPSI0LjI1OCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxNTAuNTEwLDQ2LjM5OSBDIDE1NC40NDYsNDMuMjAxIDE1NC44MjQsNDMuNDUwIDE1OS41MTAsNDEuMzk5IiBzdHJva2Utd2lkdGg9IjQuMjc5IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDE1OS41MTAsNDEuMzk5IEMgMTYyLjgyNCwzOS45NTAgMTYzLjkwOCwzOC4zNTggMTY2LjUxMCwzOS4zOTkiIHN0cm9rZS13aWR0aD0iNC43MDIiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTY2LjUxMCwzOS4zOTkgQyAxNjguOTA4LDQwLjM1OCAxNjkuNzI1LDQyLjM5OSAxNjkuNTEwLDQ1LjM5OSIgc3Ryb2tlLXdpZHRoPSI1LjA4MiIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxNjkuNTEwLDQ1LjM5OSBDIDE2OS4yMjUsNDkuMzk5IDE2Ny43MDAsNDkuNTA2IDE2NS41MTAsNTMuMzk5IiBzdHJva2Utd2lkdGg9IjQuOTk4IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDE2NS41MTAsNTMuMzk5IEMgMTYzLjIwMCw1Ny41MDYgMTYzLjI5Miw1Ny42MDYgMTYwLjUxMCw2MS4zOTkiIHN0cm9rZS13aWR0aD0iNC44MDkiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTYwLjUxMCw2MS4zOTkgQyAxNTcuNzkyLDY1LjEwNiAxNTcuNDI4LDY0LjgzMyAxNTQuNTEwLDY4LjM5OSIgc3Ryb2tlLXdpZHRoPSI0LjU1NCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxNTQuNTEwLDY4LjM5OSBDIDE1Mi45MjgsNzAuMzMzIDE1My4xNTMsNzAuNTIzIDE1MS41MTAsNzIuMzk5IiBzdHJva2Utd2lkdGg9IjQuNDA3IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDIyMC41MTAsNDIuMzk5IEMgMjE3LjUxMCw0Mi4zOTkgMjE3LjUxMCw0Mi4zOTkgMjE0LjUxMCw0Mi4zOTkiIHN0cm9rZS13aWR0aD0iNS40NjYiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjE0LjUxMCw0Mi4zOTkgQyAyMTEuNTEwLDQyLjM5OSAyMTEuNTEwLDQyLjM5OSAyMDguNTEwLDQyLjM5OSIgc3Ryb2tlLXdpZHRoPSI0LjQ3OSIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyMDguNTEwLDQyLjM5OSBDIDIwNi4wMTAsNDIuMzk5IDIwNi4wMTAsNDIuMzk5IDIwMy41MTAsNDIuMzk5IiBzdHJva2Utd2lkdGg9IjQuMzg2IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDIwMy41MTAsNDIuMzk5IEMgMjAwLjUxMCw0Mi4zOTkgMTk5LjAwNCw0MC42OTMgMTk3LjUxMCw0Mi4zOTkiIHN0cm9rZS13aWR0aD0iNC42NDEiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMTk3LjUxMCw0Mi4zOTkgQyAxOTUuNTA0LDQ0LjY5MyAxOTUuMzk1LDQ2LjgyOCAxOTYuNTEwLDUwLjM5OSIgc3Ryb2tlLXdpZHRoPSI0Ljk1MiIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAxOTYuNTEwLDUwLjM5OSBDIDE5Ny44OTUsNTQuODI4IDE5OS41MTAsNTQuMzk5IDIwMi41MTAsNTguMzk5IiBzdHJva2Utd2lkdGg9IjMuODcyIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDIwMi41MTAsNTguMzk5IEMgMjA0LjAxMCw2MC4zOTkgMjAzLjg0Miw2MC41NDUgMjA1LjUxMCw2Mi4zOTkiIHN0cm9rZS13aWR0aD0iNC4xOTMiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjA1LjUxMCw2Mi4zOTkgQyAyMDguMzQyLDY1LjU0NSAyMDguMzk1LDY1LjUyNCAyMTEuNTEwLDY4LjM5OSIgc3Ryb2tlLXdpZHRoPSIzLjg3NCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyMTEuNTEwLDY4LjM5OSBDIDIxNC44OTUsNzEuNTI0IDIxNC43MjMsNzEuODc0IDIxOC41MTAsNzQuMzk5IiBzdHJva2Utd2lkdGg9IjQuMjQ0IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDIxOC41MTAsNzQuMzk5IEMgMjIwLjcyMyw3NS44NzQgMjIzLjkyNSw3NS4zNjQgMjIzLjUxMCw3Ni4zOTkiIHN0cm9rZS13aWR0aD0iNC43OTUiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjIzLjUxMCw3Ni4zOTkgQyAyMjIuOTI1LDc3Ljg2NCAyMjAuMTI0LDc4LjI4NyAyMTYuNTEwLDc5LjM5OSIgc3Ryb2tlLXdpZHRoPSI1LjE4NiIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyMTYuNTEwLDc5LjM5OSBDIDIxMy42MjQsODAuMjg3IDIxMy41MTYsNzkuOTM3IDIxMC41MTAsODAuMzk5IiBzdHJva2Utd2lkdGg9IjQuODczIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDIxMC41MTAsODAuMzk5IEMgMjA3LjAxNiw4MC45MzcgMjA3LjAwNSw4MC44NjIgMjAzLjUxMCw4MS4zOTkiIHN0cm9rZS13aWR0aD0iNC43MTkiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjUyLjUxMCwyOC4zOTkgQyAyNTIuNTEwLDMyLjM5OSAyNTIuNTEwLDMyLjM5OSAyNTIuNTEwLDM2LjM5OSIgc3Ryb2tlLXdpZHRoPSI1LjQxNyIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyNTIuNTEwLDM2LjM5OSBDIDI1Mi41MTAsNDAuMzk5IDI1Mi41MTAsNDAuMzk5IDI1Mi41MTAsNDQuMzk5IiBzdHJva2Utd2lkdGg9IjQuNzYyIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDI1Mi41MTAsNDQuMzk5IEMgMjUyLjUxMCw0Ni44OTkgMjUyLjUxMCw0Ni44OTkgMjUyLjUxMCw0OS4zOTkiIHN0cm9rZS13aWR0aD0iNC44NjAiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjUyLjUxMCw0OS4zOTkgQyAyNTIuNTEwLDUyLjM5OSAyNTIuNTEwLDUyLjM5OSAyNTIuNTEwLDU1LjM5OSIgc3Ryb2tlLXdpZHRoPSI1LjA2NCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyNTIuNTEwLDU1LjM5OSBDIDI1Mi41MTAsNTguODk5IDI1Mi41MTAsNTguODk5IDI1Mi41MTAsNjIuMzk5IiBzdHJva2Utd2lkdGg9IjQuNzYwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDI1Mi41MTAsNjIuMzk5IEMgMjUyLjUxMCw2Ny4zOTkgMjUyLjUxMCw2Ny4zOTkgMjUyLjUxMCw3Mi4zOTkiIHN0cm9rZS13aWR0aD0iMy44MzYiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjUyLjUxMCw3Mi4zOTkgQyAyNTIuNTEwLDc0Ljg5OSAyNTIuNTEwLDc0Ljg5OSAyNTIuNTEwLDc3LjM5OSIgc3Ryb2tlLXdpZHRoPSI0LjE4MCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyNTIuNTEwLDc3LjM5OSBDIDI1Mi41MTAsODAuODk5IDI1Mi41MTAsODAuODk5IDI1Mi41MTAsODQuMzk5IiBzdHJva2Utd2lkdGg9IjQuMDQxIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDI1Mi41MTAsODQuMzk5IEMgMjUyLjUxMCw4Ny44OTkgMjUwLjkwNSw4OS4yNTkgMjUyLjUxMCw5MS4zOTkiIHN0cm9rZS13aWR0aD0iNC40NDMiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjUyLjUxMCw5MS4zOTkgQyAyNTMuOTA1LDkzLjI1OSAyNTUuNzY2LDkyLjk0OCAyNTguNTEwLDkyLjM5OSIgc3Ryb2tlLXdpZHRoPSI1LjEwOCIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyNTguNTEwLDkyLjM5OSBDIDI2MC43NjYsOTEuOTQ4IDI2MC43NjAsOTEuMTQ5IDI2Mi41MTAsODkuMzk5IiBzdHJva2Utd2lkdGg9IjQuOTUwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDI2Mi41MTAsODkuMzk5IEMgMjY0LjI2MCw4Ny42NDkgMjYzLjg1NCw4Ny4yNjMgMjY1LjUxMCw4NS4zOTkiIHN0cm9rZS13aWR0aD0iNC45MDQiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjY1LjUxMCw4NS4zOTkgQyAyNjcuODU0LDgyLjc2MyAyNjguMjU1LDgzLjEwNiAyNzAuNTEwLDgwLjM5OSIgc3Ryb2tlLXdpZHRoPSI0LjE1NiIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyNzAuNTEwLDgwLjM5OSBDIDI3My4yNTUsNzcuMTA2IDI3My4xMjYsNzYuOTc1IDI3NS41MTAsNzMuMzk5IiBzdHJva2Utd2lkdGg9IjQuNDAxIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDIzNS41MTAsNTEuMzk5IEMgMjM4LjUxMCw1MS4zOTkgMjM4LjUxMCw1MS4zOTkgMjQxLjUxMCw1MS4zOTkiIHN0cm9rZS13aWR0aD0iNS40ODgiIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjQxLjUxMCw1MS4zOTkgQyAyNDUuMDEwLDUxLjM5OSAyNDUuMDEwLDUxLjM5OSAyNDguNTEwLDUxLjM5OSIgc3Ryb2tlLXdpZHRoPSI0Ljg2NiIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyNDguNTEwLDUxLjM5OSBDIDI1MS4wMTAsNTEuMzk5IDI1MS4wMTAsNTEuMzk5IDI1My41MTAsNTEuMzk5IiBzdHJva2Utd2lkdGg9IjQuNDkwIiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48cGF0aCBkPSJNIDI1My41MTAsNTEuMzk5IEMgMjU3LjUxMCw1MS4zOTkgMjU3LjUxMCw1MS4zOTkgMjYxLjUxMCw1MS4zOTkiIHN0cm9rZS13aWR0aD0iNC40OTciIHN0cm9rZT0iYmxhY2siIGZpbGw9Im5vbmUiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCI+PC9wYXRoPjxwYXRoIGQ9Ik0gMjY1LjUxMCw1My4zOTkgQyAyNjguMDEwLDUzLjM5OSAyNzAuNTEwLDUzLjE1MiAyNzAuNTEwLDUzLjM5OSIgc3Ryb2tlLXdpZHRoPSI1LjU4MiIgc3Ryb2tlPSJibGFjayIgZmlsbD0ibm9uZSIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIj48L3BhdGg+PHBhdGggZD0iTSAyNzAuNTEwLDUzLjM5OSBDIDI3MC41MTAsNTMuNjUyIDI2OC4wMzcsNTQuMTcwIDI2NS41MTAsNTQuMzk5IiBzdHJva2Utd2lkdGg9IjUuNTE5IiBzdHJva2U9ImJsYWNrIiBmaWxsPSJub25lIiBzdHJva2UtbGluZWNhcD0icm91bmQiPjwvcGF0aD48L3N2Zz4=" />
</div>
</div>
</template>
<script>
//import { WidthType, BorderStyle, Document, Paragraph, Packer, TextRun } from "docx";
//import { saveAs } from 'file-saver';
export default {
  components: {
    //Document, Paragraph, Packer, TextRun, 
  //  saveAs, 
    //BorderStyle, WidthType
  },
  data: () => ({
    
  }),
  mounted(){
    var documentElement = document.getElementById("docx");

function exportDocxFile() {
    if (!window.Blob) {
        alert('Your legacy browser does not support this action.');
        return;
    }

    var processedDocumentElement = convertImagesToBase64(documentElement);

    var html = processedDocumentElement.innerHTML;
    var blob = htmlDocx.asBlob(html);
    
    var url = URL.createObjectURL(blob);
    var link = document.createElement('A');

    link.href = url;
    // Set default file name. 
    // Word will append file extension - do not add an extension here.
    link.download = 'Document';

    document.body.appendChild(link);

    if (navigator.msSaveOrOpenBlob) {
        navigator.msSaveOrOpenBlob(blob, 'Document.docx'); // IE10-11
    } else {
        link.click();  // other browsers
    }

    document.body.removeChild(link);
}

function convertImagesToBase64(targetDocumentElement) {
    var clonedDocumentElement = targetDocumentElement.cloneNode(true);
    
    var regularImages = targetDocumentElement.querySelectorAll("img");
    var clonedImages = clonedDocumentElement.querySelectorAll("img");
    var canvas = document.createElement('canvas');
    var ctx = canvas.getContext('2d');

    for (var i = 0; i < regularImages.length; i++) {
        var regularImgElement = regularImages[i];
        var clonedImgElement = clonedImages[i];

        ctx.clearRect(0, 0, canvas.width, canvas.height);

        canvas.width = regularImgElement.width;
        canvas.height = regularImgElement.height;

        ctx.scale(regularImgElement.width / regularImgElement.naturalWidth, regularImgElement.height / regularImgElement.naturalHeight);
        ctx.drawImage(regularImgElement, 0, 0);

        // by default toDataURL() produces png image, but you can also export to jpeg
        // checkout function's documentation for more details
        var dataURL = canvas.toDataURL();

        clonedImgElement.setAttribute('src', dataURL);
    }
    
    canvas.remove();

    return clonedDocumentElement;
}
  },
  methods: {

  },
}
</script>
-->