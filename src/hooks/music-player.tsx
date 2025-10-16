// import Sound from "react-native-sound";

// // Enable playback in silence mode (important for iOS)
// Sound.setCategory("Playback");
// // const audioSource = require('@/assets/audios/dolorosos.mp3')

// // Load a sound file from the app bundle
// const whoosh = new Sound('@/assets/audios/dolorosos.mp3', Sound.MAIN_BUNDLE, (error) => {
//   if (error) {
//     console.log("Failed to load the sound", error);
//     return;
//   }

//   // Sound loaded successfully
//   console.log("Duration:", whoosh.getDuration(), "seconds");
//   console.log("Channels:", whoosh.getNumberOfChannels());

//   // Play the sound
//   whoosh.play((success) => {
//     if (success) {
//       console.log("Successfully finished playing");
//     } else {
//       console.log("Playback failed due to audio decoding errors");
//     }
//   });
// });