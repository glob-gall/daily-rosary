import { useAudioPlayer } from 'expo-audio';
import { Button, Text, View } from 'react-native';

const audioSource = require('@/assets/audios/dolorosos.mp3')

export default function AudioPlayer() {
  const player = useAudioPlayer(audioSource);
  console.log({player: player.currentStatus, loaded: player.isLoaded});
  if(!player.isLoaded) return (
    <Text className='text-primary'> loading</Text>
  )
  return (
    <View className=''>
      {player.playing ? (
        <Button title="Pause Sound" onPress={() =>player.pause()} />
      ): (
        <Button title="Play Sound" onPress={() =>player.play()} />
      )}
      <Button
        title="Replay Sound"
        onPress={() => {
          player.seekTo(0);
          player.play();
        }}
      />

      <View>
        <Text className='text-primary'>{player.currentTime}/{player.duration}</Text>
      </View>
    </View>
  );
}