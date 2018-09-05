var ref = require("ref");
var ffi = require("ffi");

// typedefs
var myobj = ref.types.void // we don't know what the layout of "myobj" looks like
var myobjPtr = ref.refType(myobj);

var MyLibrary = ffi.Library('libspeakerVerification', {
  "get_xvector_graph": [ 'XvectorSystem', [ 'string' ] ]
});


MyLibrary.get_xvector_graph("/Users/yaar/Developer/electron-quick-start/conf1")
