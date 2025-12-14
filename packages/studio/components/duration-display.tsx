import { Stack, Text } from '@sanity/ui';

export default function DurationDisplay(props) {

  const match = props.value.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+(?:\.\d+)?)S)?/);
  const [, hours = 0, minutes = 0, seconds = 0] = match || [];

  return (
    <Stack space={3}>
      {props.renderDefault(props)}
      <Text size={1}>Duration: {hours}h {minutes}m {seconds}s</Text>
    </Stack>
  );
}
