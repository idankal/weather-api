const playByteArray = (byteArray, numberOfSamples) => {
    sampleRate = 8000

    if (!window.AudioContext) {
        if (!window.webkitAudioContext) {
            alert("Your browser does not support any AudioContext and cannot play back this audio.")
            return
        }
        window.AudioContext = window.webkitAudioContext
    }

    var audioContext = new AudioContext()

    var buffer = audioContext.createBuffer(1, numberOfSamples, sampleRate)
    var buf = buffer.getChannelData(0)
    for (i = 0; i < byteArray.length; ++i) {
        buf[i] = byteArray[i]
    }

    const playByteArray = bytes => {
      var buffer = new Uint8Array(bytes.length)
      buffer.set( new Uint8Array(bytes), 0 )
      context.decodeAudioData(buffer.buffer, play)
    }

    const play = audioBuffer => {
      var source = context.createBufferSource()
      source.buffer = audioBuffer
      source.connect(context.destination)
      source.start(0)
    }
}

var saveAsFile = function(fileName, fileContents) {
  if (typeof(Blob) != 'undefined') {

    let audio = document.getElementById("a");
    downloadLink.download = fileName;
    if (window.webkitURL != null) {
      downloadLink.href = window.webkitURL.createObjectURL(textFileAsBlob);
    } else {
      downloadLink.href = window.URL.createObjectURL(textFileAsBlob);
      downloadLink.onclick = document.body.removeChild(event.target);
      downloadLink.style.display = "none";
      document.body.appendChild(downloadLink);
    }
