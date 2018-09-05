const argMax = (array) => {
    return array.map((x, i) => [x, i]).reduce((r, a) => (a[0] > r[0] ? a : r))[1];
}

const onError = (err) => {
    console.log(err)
}

const CHUNK_SIZE = 256
const NUM_CHANNELS = 1
const SAMPLE_RATE = 16000
const DEFAULT_SAMPLE_RATE = 44100
let firstChunkCounter = Math.floor(DEFAULT_SAMPLE_RATE / CHUNK_SIZE)


const onSuccess = (stream) => {

    let onCompleteFunc = (audio) => {}
    let context = new AudioContext()
    let source = context.createMediaStreamSource(stream)
    let processor = context.createScriptProcessor(CHUNK_SIZE, NUM_CHANNELS, NUM_CHANNELS)
    source.connect(processor)
    processor.connect(context.destination)
    
    let offlineContext = new OfflineAudioContext(1, CHUNK_SIZE * firstChunkCounter, SAMPLE_RATE)
    offlineContext.oncomplete = onCompleteFunc
    console.log(offlineContext.state)
    offlineContext.startRendering()
    console.log(offlineContext.state)

    // console.log('onSuccess')
    processor.onaudioprocess = (audio) => {
        // console.log(audio.inputBuffer.getChannelData(0))
        // audio.inputBuffer.getChannelData(0)
        console.log(offlineContext.state)
        offlineContext.startRendering()
        console.log(offlineContext.state)


    }
}




navigator.mediaDevices.getUserMedia({ audio: true }).then(onSuccess)

